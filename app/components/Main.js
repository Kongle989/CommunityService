import React from 'react';
import {Link, Route} from 'react-router-dom';
import Loginsignup from './children/LoginSignup';
// import Posts from './children/Posts'
// import Profile from './children/Profile'

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            id: "",
            name: "",
            age: "",
            zip: ""
        };

        this.setUser = this.setUser.bind(this);
        this.logout = this.logout.bind(this);

    }

    setUser(data) {
        this.setState({
            id: data.id,
            name: data.name,
            age: data.age,
            zip: data.zip
        });
    }

    logout() {
        this.setState({
            id: "",
            name: "",
            age: "",
            zip: ""
        })
    }

    render() {
        let loginButton;
        if (this.state.id === "") {
            loginButton = <Link to="/login"><button>Login</button></Link>;
        }
        else {
            loginButton = <button onClick={this.logout}>Logout</button>;
        }

        return (
            <div className="Main">
                <h1>Let's get some help!</h1>

                {loginButton}
                <Link to="/posts">
                    <button>Posts</button>
                </Link>
                <Link to="/profile">
                    <button>Profile</button>
                </Link>

                <Route path='/login'
                       render={({history, location}) => <Loginsignup
                           location={location}
                           history={history}
                           setUser={this.setUser}/>}/>
                {/*<Route path='/posts' component={Posts}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}

            </div>
        );
    }
}