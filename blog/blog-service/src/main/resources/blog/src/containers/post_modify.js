import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCategories, fetchPost, updatePost, uploadFile } from '../actions';
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

class PostModify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            //attachFiles: [],
            filePath: [],
            fileName: [],
            fileSize: [],
            editorValue: ''
        }
    }

    onDrop(files) {
        files.forEach(file => {
            var formData = new FormData();
            formData.append("attachFile", file);
            this.props.uploadFile(formData)
                .then(res => {
                    const data = res.payload.data;

                    this.setState({
                        //attachFiles: [...this.state.attachFiles, file],
                        filePath: [...this.state.filePath, data.filePath],
                        fileName: [...this.state.fileName, data.fileName],
                        fileSize: [...this.state.fileSize, data.fileSize]
                    });

                    const { filePath, fileName, fileSize } = this.state;

                    this.props.change("filePath", filePath.join());
                    this.props.change("fileName", fileName.join());
                    this.props.change("fileSize", fileSize.join());
                })
        });
    }

    handleEditorChange(e) {
        //console.log(e.target.getContent());
        this.setState({
            editorValue: e.target.getContent()
        })
    }

    onSubmit(props) {
        props.content = this.state.editorValue;

        this.props.updatePost(props)
            .then(() => {
                alert('수정되었습니다');
                this.props.history.push(`/post/${this.props.match.params.id}`);
            });
    }

    removeAttachFile(index, e) {
        e.preventDefault();
        let { filePath, fileName, fileSize } = this.state;

        fileName.splice(index, 1);
        filePath.splice(index, 1);
        fileSize.splice(index, 1);

        this.setState({
            fileName: fileName,
            filePath: filePath,
            fileSize: fileSize
        });


        this.props.change("filePath", this.state.filePath.join());
        this.props.change("fileName", this.state.fileName.join());
        this.props.change("fileSize", this.state.fileSize.join());
    }

    componentWillReceiveProps(nextProps) {
        const { post } = this.props;

        if (post !== null) {
            const { filePath, fileName, fileSize } = post;

            if (fileName) {
                this.setState({
                    filePath: [...filePath.split(',')],
                    fileName: [...fileName.split(',')],
                    fileSize: [...fileSize.split(',')]
                });
            }
        }
    }

    componentWillMount() {
        console.error('componentWillMount')
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        console.error('componentDidMount')

        console.error('this.props : ' + JSON.stringify(this.props))
    }

    render() {
        const { post } = this.props;

        if (post == null) {
            return null;
        }

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
                      <legend>post update</legend>
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
                                    content={post.content}
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
                                                this.state.fileName.map(function(name, index) {
                                                    if (!name) return null;
                                                    return (
                                                        <li key={index}>{name}<button
                                                            onClick={(e) => this.removeAttachFile(index, e)}
                                                            className="btn btn-xs btn-danger">삭제</button>
                                                        </li>
                                                    );
                                                }, this)
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
                          <button type="submit" className="btn btn-primary" disabled={submitting}>확인</button>&nbsp;
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
        categories: state.categories.list,
        post: state.posts.post
    };
}

PostModify = reduxForm({
    form: 'PostModifyForm',
    validate
}, null, { updatePost })(PostModify);

PostModify = connect(
  state => ({
    initialValues: state.posts.post
  })
)(PostModify)

PostModify = connect(mapStateToProps, { fetchCategories, fetchPost, updatePost, uploadFile })(PostModify);

export default PostModify;
