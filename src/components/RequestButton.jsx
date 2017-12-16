import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';

import { requestData } from '../actions/index';

const debug = Debug('ocreilly::components::RequestButton');

class RequestButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchId: 0
        };

        this.onClick = (event) => {
            this.props.getPokemonFromId(this.state.searchId);
        };

        this.handleIdChange = (event) => {
            this.setState({searchId: event.target.value});
        };
    }

    render() {
        return (
            <div>
                <style jsx>{`
                    .request-button {
                        display: flex;
                        justify-content: center;
                    }
                `}</style>
                <div className="request-button">
                    <input 
                        value={this.state.searchId}
                        onChange={this.handleIdChange}
                    />
                    <a className="action-button" onClick={this.onClick}>
                        <h3>Request Button 2017</h3>
                    </a>
                </div>
            </div>
        )
    }
}

RequestButton.propTypes = {
    getPokemonFromId: PropTypes.func
}

const mapDispatchToProps = (dispatch) => (
    {
        getPokemonFromId: (id) => {
            dispatch(requestData(id));
        }
    }
);

export default connect(null, mapDispatchToProps)(RequestButton);