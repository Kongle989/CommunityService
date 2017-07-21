import React from 'react';
import helpers from '../utils/helpers';
import Login from './grandchildren/Login';
import SignUp from './grandchildren/SignUp';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            name: "",
            age: "",
            zipcode: ""
        };

        this.setLogin = this.setLogin().bind(this);
        this.setSignup = this.setSignup().bind(this);

    }

    componentDidUpdate() {
        helpers.login(
            this.state.username,
            this.state.password)
            .then(() => {
                this.props.history.push('/posts');
            });
    }

    setLogin(username, password) {
        this.setState({
            username: username,
            startDate: password
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
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Route path="/login"
                       setLogin={this.setLogin}
                       component={Login}/>
                <Route path="/signup"
                       setSignup={this.setSignup}
                       component={SignUp}/>

            </div>
        );
    }
}