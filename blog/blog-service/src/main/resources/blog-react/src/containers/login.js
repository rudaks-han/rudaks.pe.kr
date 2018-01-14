import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import { login } from "../actions";
import Cookies from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);

        //this.renderField = this.renderField.bind(this);
    }

    onSubmit(props) {
        this.props.login(props)
            .then((res) => {
                //console.error('res : ' + JSON.stringify(res))
                if (res.payload.data.result == 'success')
                {
                    Cookies.set("uid", res.payload.data.key, { expires: 365, path: '' });
                    alert('로그인 되었습니다.');
                    this.props.history.push('/');
                }
                else
                {
                    alert('로그인에 실패하였습니다.');
                }
            });
    }

    renderField({
                     input,
                     label,
                     type,
                     meta: { touched, error, warning }
                 }) {

        const inputType = <input {...input} className="form-control" placeholder={label}  type={type} />;

        return (
            <div className={`form-group ${touched && error ? 'has-error' : ''}`}>

                <div className="col-lg-10">
                    {inputType}
                    {touched && ((error && <span className="input-error">{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );

    }

    render() {


        const { handleSubmit, submitting } = this.props;

        return (
            <div>
                <form method="post" className="form-signin" role="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <Field
                        name="userId"
                        type="text"
                        label="userId"
                        component={this.renderField}
                    />

                    <Field
                        name="password"
                        type="password"
                        label="password"
                        component={this.renderField}
                    />

                    <div>
                        <label className="checkbox" style={{display:'inline-block', 'marginLeft':'40px'}}>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.userId) {
        errors.userId = 'Enter userId';
    }

    if (!values.password) {
        errors.password = 'Enter password';
    }

    return errors;
}

Login = connect(null, { login })(Login);

export default reduxForm({
    form: 'LoginForm',
    validate,
    pure: true
}, null, {  })(Login);

