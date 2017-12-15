import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

const debug = Debug('ocreilly::components::Result');

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <style jsx>{`
                    .results {
                        display: flex;
                        margin: auto;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center; 
                    }
                `}</style>
                <div className="results">
                    <h2>Results !</h2>
                    <ul className="results-list">
                        <li className="result-item">Item</li>
                        <li className="result-item">Item</li>
                        <li className="result-item">Item</li>
                        <li className="result-item">Item</li>
                    </ul>
                </div>
            </div>
        )
    }
}