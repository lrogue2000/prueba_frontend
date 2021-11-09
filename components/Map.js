import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import UbicacionForm from './UbicacionForm';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 9.93,
      lng: -84.10
    },
    zoom: 11
  };

  render() {
    return (
      
      <div style={{ height: '100vh', width: '100%' }}>
      
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyDVQZHqV6HcCqydL0HseJNI16mtWPwwom8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat= {9.93580867576007}
            lng={-84.10160121790787}
            text="Ubicacion actual"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;