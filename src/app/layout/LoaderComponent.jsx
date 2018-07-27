import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderComponent = ({inverted}) => {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content="loading ...."/>
    </Dimmer>
  )
}

export default LoaderComponent;

