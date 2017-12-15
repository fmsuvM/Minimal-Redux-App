import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

const debug = Debug('ocreilly::components::Explanation');

export default class Explanation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <style jsx>{`
                    .explanation {
                        display: flex;
                        justify-content: center;
                        width: 100%;
                        margin: auto;
                    }
                `}</style>
                <div className="explanation">
                    <h2>This app is minimal redux app</h2>
                </div>
            </div>
        )
    }
}