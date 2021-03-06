import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Compare from 'mapbox-gl-compare';
import Container from '../common/Container';
import styled from 'styled-components';

mapboxgl.accessToken = 'pk.eyJ1IjoibmNrdW1lZGlhdGVrIiwiYSI6ImNqaHcxNG93NTE1MGkzcHFocHM0MWM2MXYifQ.IyKW8pIV6KIJ-hUWkBhBrQ';

const RelativeContainer = Container.extend`
  position: relative;
  flex: 1;
  flex-basis: 70%;
`;
const LabelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;
const Label = styled.div`
  padding: 12px;
  color: white;
  opacity: 0.8;
`;

function getNewLayer(container, mapid, center) {
  const map = new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/streets-v9',
    center,
    zoom: 17,
  });

  map.on('load', () => {
    map.addLayer({
      'id': 'raster-tiles',
      'source': {
        type: 'raster',
        tiles: [`https://api.mapbox.com/v4/${mapid}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmNrdW1lZGlhdGVrIiwiYSI6ImNqaHcxNG93NTE1MGkzcHFocHM0MWM2MXYifQ.IyKW8pIV6KIJ-hUWkBhBrQ`],
      },
      type: 'raster',
    });
  });
  return map;
}

class Map extends Component {
  componentDidMount() {
    this.beforeMap = getNewLayer(this.beforeMapDOM, this.props.newer.mapID, this.props.newer.center || [120.99, 23.906]);
    this.afterMap = getNewLayer(this.afterMapDOM, this.props.older.mapID, this.props.newer.center || [120.99, 23.906]);
    this.compare = new Compare(this.beforeMap, this.afterMap, {
      // mousemove: true
    });
  }
  componentWillUnmount() {
    this.beforeMap.remove();
    this.afterMap.remove();
    this.compare = undefined;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const curProps = this.props;
    if (prevProps.newer.mapID === curProps.newer.mapID && prevProps.older.mapID === curProps.older.mapID)
      return;
    this.beforeMapDOM.innerHTML = '';
    this.afterMapDOM.innerHTML = '';
    if (this.props.newer) { this.beforeMap = getNewLayer(this.beforeMapDOM, this.props.newer.mapID, this.props.newer.center || [120.99, 23.906]); }
    if (this.props.older) {
      this.afterMap = getNewLayer(this.afterMapDOM, this.props.older.mapID, this.props.newer.center || [120.99, 23.906]);
      this.compare = new Compare(this.beforeMap, this.afterMap, {});
    }
  }
  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    };
    return (
      <RelativeContainer>
        <div style={style} ref={el => this.beforeMapDOM = el} />
        <div style={style} ref={el => this.afterMapDOM = el} />
        <LabelContainer>
          <Label>{this.props.newer.date}</Label>
          <Label>{this.props.older.date}</Label>
        </LabelContainer>
      </RelativeContainer>
    );
  }
}

Map.propTypes = {
  newer: PropTypes.object,
  older: PropTypes.object,
};

export default Map;
