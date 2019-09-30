import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: [],
    }

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
        } = this.state;

        return (
            <div className="bounds">
                <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    {
                        this.state.errors.length ?
                            <div>
                                <h2 className="validation--errors--label">Error creating account:</h2>
                                <div className="validation-errors">
                                    <ul>
                                        {this.state.errors.map((error, i) => <li key={i}>{error}</li>)}
                                    </ul>
                                </div>
                            </div> : null
                    }
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign Up"
                        elements={() => (
                            <React.Fragment>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.change}
                                    placeholder="First" />
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.change}
                                    placeholder="Last" />
                                <input
                                    id="emailAddress"
                                    name="emailAddress"
                                    type="text"
                                    value={this.state.emailAddress}
                                    onChange={this.change}
                                    placeholder="Email" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.change}
                                    placeholder="Password" />
                            </React.Fragment>
                        )} />
                    <p>
                        Already have a user account? <Link to="/signin">Click here</Link> to sign in!
          </p>
                </div>
            </div>
        );
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        const { context } = this.props;
        const {
            firstName,
            lastName,
            emailAddress,
            password,
        } = this.state;
        if (firstName === '' || lastName === '' || emailAddress === '' || password === '' ) {
            this.setState({
                errors: ["Missing information - Please check all fields are entered correctly"]
            })
            return;

        }

        // Create user
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
        };



        context.data.createUser(user)
            .then(errors => {
                if (errors.length === null) {
                    this.setState(() => {
                        return { errors: ['Sign-up was unsuccessful']}
                    });
                } else {
                    context.actions.signIn(emailAddress, password)
                        .then(() => {
                            this.props.history.push('/');
                        });
                }
            })
            .catch((err) => {
                console.log(err);
                this.props.history.push('/error');
            });

    }

    cancel = () => {
        this.props.history.push('/');
    }
}