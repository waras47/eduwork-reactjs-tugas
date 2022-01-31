import React from "react";
import * as Validator from 'validatorjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Form, InputGroup} from "react-bootstrap";
const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label>{label} :</label>
            <br/>
            <input type={type} name={name} onChange={e =>onChange(e.target.value)}/>
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


export default class Validation1 extends React.Component {
    state ={
        email :'',
        password :'',
        errors : []
    }

    handleSubmit= event => {
        event.preventDefault();
        const {email, password}= this.state;
        let data = { email,password };
          
          let rules = {
            email: 'required|email',
            password: 'min:8|required'
          };

          let validation = new Validator(data, rules);
          validation.passes();
          this.setState({
              errors : [
                  ...validation.errors.get('email'),
                  ...validation.errors.get('password')
                ] 
          })

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


                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.errors && <ShowErrors errors={this.state.errors}/>
                    }

                    <h3>Login Page</h3>
                    <Input type="email" name="email" label="Email"
                     onChange= {value => this.setState({email: value})}/>
                     <br/>
                    <Input type="password" name="password" label="Password"
                     onChange= {value => this.setState({password: value})}/>
                     <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}