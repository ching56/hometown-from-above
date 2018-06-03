import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Compare from 'mapbox-gl-compare'
import styled from 'styled-components';

mapboxgl.accessToken = 'pk.eyJ1IjoibmNrdW1lZGlhdGVrIiwiYSI6ImNqaHcxNG93NTE1MGkzcHFocHM0MWM2MXYifQ.IyKW8pIV6KIJ-hUWkBhBrQ';

const Container = styled.div`
  position: relative;
  height: 100%;
`

class Map extends Component {
  componentDidMount() {
    this.beforeMap = new mapboxgl.Map({
      container: this.beforeMap,
      style: {
        "version": 8,
        "sources": {
          "raster-tiles": {
            "type": "raster",
            "url": "mapbox://nckumediatek.dmhf4k76",
            "tileSize": 256
          }
        },
        "layers": [{
          "id": "simple-tiles",
          "type": "raster",
          "source": "raster-tiles",
          "minzoom": 0,
          "maxzoom": 22
        }]
      },
      center: [120.99,23.906],
      zoom: 17
    });

    this.afterMap = new mapboxgl.Map({
      container: this.afterMap,
      style: {
        "version": 8,
        "sources": {
          "raster-tiles": {
            "type": "raster",
            "url": "mapbox://nckumediatek.0g8z8y6p",
            "tileSize": 256
          }
        },
        "layers": [{
          "id": "simple-tiles",
          "type": "raster",
          "source": "raster-tiles",
          "minzoom": 0,
          "maxzoom": 22
        }]
      },
      center: [120.99,23.906],
      zoom: 17
    });
    // this.beforeMap.addSource('nckumediatek.dmhf4k76');
    // this.afterMap.addSource('nckumediatek.0g8z8y6p');
    new Compare(this.beforeMap, this.afterMap, {
    });
  }
  componentWillUnmount() {
    this.beforeMap.remove();
    this.afterMap.remove();
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
      <Container>
        <div style={style} ref={el => this.beforeMap = el} />
        <div style={style} ref={el => this.afterMap = el} />
      </Container>
    )
  }
}

Map.propTypes = {
  dateNewer: PropTypes.instanceOf(Date),
  dateOlder: PropTypes.instanceOf(Date),
};

export default Map;