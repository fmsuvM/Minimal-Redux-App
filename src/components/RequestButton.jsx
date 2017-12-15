import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

const debug = Debug('ocreilly::components::RequestButton');

export default class RequestButton extends Component {
    constructor(props) {
        super(props);
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
                    <a className="action-button">
                        <h3>Request Button 2017</h3>
                    </a>
                </div>
            </div>
        )
    }
}