import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Container from '../Themes/grid/container';

const Image = styled.img `
    width : 10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    border-radius: 50%
`;

const rotate360 = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Shanky = styled.div `
    font-size: 300%;
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    
`

class Home extends Component {
    render() {
        return (
            <Container>
                <Shanky>Yello!!</Shanky>
            
                <Image src={require('../Media/me.gif')} />

                <p>     fqHam followed now ecstatic use speaking exercise 
                        may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing
                        females so improve in picture. Mrs can hundred its greater account. Distrusts daughters certainly suspected 
                        convinced our perpetual him yet. Words did noise taken right state are since. 
                </p>
           </Container>
        )
    }
}



export default Home;

