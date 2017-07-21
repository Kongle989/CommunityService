import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setLogin(
            this.state.username,
            this.state.password
        );
        this.setState({
            username: "",
            password: ""
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text"
                           id="username"
                           value={this.state.username}
                           onChange={this.handleChange}
                           name="username"
                           required/>
                    <label>Password</label>
                    <input type="text"
                           id="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           name="password"
                           required/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}