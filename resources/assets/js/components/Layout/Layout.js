// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="Layout">
        <Header title="TMM" items={items}/>
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}
