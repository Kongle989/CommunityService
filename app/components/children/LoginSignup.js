import React from 'react';
import helpers from '../utils/helpers';
import Login from './grandchildren/Login';
import SignUp from './grandchildren/SignUp';
import {Link, Route} from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            name: "",
            age: "",
            zipcode: ""
        };

        this.setLogin = this.setLogin.bind(this);
        this.setSignup = this.setSignup.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.username !== this.state.username ||
            prevState.password !== this.state.password &&
            prevState.name === this.state.name) {
            helpers.login(this.state)
                .then(() => {
                    this.props.history.push('/posts');
                });
        }
        if (prevState.username !== this.state.username ||
            prevState.password !== this.state.password &&
            prevState.name !== this.state.name) {
            helpers.signup(this.state)
                .then(() => {
                    this.props.history.push('/login');
                })
        }
    }

    setLogin(username, password) {
        this.setState({
            username: username,
            password: password
        });
    }

    setSignup(username, password, name, age, zipcode) {
        this.setState({
            username: username,
            password: password,
            name: name,
            age: age,
            zipcode: zipcode
        });
    }

    render() {
        return (
            <div className="LoginSignup">

                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/login/signup">
                    <button>Sign Up</button>
                </Link>
                <Route exact path="/login"
                       render={() => <Login setLogin={this.setLogin}/>}/>
                <Route path="/login/signup"
                       render={() => <SignUp setSignup={this.setSignup}/>}/>

            </div>
        );
    }
}