import React from "react";
import  {Button,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label>{label} :</label>
            <br/>
            <Form.Control type={type} name={name} onChange={e =>onChange(e.target.value)}/>
            <br/>
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft:'-20px'}}>
            {
                errors.map((error, i ) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}


export default class Validation extends React.Component {
    state = {
        email :'',
        password :'',
        errors : []
    }

    handleSubmit= event => {
        event.preventDefault();
        const {email, password}= this.state;
        let message = [];
        if(email.length === 0){
            message = [...message,'Email tidak boleh kosong'];
        }
        if(password.length === 0){
            message = [...message,'password tidak boleh kosong'];
        }
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            message = [...message,'email Tidak valid'];
        }
        if(password.length < 8 ){
           message = [...message,'password terlalu pendek'];
        }
        if(message.length > 0 ){
            this.setState({
                errors : message
            
            });
        }else{
            alert(`
            email : ${this.state.email}
            password : ${this.state.password}    
        `);
        this.setState({
            errors: []
        })
        }
    }
    

    render(){

        const style={
            width:'400px',
            margin: '100px auto 0',
            border:'1px solid black',
            padding:'10px'
        }
        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }

                <Form onSubmit={this.handleSubmit}>
                    <h1 className="text-center">Form Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                  
                        <Input type="email" name="email" label="Email"
                     onChange= {value => this.setState({email: value})} />
                        
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                      
                        <Input  type="password" name="password" label="Password"
                     onChange= {value => this.setState({password: value})}/>
                        
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
              
            </div>
        )
    }
}