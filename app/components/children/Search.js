let React = require('react');
import helpers from '../utils/helpers';
import Form from './grandchildren/Form';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
            startDate: "",
            endDate: ""
        };

        this.setTerm = this.setTerm.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.term !== this.state.term ||
            prevState.startDate !== this.state.startDate ||
            prevState.endDate !== this.state.endDate) {

            helpers.runQuery(
                this.state.term,
                this.state.startDate,
                this.state.endDate).then(data => {
                helpers.saveData(data);
                this.props.history.push('/result');
            });
        }
    }

    setTerm(term, start, end) {
        this.setState({
            term: term,
            startDate: start,
            endDate: end
        })
    }

    render() {
        return (
            <div className="Search">

                <Form setTerm={this.setTerm}/>

            </div>
        );
    }
}