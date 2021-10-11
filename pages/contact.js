import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import { NavBar } from '../components/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Footer } from '../components/Footer';

export default function contact() {
    const [status, setStatus] = useState("Send");
    const handleSubmit = e => {
        e.preventDefault();
        setStatus("Sending");
        setStatus("Sent!")
        setStatus("Send")
    }
    return (
        <div>
            <NavBar />
            <div className="contact" id="hero">
                <Container>
                    <Row>
                        <Col sm>
                            <h1 className="p-5 font-weight text-center herotext">MAKE YOUR ENQUIRIES</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{padding: "5px"}} className="form" >
               <div className="text-white">
                   <Row>
                        <Col className="col-sm-6 p-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="md-form mb-0">
                                            <label for="name" style={{fontSize: "small"}}>Your name</label>
                                            <input type="text" id="name" name="name" class="form-control"/> 
                                        </div>
                                    </div>
                                    
                                    <div class="col-sm-6">
                                        <div class="md-form mb-0">
                                            <label for="email" style={{fontSize: "small"}}>Your email</label>
                                            <input type="text" id="email" name="email" class="form-control"/>
                                            
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="md-form mb-0">
                                            <label for="subject" style={{fontSize: "small"}}>Subject</label>
                                            <input type="text" id="subject" name="subject" class="form-control"/>  
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="row">

                                    {/* <!--Grid column--> */}
                                    <div class="col-sm-12">

                                        <div class="md-form">
                                            <label for="message" style={{fontSize: "small"}}>Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>    
                                        </div>
                                    </div>
                                </div>
                                {
                                    <button className="cta px-4 py-2 my-4 text-center" onClick={handleSubmit}>{ status }</button>
                                }
                            </form>
                        </Col>
                        <Col sm={4} className="text-center p-3">
                            <h1 className="p-2 m-4">Want to discuss your next project?</h1>
                            <br />
                            <span class="cta">Contact Sales team</span>
                        </Col>
                    </Row>
            </div>
                   
                
            </div>
            
            <Footer />
        </div>
    )
}
