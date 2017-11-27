import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-bootstrap';


class Page extends Component {
static displayName : 'Page404'
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
          <Image src="/images/page404/error-404.png" responsive className="center-block" />
        </div>
    )
}
}

export default Page
