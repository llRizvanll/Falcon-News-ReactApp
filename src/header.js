import React from 'react';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Headlines from './headlines';
import "tabler-react/dist/Tabler.css";
import C3Chart from "react-c3js";
import {Card,Nav,Header} from "tabler-react";
import Categories from './categories';
import SimpleImageSlider from "react-simple-image-slider";

class Dashboard extends React.Component{

   

    render(){
        const images = [
            { url: "https://image.cnbcfm.com/api/v1/image/106688773-1599095666035-gettyimages-1228314831-talukdar-notitle200902_npgly.jpeg?v=1599096413" },
            { url: "https://cdn.cnn.com/cnnnext/dam/assets/200908014248-02-california-el-dorado-gender-reveal-wildfire-super-tease.jpg" },
            { url: "https://s4.reutersmedia.net/resources/r/?m=02&d=20200819&t=2&i=1530204570&w=1200&r=LYNXNPEG7I0XY" },
            { url: "https://static01.nyt.com/images/2020/08/27/us/politics/27onpolitics-pm/merlin_176188128_e389132c-2257-4abc-b380-6ec98f3dbeca-facebookJumbo.jpg" },
            { url: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" },
            
        ];
        return (
            <div >
            
            <React.Fragment >
                
                    {/* <div className="head">
                        <div className="headerobjectswrapper"> */}
                            {/* <div className="weatherforcastbox">
                                <span style={{fontStyle: 'italic'}}>Weatherforcast for the next 24 hours: Plenty of Sunshine</span><br/>
                                <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
                            </div> */}
                            
                        {/* </div>
                        
                    </div> */}
                    
                    <div style={{position:"fixed",zIndex:"10",background:"#f1e9e9de",width:"100%",height:"80px"}}>
                        <Card>
                            <ul className="">
                                <Header.H4>Falcon</Header.H4>
                                <Nav>
                                    {/* <Nav.Item value="Home" icon="globe" to="/" active></Nav.Item> */}
                                    <Nav.Item to="http://www.example.com" value="Home" to="/categories/latest" active></Nav.Item>
                                    <Nav.Item value="Bitcoin" to="/categories/covid">Covid-19</Nav.Item>
                                    <Nav.Item icon="globe" value="WSJ" to="/categories/WSJ"></Nav.Item>
                                    <Nav.Item icon="globe" to="/categories/Google">Google</Nav.Item>
                                    <Nav.Item icon="globe" to="/categories/Technology">Technology</Nav.Item>
                                    <Nav.Item icon="globe" to="/categories/India">India</Nav.Item>
                                    <Nav.Item icon="globe" to="/categories/Canada">Canada</Nav.Item>
                                    <Nav.Item icon="globe" to="/categories/World">World</Nav.Item>
                                </Nav>
                            </ul>
                        </Card>
                    </div>
                    
                

                 <div style={{width:"100%",marginLeft:"80px"}}>
                 <SimpleImageSlider
                    style={{alignSelf:"center"}}
                    width={"90%"}
                    height={600}
                    images={images}
                    navStyle={2}
                />
                     </div>  
                <div style={{marginLeft:"20px",position:"absolute",marginTop:"40px",marginRight:"20px"}}>
                    
                    <Router>
                        <div className="">
                        
                        <Route exact path="/" component={Headlines} />
                        <Route path="/categories/:name" component={Categories} />
                        </div>
                    </Router>
                </div>
            </React.Fragment>
            
            </div>
        );
    }
}

export default Dashboard;