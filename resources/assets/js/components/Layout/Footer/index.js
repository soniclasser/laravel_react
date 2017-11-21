// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
//import './css/Footer.css';

class Footer extends Component {
	static propTypes : {
    copyright: PropTypes.string
  };

  render() {
 	const { copyright = '&copy; React 2017' } = this.props;
	const style = {
	backgroundColor: "#F8F8F8",
	background: '#000000',
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

    return (
      <footer className="Footer" style={style}>
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </footer>
    );
  }
}

export default Footer;
