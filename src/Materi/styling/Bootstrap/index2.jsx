import React from 'react';
import './index2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Form, InputGroup} from "react-bootstrap";

export default class Bootstrap extends React.Component {
    render() {
        return (
            <div>
                <div className="ps-5 mb-4 bg-light rounded-3 jumbotron">
                <div className="container-fluid py-5 text-center  text-white">              
                    <p className=" fs-5 fst-italic mt-5">
                    progammer | developer | designer
                    </p> 
                    <h1 className="name">WAHYUDIN</h1>
    
                    <button class="btn btn-primary border-dark btn-sm shadow-sm text-white px-3 py-2 mt-5">
                        Linkedin Wahyudin
                    </button>             
                </div>
            </div>
            <Container>
                <h3 class="fw-bold fs-2 text-center">My Bio</h3>
                    <p class="fs-6 fst-italic fs-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptates 
                    tempora odit necessitatibus perspiciatis rerum expedita, 
                    alias architecto quia beatae laudantium cum a nemo non. Fugiat ab iste saepe ducimus!
                    </p>  

                <div class="row text-center mt-5">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="fs-5 fw-bold">Bed cum wheel chair</h6>
                        <p class="fw-light text-center">Created a bed cum wheelchair model which will be very useful for
                            patients who cannot move from bed and does not need anybody to make
                            them lay in bed</p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="fs-5 fw-bold">Rock Paper Scissor game</h6>
                        <p class="fw-light" >
                        Created a Rock Paper Scissor game in Python language.This was my
                        first project in python.Learning Machine learning with python
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="fs-5 fw-bold">Volunteer in NSS</h6>
                        <p class="fw-light">
                        I am a NSS volunteer and I am doing social activities with the help
                        of our institution. I Went to Eripatti,Pollachi and renowated
                        schools and the surrounding areas along with my student friends.
                        </p>
                    </div>
                </div>
            </Container>

            <h3 class="text-center fw-bold fs-2">Contact</h3>
            <div class="card mx-auto " style={{width: "700px"}}>
            <form>
                <div class="mb-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </div>
                <div class="mb-3">
                    <label for="floatingTextarea">Message</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    
                </div>
 
                <div class="d-grid gap-2">
                    <button class="btn btn-primary border-dark shadow-sm text-white px-3 py-2 mt-3">
                        Send
                    </button>
                </div>             
              </form>
        </div>

            <div class="container-fluid bg-dark mt-5 mb-0">
                <footer>
                    <p class="text-white text-center footer">&copy; 2021 Eduwork, Inc. All rights reserved.</p>
                </footer>
            </div>
                </div>

        )
    }
}