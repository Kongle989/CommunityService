import React from 'react';
import {Link, Route} from 'react-router-dom';
import Loginsignup from './children/LoginSignup';
// import Posts from './children/Posts'
// import Profile from './children/Profile'

export default class Main extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <div className="Main">
                <h1>Let's get some help!</h1>

                <Link to="/login"><button>Login</button></Link>
                <Link to="/posts"><button>Posts</button></Link>
                <Link to="/profile"><button>Profile</button></Link>

                <Route path='/login' component={Loginsignup}/>
                {/*<Route path='/posts' component={Posts}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}

            </div>
        );
    }
}