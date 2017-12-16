import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';

const debug = Debug('ocreilly::components::Result');

class Result extends Component {
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
                    .results ul {
                        list-style: none;
                    }
                    .result-item {
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .result-item img{
                        max-width: 600px;
                        height: auto;
                    }
                `}</style>
                {this.props.isFetching ? (
                    <div className="results">
                        <h2> Now Loading... </h2>
                    </div>
                ) : (
                    <div className="results">
                        <h2>Results !</h2>
                        <ul className="results-list">
                            <li className="result-item"><h3>Name: {this.props.name}</h3></li>
                            <li className="result-item"><h3>Types: {this.props.types}</h3></li>
                            <li className="result-item" id="result-image">
                                <img src={this.props.image} />
                            </li>
                            <li className="result-item"><h3>Weight: {this.props.weight}</h3></li>
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

Result.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.array,
    showButton: PropTypes.bool,
    isFetching: PropTypes.bool
}

const mapStateToProps = (state) => (
    {
        name: state.data.name,
        image: state.data.image,
        types: state.data.types,
        weight: state.data.weight,
        showButton: state.showButton,
        isFetching: state.isFetching
    }
);

export default connect(mapStateToProps, null)(Result);
