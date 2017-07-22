import React from 'react';
import helpers from '../utils/helpers';
import Makepost from './grandchildren/Makepost';
import Viewpost from './grandchildren/Viewpost';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.makepost = this.makepost.bind(this);
    }

    componentWillMount() {
        helpers.getposts().then(data => {
            this.setState({
                posts: data
            })
        })
    }

    makepost(data) {
        data.uid = this.props.user.id;
        helpers.makepost(data);
        helpers.getposts().then(ndata => {
            this.setState({
                posts: ndata
            })
        })
    }

    render() {

        return (
            <div className="posts">

                <Makepost makepost={this.makepost}/>
                <Viewpost postlist={this.state.posts}/>

            </div>
        );
    }
}