let React = require('react');

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
            startDate: "",
            endDate: ""
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
        this.props.setTerm(
            this.state.term,
            this.state.startDate,
            this.state.endDate
        );
        this.setState({
            term: "",
            startDate: "",
            endDate: ""
        });
    }

    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type="text"
                           placeholder="Search for an article"
                           id="term"
                           value={this.state.term}
                           onChange={this.handleChange}
                           name="word"
                           required/>
                    <label>Start Year</label>
                    <input type="text"
                           placeholder="YYYY"
                           id="startDate"
                           value={this.state.startDate}
                           onChange={this.handleChange}
                           name="startyear"
                           required/>
                    <label>End Year</label>
                    <input type="text"
                           placeholder="YYYY"
                           id="endDate"
                           value={this.state.endDate}
                           onChange={this.handleChange}
                           name="endyear"
                           required/>
                    <input type="submit"/>
                </form>

            </div>

        )
    }


}