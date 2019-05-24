import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { login } from '../actions';


class LoginPage extends React.Component {
	constructor() {
		super();
		this.state = {
			loginTab: true,
			creds: {
				username: '',
				password: ''
			}
		}
	}

	handleChange = e => {
		this.setState({
			...this.state,
			creds: {
				...this.state.creds,
				[e.target.name]: e.target.value
			}
		})
	}

	login = e => { 
		e.preventDefault();
		this.props.login(this.state.creds)
		.then(() => this.props.history.push('/Dashboard'));
		// this.props.history.push('/Market')
	}

	render() {
		return(
			<div className="login-page" >
				<Form className="login-card" onSubmit={this.login}>
					<h2>Sign In</h2>
	        <FormGroup>
	          <Input type="username" name="username" value={this.state.username} onChange={this.handleChange} id="exampleEmail" placeholder="Username" />
	        </FormGroup>
	        <FormGroup>
	          <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="examplePassword" placeholder="Password" />
	        </FormGroup>
	        <Button>
	        	{this.props.loggingIn 
	        		? (<Loader type="ThreeDots" color="white" height="12" width="26" />)
            	: ('Login')
            }
          </Button>
	        {this.props.error && <p>{this.props.error}</p>}
        </Form>
			</div>
		);
	}
}

const mapStateToProps = ({ error, loggingIn }) => ({
	error,
	loggingIn
});

export default connect(mapStateToProps, { login })(LoginPage);