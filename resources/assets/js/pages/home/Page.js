import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-bootstrap';


class Page extends Component {
static displayName : 'HomePage'
static propTypes : {
    dispatch: PropTypes.func.isRequired,
}

constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

render() {
    return (
        <div>
          <Image src="/images/home/map.gif" responsive className="center-block" />
        </div>
    )
}
}

export default Page
