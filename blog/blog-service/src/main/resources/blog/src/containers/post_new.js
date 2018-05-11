import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {fetchCategories, createPost, uploadFile, updatePost, fetchPost} from '../actions';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import TinyMCE from 'react-tinymce';

const renderField = ({
                         input,
                         label,
                         type,
                         select,
                         children,
                         meta: { touched, error, warning }
                     }) => {
    const inputType = <input {...input} className="form-control" placeholder={label}  type={type} />;
    const selectType = <select {...input} className="form-control">
        {children}
    </select>;

    return (
        <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
            <label className="col-lg-2 control-label">{label}</label>
            <div className="col-lg-10">
                {select ? selectType : inputType}
                {touched && ((error && <span className="input-error">{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
};

class PostNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attachFiles: [],
            filePath: [],
            fileName: [],
            fileSize: [],
            editorValue: ''
        }

        //this.onChange = (editorState) => this.setState({editorState});
    }

    onDrop(files) {
        files.forEach(file => {
            //req.attach(file.name, file);
            //console.error(">>>" + file.name)
            var formData = new FormData();
            formData.append("attachFile", file);
            this.props.uploadFile(formData)
                .then(res => {
                    //console.error(JSON.stringify(res))
                    const data = res.payload.data;

                    this.setState({
                        attachFiles: [...this.state.attachFiles, file],
                        filePath: [...this.state.filePath, data.filePath],
                        fileName: [...this.state.fileName, data.fileName],
                        fileSize: [...this.state.fileSize, data.fileSize]
                    });

                    this.props.change("filePath", this.state.filePath);
                    this.props.change("fileName", this.state.fileName);
                    this.props.change("fileSize", this.state.fileSize);
                })
        });
    }

    onSubmit(props) {

        props.content = this.state.editorValue;

        //if (true) return;
        this.props.createPost(props)
            .then(() => {
                //this.props.history.push('/');
                //this.props.alert.show('Oh look, an alert!');
                alert('등록되었습니다');
                this.props.history.push('/');
            });
    }

    handleEditorChange(e) {
        //console.log('Content was updated:', e.target.getContent());

        this.setState({
            editorValue: e.target.getContent()
        })

        //console.error('contentEl.value : ' + contentEl.value)
    }



    render() {
        const selectCategories = this.props.categories.map((category, index) => {
            return (
                <option key={category.id} value={category.category}>{category.name}</option>
            )
        });

        //const required = value => (value ? undefined || null : 'Required');


        const { handleSubmit, submitting } = this.props;

        return (
            <div className="col-lg-8">
                <div className="well bs-component">
                    <form method="post" className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div style={{display:'none'}}>
                            <Field
                                name="filePath"
                                type="hidden"
                                component={renderField}
                            />
                            <Field
                                name="fileName"
                                type="hidden"
                                component={renderField}
                            />
                            <Field
                                name="fileSize"
                                type="hidden"
                                component={renderField}
                            />



                        </div>

                        <fieldset>
                            <legend>New post</legend>
                            <Field
                                name="category"
                                type="select"
                                label="Category"
                                component={renderField}
                                select={true}
                            >
                                <option value="">선택하세요</option>
                                {selectCategories}
                            </Field>

                            <Field
                                name="username"
                                type="text"
                                label="Name"
                                component={renderField}
                            />

                            <Field
                                name="email"
                                type="text"
                                label="Email"
                                component={renderField}
                            />

                            <Field
                                name="title"
                                type="text"
                                label="Title"
                                component={renderField}
                            />

                            <div className="form-group">
                                <label className="col-lg-2 control-label">Content</label>
                                <div className="col-lg-10">

                                    <TinyMCE
                                        content=""
                                        config={{
                                            plugins: 'autolink link image lists print preview',
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
                                            height : "300"
                                        }}
                                        onChange={(e) => {this.handleEditorChange(e)}}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-lg-2 control-label">File</label>
                                <div className="col-lg-10">
                                    <section>
                                        <div className="dropzone">
                                            <Dropzone className="dropzone-area" onDrop={this.onDrop.bind(this)}>
                                                <p>파일을 업로드하려면 클릭하던가, 파일을 끌어다 놓으세요.</p>
                                            </Dropzone>

                                            <ul>
                                                {
                                                    this.state.attachFiles.map(f => <li key={f.name}>{f.name} ({f.size} bytes)</li>)
                                                }
                                            </ul>
                                        </div>
                                        <aside>

                                        </aside>
                                    </section>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-lg-10 col-lg-offset-2 text-right">
                                    <button type="submit" className="btn btn-primary" disabled={submitting}>등록</button>&nbsp;
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

    return errors;
}

function mapStateToProps(state) {
    return {
        categories: state.categories.list
    };
}
/*

PostNew = connect(
    state => ({
        initialValues: state.posts.post,
        post: state.posts.post
    })
)(PostNew)

PostNew = connect(mapStateToProps, { fetchCategories, createPost, uploadFile })(PostNew);

export default reduxForm({
    form: 'PostNewForm',
    validate
}, null, { createPost })(PostNew);
*/




PostNew = reduxForm({
    form: 'PostNewForm',
    validate
}, null, { createPost })(PostNew);

PostNew = connect(
    state => ({
        initialValues: {
            username: '루닥스',
            email: 'rudaks94@gmail.com'
        }
    })
)(PostNew)

PostNew = connect(mapStateToProps, { fetchCategories, fetchPost, createPost, uploadFile })(PostNew);

export default PostNew;
