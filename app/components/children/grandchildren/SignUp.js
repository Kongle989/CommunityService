import React from 'react';

export default class extends React.Component {
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
            <div className="signupform">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text"
                               id="username"
                               value={this.state.username}
                               onChange={this.handleChange}
                               name="username"
                               required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                               id="password"
                               value={this.state.password}
                               onChange={this.handleChange}
                               name="password"
                               required/>
                    </div>
                    <div><label>Confirm Password</label>
                        <input type="password"
                               id="conpassword"
                               value={this.state.conpassword}
                               onChange={this.handleChange}
                               name="conpassword"
                               required/></div>
                    <div>
                        <label>Name</label>
                        <input type="text"
                               id="name"
                               value={this.state.name}
                               onChange={this.handleChange}
                               name="name"
                               required/>
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number"
                               id="age"
                               value={this.state.age}
                               onChange={this.handleChange}
                               name="age"
                               min="18"
                               required/>
                    </div>
                    <div>
                        <label>Zip Code</label>
                        <input type="number"
                               id="zipcode"
                               value={this.state.zipcode}
                               onChange={this.handleChange}
                               name="zipcode"
                               min="501"
                               max="99950"
                               required/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}