import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
    width : 60%;
    border-radius: 50%
`;

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello!  >8)</h1>
            
                <Image src={require('../Media/me.gif')} />

                <p>     Ham followed now ecstatic use speaking exercise 
                        may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing
                        females so improve in picture. Mrs can hundred its greater account. Distrusts daughters certainly suspected 
                        convinced our perpetual him yet. Words did noise taken right state are since. 
                </p>
           </div>
        )
    }
}

Home.propTypes = {

};

export default Home;

