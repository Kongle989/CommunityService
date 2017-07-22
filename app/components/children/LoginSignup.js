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
            zip: ""
        };

        this.setLogin = this.setLogin.bind(this);
        this.setSignup = this.setSignup.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state) {
            this.setState({
                username: nextProps.location.state
            })
        }
    }

    setLogin(username, password) {
        this.setState({
                username: username,
                password: password
            },
            () => {
                helpers.login(this.state)
                    .then((data) => {
                        if (data !== this.state.username) {
                            this.props.setUser(data);
                            this.props.history.push('/posts');
                        }
                        else
                            this.props.history.push('/login', data)
                    })
            }
        );
    }

    setSignup(username, password, name, age, zip) {
        this.setState({
                username: username,
                password: password,
                name: name,
                age: age,
                zip: zip
            },
            () => {
                helpers.signup(this.state)
                    .then(() => {
                        this.props.history.push('/login');
                    })
            }
        );

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
                       render={() => <Login username={this.state.username}
                                            setLogin={this.setLogin}/>}/>
                <Route path="/login/signup"
                       render={() => <SignUp setSignup={this.setSignup}/>}/>

            </div>
        );
    }
}