import React, { Component } from 'react';
import {Container} from '../../Themes/grid';
import { Image,Holla,Peff } from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView'



class Home extends Component {
    render() {
        return (
            <Container>
                <Holla>
                    <h1>Satwik Mandapati</h1>  
                    <h2>Front-end Developer</h2>  
                </Holla>    
            
                {/* <Image src={require('../../Media/me.jpg')} /> */}

                <Peff hide>     fqHam followed now ecstatic use speaking exercise 
                        may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing
                        females so improve in picture. Mrs can hundred its greater account. Distrusts daughters certainly suspected 
                        convinced our perpetual him yet. Words did noise taken right state are since. 
                </Peff>
           </Container>
        )
    }
}



export default Home;

