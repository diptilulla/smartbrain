import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        } 
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    } 

    onPasswordChange = (event)  => {
        this.setState({password: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3001/register', {   //fetch by default does get request but here we need post request so we add a second parameter that is an object to describe what eq would be
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({        //converting object to json
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                  this.props.loadUser(user);
                  this.props.onRouteChange("home");
                }
            })
        // console.log(this.state);
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0"> Register </legend>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input 
                        className="pa2 input-reset ba b--black bg-transparent hover-bg-b lack hover-white w-100" 
                        type="email" 
                        name='name'  
                        id="name" 
                        onChange= {this.onNameChange} 
                    />
                    </div>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                        className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address" 
                        onChange= {this.onEmailChange}
                    />
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password" 
                        onChange= {this.onPasswordChange}
                    />
                    </div>
                </fieldset>
                <div className="">
                <input
                    onClick={this.onSubmitSignIn}  //we are using arrow functions to define a new func to avoid calling the function when rendering function is to be called onClick
                    className="br2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register" 
                    />
                </div>
                </div>
            </main>
        </article>
        
        );
    }
}

export default Register;