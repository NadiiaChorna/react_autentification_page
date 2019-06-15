import React, { Component } from 'react';
import FormComponent from '../../components/formComponent/formComponent';

import {filds} from './fildsFnfo';

export default class Autentification extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isMember: true
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    filterFilds = (arr, status) => {
        if(status){
          return arr.filter((el)=>status === el.isMember);
        }else{
          return arr
        }
    }

    onButtonClick = () => {
        this.setState(()=>{
            return {
                isMember: !this.state.isMember
            }
        })
    }

    onRegistratuinSubmit = (e) => {
        e.preventDefault();
        if(this.state.password!==this.state.passwordConfirmation){
            return 'Please check password confirmation';
        }
        console.log('Registration');
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        fetch('http://localhost:3300/users', {
            method: 'POST',
            mode: "cors",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data => console.log(data))
    }

    onLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login');
        fetch('http://localhost:3300/users')
        .then(res=>res.json())
        .then((data) => console.log(data))
    }

    render() {
        const {isMember} = this.state;
        const fildsToRender = this.filterFilds(filds, isMember);
        const formTitle = this.state.isMember?'Login':'Registration';
        const message = this.state.isMember?'Dont have an account?':'Already a member?';
        const buttonName = this.state.isMember?'Registration':'Login';
        return (
            <div>
                <div className='form-container'>
                    <h1>{formTitle}</h1>
                    <FormComponent
                        onSubmit={isMember?this.onLoginSubmit:this.onRegistratuinSubmit}  
                        onInputChange={this.onInputChange} 
                        fildsToRender={fildsToRender}/>
                    <div>
                        {message}
                        <button onClick={this.onButtonClick}>
                            {buttonName}
                        </button>
                    </div>
                </div>  
            </div>
        )
    }
}
