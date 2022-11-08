import React, {Component} from 'react';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

const SimpleMapExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={15}
    options={{
      scrollwheel: false,
    }}
    defaultCenter={{lat: 47.646935, lng: -122.303763}}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const SimpleMap = ({styleName}) => {
  if (!styleName) {
    styleName = styles.contactEmbedResponsive21by9;
  }
  return (
    <SimpleMapExampleGoogleMap
      containerElement={
        <div
          className={clsx(
            styles.contactEmbedResponsive,
            styleName,
            'd-block position-relative w-100 p-0 overflow-hidden',
          )}
        />
      }
      mapElement={<div className={styles.contactEmbedResponsiveItem} />}
    />
  );
};

export default SimpleMap;

SimpleMap.propTypes = {
  styleName: PropTypes.object,
};
