import React from "react";
import * as Validator from 'validatorjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Form, Button} from "react-bootstrap";


export default class Validation3 extends React.Component {
   

    render(){

        
        const style={
            width:'400px',
            margin: '100px auto 0',
            border:'1px solid grey',
            radius: '2px',
            padding:'10px'
        }
        return(

                <Form style={style}s>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            
        )
    }
}