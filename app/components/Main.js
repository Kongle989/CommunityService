let React = require('react');
import {Link} from 'react-router-dom';

export default class Main extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <div className="Main">
                <h1>Let's search for an article!</h1>

                <ul>

                    THIS IS THE NAV BAR

                </ul>

                {this.props.children}

            </div>
        );
    }
}