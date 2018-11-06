import React, { Component } from 'react';
import { connect } from 'react-redux';

class Displayer extends Component {

    render() {

        // const listUsers = this.props.users.map((user) =>
        //     <li key={user}>{user}</li>
        // );
        //
        // const listTweets = this.props.tweets.map((tweet) =>
        //     <li key={tweet}> {tweet}</li>
        // );

        return (
            <div className="Displayer">
                The new name is {this.props.name}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps, null)(Displayer);
