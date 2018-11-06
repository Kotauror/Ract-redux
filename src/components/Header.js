import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setName} from "../actions";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }

    handleChange(e) {
        let name = e.target.value;
        this.props.setName(name)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);
