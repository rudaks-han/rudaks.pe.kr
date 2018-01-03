import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCategories, createPost } from '../actions';
import { Link } from 'react-router-dom';

class PostNew extends Component {
    //static contextTypes = {
    //    router: PropTypes.object
    //};

    onSubmit(props) {
        console.error('onsubmit.........')
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const selectCategories = this.props.categories.map((category, index) => {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        });

        const required = value => (value ? undefined : 'Required');
        const renderField = ({
            input,
            label,
            type,
            textarea,
            meta: { touched, error, warning }
        }) => {
            const textareaType = <textarea {...input} placeholder={label}  type={type} className={`form-control ${touched && error ? 'has-danger' : ''}`}/>;
            const inputType = <input {...input} placeholder={label}  type={type} className={`form-control ${touched && error ? 'has-danger' : ''}`}/>;

                return (
                    <div className="col-lg-10">
                        {textarea ? textareaType : inputType}
                        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                    </div>
                );
        };

        const { handleSubmit, pristine, reset, submitting } = this.props;

        //const { fields: {category, username, email, title, content}, handleSubmit } = this.props;

        return (
            <div className="col-lg-8">
            <div className="well bs-component">
                <form method="post" className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <input type='hidden' name="filePath" id="filePath" value="" />
                <input type='hidden' name="fileName" id="fileName" value="" />
                <input type='hidden' name="fileSize" id="fileSize" value="" />

                <fieldset>
                  <legend>New post</legend>
                  <div className={`form-group `}>
                    <label className="col-lg-2 control-label">Category</label>
                    <div className="col-lg-10">
                        <Field className="form-control" name="category" component="select">
                            <option value="">선택하세요</option>
                            {selectCategories}
                        </Field>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Name</label>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="Username"
                        />
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Email</label>
                    <Field
                        name="email"
                        type="text"
                        component={renderField}
                        label="Email"
                        />
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Title</label>

                    <Field
                        name="title"
                        type="text"
                        component={renderField}
                        label="Title"
                        />
                  </div>
                 <div className="form-group">
                    <label className="col-lg-2 control-label"></label>
                    <Field
                        name="content"
                        type="textarea"
                        component={renderField}
                        label="Content"
                        textarea={true}
                        />
                  </div>
                  <div className="file-layer">
                      <div className="form-group">
                        <label className="col-lg-2 control-label">File</label>
                        <div className="col-lg-10">
        					<span className="btn btn-default btn-file">
        					    Browse <input type="file" multiple />
        					</span>
        					<span className="attach-result"></span>
                        </div>
                     </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2 text-right">
                      <button type="submit" className="btn btn-primary" disabled={submitting}>등록</button>
                      <Link to="/" className="btn btn-default">취소</Link>
                    </div>
                  </div>
                </fieldset>

                </form>
            </div>
        </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.category) {
        errors.category = 'Select a category';
    }

    if (!values.username) {
        errors.username = 'Enter a username';
    }

    if (!values.email) {
        errors.email = 'Enter a email';
    }

    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.content) {
        errors.content = 'Enter a content';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        categories: state.categories.list
    };
}

PostNew = connect(mapStateToProps, { fetchCategories })(PostNew);

export default reduxForm({
    form: 'PostNewForm',
    validate
}, null, { createPost })(PostNew);
