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
                `}</style>
                <div className="results">
                    <h2>Results !</h2>
                    <ul className="results-list">
                        <li className="result-item">{this.props.name}</li>
                        <li className="result-item">{this.props.types}</li>
                        <li className="result-item">
                            <img src={this.props.image} />
                        </li>
                        <li className="result-item">{this.props.weight}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

Result.propTypes = {

}

const mapStateToProps = (state) => (
    {
        name: state.data.name,
        image: state.data.image,
        types: state.data.types,
        weight: state.data.weight,
        showButton: state.showButton
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        getPokemonFromId: (id) => {
            dispatch(requestData(id));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Result);