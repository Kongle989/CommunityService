import React from "react";
import helpers from '../utils/helpers';


class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: []
        };

    }

    componentDidMount() {
        helpers.getResult().then(data => {
            this.setState({
                result: data
            });
            console.log(this.state.result);
        });
    }

    render() {
        return (
            <div>

                <h3>Results</h3>
                <p>{this.props.articles}</p>

            </div>
        );
    }
}

// Export the component back for use in other files
export default Results;
