import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Logout extends Component {
    componentWillMount() {
        this.props.logoutUser();

        alert('로그아웃 되었습니다');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>Logout</div>
        );
    }
}

export default connect(null, { logoutUser })(Logout);


