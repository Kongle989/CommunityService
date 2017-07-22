import React from 'react';
import {Route} from 'react-router-dom';
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

    componentDidMount() {
        // helpers.getposts().then(data => {
        //     console.log(data);
        // })
    }

    makepost(data) {
        console.log(data);
        data.uid = this.props.user.id;
        helpers.makepost(data)
    }

    render() {

        return (
            <div className="posts">
                <Route path="/posts" render={()=><Makepost makepost={this.makepost}/>}/>

                {/*<Viewpost/>*/}

            </div>
        );
    }
}