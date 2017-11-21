//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';

class App extends Component {

    static PropTypes : {
        children: PropTypes.object.isRequired
    }

    render() {
        const {children} = this.props;

        return (
            <div className="App">
                <div>
                    <Header title="My Page"/>
                    <Content body={children} />
                    <Footer copyright="prueba" />
                </div>
            </div>
        );
      }
}

export default App;
