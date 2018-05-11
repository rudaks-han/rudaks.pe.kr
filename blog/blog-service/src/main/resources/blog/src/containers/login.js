import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import { login, checkLogin } from "../actions";

class Login extends Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this.userIdInput).getElementsByTagName("input")[0].focus();
    }

    onSubmit(props) {
        this.props.login(props)
            .then((res) => {
                if (res.payload.data.result === 'success')
                {
                    //if (props.rememberMe)
                        //Cookies.set("uid", res.payload.data.key, { expires: 365, path: '' });
                        localStorage.setItem('uid', res.payload.data.key);
                    //else
                        //Cookies.set("uid", res.payload.data.key, { expires: 365, path: '' });

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
                     style,
                     meta: { touched, error, warning }
                 }) {

        console.error('style : ' + JSON.stringify(style))
        const inputType = <input {...input} className="form-control" placeholder={label}  type={type} style={style}/>;

        let cssStyle = {};
        if (type === 'checkbox')
            cssStyle = {float: 'left'}

        return (
            <div className={`form-group ${touched && error ? 'has-error' : ''}`} style={cssStyle}>

                <div className="col-lg-10">
                    {inputType}
                    {touched && ((error && <span className="input-error">{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );

    }

    render() {


        const { handleSubmit } = this.props;

        return (
            <div>
                <form method="post" className="form-signin" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <Field
                        ref={(input) => { this.userIdInput = input; }}
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
                            <Field name="rememberMe" id="rememberMe" component={this.renderField} type="checkbox" style={{width:'50px', float:'left'}} /> Remember me
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

Login = connect(null, { login, checkLogin })(Login);

export default reduxForm({
    form: 'LoginForm',
    validate,
    pure: true
}, null, {  })(Login);

