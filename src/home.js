import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button,Row , Col} from 'react-bootstrap';
import logo from './images/logo.jpg'
import bg from './images/three.jfif'
import pic1 from './images/jp1.jpg'
import pic2 from './images/jp2.jpg'
import pic3 from './images/jp3.jpg'

class Home extends Component {
    render() {
        return (
            <div >
                <>



  <div  className = "content" id= "image" style={{
    backgroundColor: "#d6f2ff",
      paddingBottom: "4rem",
      backgroundImage: 'url('+bg+')'

    }}>
        
    <section id ="about" style = {{ backgroundColor:'black'}}>
        <div classname="about"  style = {{ color:'White'}} >
            <center> <h1>About Silver Coin Bank</h1></center>   

        </div>
            <div  style = {{ color:'White'}} >
                <center >
                Silver Coin Bank is a global leader in financial services, offering solutions to the world's most important corporations, governments and institutions in more than 100 countries. As announced in early 2018, Silver Coin Chase will deploy $1.75 billion in philanthropic capital around the world by 2023. We also lead volunteer service activities for employees in local communities by utilizing our many resources, including those that stem from access to capital, economies of scale, global reach and expertise.
                </center>
        </div>
            
    </section>

    <section class="white-section" id="pricing">     
        <center><h2  class="section-heading">Corporate Responsibility</h2></center>

        <div class="row"  >   
        <div class="pricing-column  col-md-6 col-lg-4">      
            <div class="card1">

                <div class="card-header">

                    <h3>Initiatives or Resourcefulness </h3>
                        <div style ={{backgroundImage: 'url('+pic1+')'}}>


                     </div>
                        </div>
                 <div class="card-body">

                    <p>We invest in our communities and partner with local organizations to provide creative solutions that respond to neighborhood development needs.Our initiatives make a tangible contribution to the Sustainable Development.</p>

      

                 </div>

              </div>

        </div>

         <div class="pricing-column col-md-6 col-lg-4">

            <div class="card2">

              <div class="card-header">

                <h3>Strengthening Communities</h3>
                    <div style ={{backgroundImage: 'url('+pic2+')'}}>


                     </div>

                    


              </div>

             <div class="card-body">

              <p>In 2019, Silver Coin deployed nearly $324.5 million in global philanthropic and business investments, and employees volunteered approximately 468,000.</p>


             </div>

            </div>

          </div>    
          <div class="pricing-column col-md-12 col-lg-4">

            <div class="card3">

              <div class="card-header">

                <h3>Environmental Sustainability</h3>
                    <div style ={{backgroundImage: 'url('+pic3+')'}}>


                     </div>
              </div>

              <div class="card-body">

        

                  <p>Our leading scale and expertise help us reduce environmental risks while generating new opportunities to create a more sustainable global economy.Purchasing green power.</p>

                  

              </div>

           </div>

         </div>

        </div>        

    </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <Container>
            <Row>
                <Col className = "content" style = {{backgroundImage: 'url('+pic1+')'}}></Col>
            </Row>
        </Container>
       <Container>
           <Row style={{padding: "200px"}}>
               <Col>
               <Button  style={{backgroundColor:"black",width: "180px"}} variant="outline-success" href="/users">Users List</Button>{' '}
               </Col>
               <Col>
               <Button style={{backgroundColor:"black",width: "180px"}} variant="outline-danger" href="/transfer">Transfer</Button>{' '}
               </Col>
               <Col>
               <Button style={{backgroundColor:"black",width: "180px"}} variant="outline-info" href="/transactions">Transaction History</Button>{' '}
               </Col>
           </Row>
           </Container>




    </div>
</>
            </div>
        )
    }
}
export default Home
