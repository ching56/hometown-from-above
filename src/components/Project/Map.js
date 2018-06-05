import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Compare from 'mapbox-gl-compare';
import Container from '../common/Container';

mapboxgl.accessToken = 'pk.eyJ1IjoibmNrdW1lZGlhdGVrIiwiYSI6ImNqaHcxNG93NTE1MGkzcHFocHM0MWM2MXYifQ.IyKW8pIV6KIJ-hUWkBhBrQ';

const RelativeContainer = Container.extend`
  position: relative;
  flex: 1;
  flex-basis: 100%;
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
      "id": "raster-tiles",
      "source": {
        type: 'raster',
        url: `mapbox://${mapid}`,
        tileSize: 256,
      },
      type: 'raster',
    });
  });
  return map;
}

class Map extends Component {
  componentDidMount() {
    this.beforeMap = getNewLayer(this.beforeMapDOM, this.props.newer.mapID, this.props.newer.center || [120.99, 23.906]);
    this.afterMap = getNewLayer(this.afterMapDOM, this.props.older.mapID, this.props.older.center || [120.99, 23.906]);
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
    this.beforeMapDOM.innerHTML = '';
    this.afterMapDOM.innerHTML = '';
    if (this.props.newer)
    { this.beforeMap = getNewLayer(this.beforeMapDOM, this.props.newer.mapID, this.props.newer.center || [120.99, 23.906]);}
    if (this.props.older)
    { 
      this.afterMap = getNewLayer(this.afterMapDOM, this.props.older.mapID, this.props.older.center || [120.99, 23.906]);
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
      </RelativeContainer>
    );
  }
}

Map.propTypes = {
  newer: PropTypes.object,
  older: PropTypes.object,
};

export default Map;
