import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            conpassword: "",
            name: "",
            age: "",
            zipcode: ""
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
        this.props.setSignup(
            this.state.username,
            this.state.password,
            this.state.name,
            this.state.age,
            this.state.zipcode
        );
        this.setState({
            username: "",
            password: "",
            conpassword: "",
            name: "",
            age: "",
            zipcode: ""
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
                    <input type="password"
                           id="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           name="password"
                           required/>
                    <label>Confirm Password</label>
                    <input type="password"
                           id="conpassword"
                           value={this.state.conpassword}
                           onChange={this.handleChange}
                           name="conpassword"
                           required/>
                    <input type="text"
                           id="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                           name="name"
                           required/>
                    <input type="number"
                           id="age"
                           value={this.state.age}
                           onChange={this.handleChange}
                           name="age"
                           required/>
                    <input type="number"
                           id="zipcode"
                           value={this.state.zipcode}
                           onChange={this.handleChange}
                           name="zipcode"
                           required/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}