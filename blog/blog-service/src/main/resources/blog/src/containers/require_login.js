import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.loginFlag) {
                this.props.history.push("/login");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.loginFlag) {
                this.props.history.push("/login");
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            loginFlag: state.loginFlag.flag
        };
    }

    return connect(mapStateToProps)(Authentication);
}