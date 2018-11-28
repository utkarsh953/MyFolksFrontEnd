import React, { Component } from 'react';
import '../css/auth.css';
import LandingPage from '../../Components/LandingPage/LandingPage';




 class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isUserRegistered:true,
                        isUserAuthenticated:true,
                        first_name:"",
                        last_name:"",
                        username:"",
                        email:"",
                        email2:"",
                        password:"",
                        response:""
                    }
      }


handleUser = () =>{
    console.log("handleUser is called")
    if (this.state.isUserRegistered === true){
    this.setState({isUserRegistered:false})  
    }
    else{
        this.setState({isUserRegistered:true})
    }

}
first_nameTextChange = (e) => {
    this.setState({
        first_name: e.target.value
    }) 
  }
  last_nameTextChange = (e) => {
    this.setState({
        last_name: e.target.value
    }) 
  }
  usernameTextChange = (e) => {
    this.setState({
        username: e.target.value
    }) 
  }
  emailTextChange = (e) => {
    this.setState({
        email: e.target.value
    }) 
  }
  email2TextChange = (e) => {
    this.setState({
        email2: e.target.value
    }) 
  }
  passwordTextChange = (e) => {
    this.setState({
        password: e.target.value
    }) 
  }



RegisterUser = () =>{

    fetch('http://127.0.0.1:8000/api/users/register/', {
			method: 'POST',
			body: JSON.stringify({
				first_name:  this.state.first_name,  
                last_name: this.state.last_name,  
                username : this.state.username,
                email:  this.state.email,
                email2:  this.state.email2,
                password: this.state.password
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				response:json
			});
		})


    }


	render() {
		return (
			<div>
                {this.state.isUserAuthenticated === true ?
                   <LandingPage />
                    :
                    <div className="root">
                    <img className ="logo" src={require('../../images/logo.svg')} />
                    <h1 className="title">MyFolks</h1>
                {this.state.isUserRegistered === true ?  <div className="loginbox">
                            <div className="username"><input placeholder="Username" type ="email"/></div>
                            <div className="password"><input type ="password"/></div>
                            <div className="buttonwrapper">
                            <div className="signupbtn"><input type="submit" value="SignIn"/></div>
                            <div className="loginbtn" onClick={this.handleUser}><input type="submit" value="SignUp"/></div>
                            </div>
                            
                        </div>
                        :
        
                        <div className="signupbox">
                            <div className="username"><input  placeholder="FirstName"  onChange={this.first_nameTextChange} value= {this.state.first_nameTextChange} type ="text"/></div>
                            <div className="password"><input  placeholder="LastName" onChange={this.last_nameTextChange} value= {this.state.last_nameTextChange} type ="text"/></div>
                            <div className="password"><input  placeholder="UserName"  onChange={this.usernameTextChange} value= {this.state.usernameTextChange} type ="text"/></div>
                            <div className="username"><input  placeholder="Email"  onChange={this.emailTextChange} value= {this.state.emailTextChange} type ="email"/></div>
                            <div className="password"><input  placeholder="Confirm Email" onChange={this.email2TextChange} value= {this.state.email2TextChange} type ="email"/></div>
                            <div className="password"><input  placeholder="Password"  onChange={this.passwordTextChange} value= {this.state.passwordTextChange} type ="password"/></div>
                            <div className="buttonwrapper">
                            <div className="signupbtn"><input onClick = {this.handleUser} type="submit" value="SignIn"/></div>
                            <div className="loginbtn" onClick={this.RegisterUser}><input type="submit" value="SignUp"/></div>
                            </div>
                            
                        </div>
                        }
                       
        
        
        
                       
                    </div>
                }
            </div>
		);
	}
}
export default Auth;