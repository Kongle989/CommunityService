import React from 'react';

export default class ViewPost extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {
        console.log('i rendered');
        let list = this.props.postlist.map((post, key) => {
            return <div key={key} className="post">
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p>{post.poster}</p>
            </div>
        });

        return (
            <div className="viewposts">

                {list}

            </div>

        )

    }

}