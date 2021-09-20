import React, {Component} from 'react';

import {  Navbar, Nav, Container, Button,Row,Col} from 'react-bootstrap';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import mailIcon from '@iconify-icons/ci/mail';
// import phoneIcon from '@iconify-icons/ci/phone';





class Footer extends Component {
    render() {
    return(
        <footer>
            <div className="footer">
            <Container >
            <Row>
                <Col>
                <h4 style={{color: "#ffa931"}}>Silver Coin Bank <small style={{fontSize: "15px"}}>Online Banking System</small></h4>
                <ul className="list-unstyled" style={{color: "gray"}}>
                    <li>123 road,</li>
                    <li>sector-10,</li>
                    <li>pincode-410810, Navi- Mumbai</li>
                </ul>
                
                </Col>
                <Col>
                <h4 style={{color: "white"}}>Follow us on</h4>
                <ul className="list-unstyled" >
                    <li>
                <a href="https://github.com/sahilninawe" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px", color: "orange"}} icon={faFacebook} size="3x"  /></a>
                <a href="https://github.com/sahilninawe" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px",color: "orange"}} icon={faTwitter} size="3x"  /></a>
                <a href="https://github.com/sahilninawe" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px",color: "orange"}} icon={faInstagram} size="3x"  /></a>
                </li>
                </ul>
                </Col>

                <Col>
                <h4 style={{color: "white"}} >Have Any Questions?</h4>
               <ul className="list-unstyled" style={{color: "gray"}}>
                   <li>
                       support.silver_coin.bank@gmail.com
                   </li>
                   <li>
                    022-982982982
                   </li>
               </ul>
               

                </Col>
            </Row>
            <div className="footer-copyright text-center py-3" style={{color: "orange"}}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> sahilninawe2002@gmail.com | https://github.com/sahilninawe</a>
        </Container>
      </div>

            </Container>  
            </div>  
        </footer>
    )
};
    }

  export default Footer