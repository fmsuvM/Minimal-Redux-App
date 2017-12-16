import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';
import { Button } from 'react-bootstrap';

import { convertData } from '../actions/index';

const debug = Debug('ocreilly::components::ConvertButton');

class ConvertButton extends Component {
    constructor(props) {
        super(props);

        this.onClick = (event) => {
            this.props.convertPokemonInfo(this.props.id)
        }
    }

    render() {
        return (
            <div>
                <style jsx>{`
                .convertation {
                    display: flex;
                    justify-content: center;
                    margin-top: 15px;
                    align-items: center;
                }
                `}</style>
                <div className="convertation">
                    {this.props.showButton ? (
                        <Button bsStyle="success" onClick={this.onClick}>Convert to Japanese</Button>
                    ) : (
                        <span></span>
                    )}
                    {this.props.isConverting ? (
                        <h3>Now Loading...</h3>
                    ): (
                        <span></span>
                    )}
                    {this.props.convertedName === this.props.name ? (
                        <span></span>
                    ): (
                        <h3>ポケモンのなまえは「{this.props.convertedName}」</h3>
                    )}
                </div>
            </div>
        )
    }
}

ConvertButton.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    showButton: PropTypes.bool,
    isConverting: PropTypes.bool,
    convertPokemonInfo: PropTypes.func,
    convertedName: PropTypes.string
}

const mapStateToProps = (state) => (
    {   
        id: state.data.id,
        name: state.data.name,
        showButton: state.showButton,
        isConverting: state.isConverting,
        convertedName: state.data.convertedName
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        convertPokemonInfo: (id) => {
            dispatch(convertData(id))
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConvertButton);