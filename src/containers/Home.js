import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
    width : 100%;
`;

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello!  >8)</h1>
            
                <img src={require('../Media/me.gif')} />
           </div>
        )
    }
}

Home.propTypes = {

};

export default Home;

