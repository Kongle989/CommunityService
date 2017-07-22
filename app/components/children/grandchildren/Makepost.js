import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
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
        this.props.makepost({
            title: this.state.title,
            content: this.state.content,
            uid: ""
        })
    }

    render() {
        return (
            <div className="makepostform">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text"
                               id="title"
                               value={this.state.title}
                               onChange={this.handleChange}
                               name="title"
                               required/>
                    </div>
                    <div>
                        <label>Details</label>
                        <input type="text"
                               id="content"
                               value={this.state.content}
                               onChange={this.handleChange}
                               name="content"
                               required/>
                    </div>

                    <input type="submit"/>
                </form>
            </div>
        )
    }

}