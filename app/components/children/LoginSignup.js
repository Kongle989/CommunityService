import React from 'react';
import helpers from '../utils/helpers';
import Login from './grandchildren/Login';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.setTerm = this.setTerm.bind(this);

    }

    componentDidUpdate() {
            helpers.login(
                this.state.username,
                this.state.password)
                .then(() => {
                    this.props.history.push('/posts');
                });
    }

    setTerm(username, password) {
        this.setState({
            username: username,
            startDate: password
        });
    }

    render() {
        return (
            <div className="LoginSignup">

                <Login setTerm={this.setTerm}/>

            </div>
        );
    }
}