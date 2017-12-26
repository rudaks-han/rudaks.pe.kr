import React from 'react';
//import { Link } from 'react-router-dom';
//import './Post.css';

const NewPost = ({categories}) => {

    const selectCategoryList = categories.map((category, index) => (
        <option key={index} value={category.id}>{category.name}</option>
    ));

    return (
        <div className="col-lg-8">
            <div className="well bs-component">
                <form name="postForm" id="postForm" method="post" className="form-horizontal">
                <input type='hidden' name="filePath" id="filePath" value="" />
                <input type='hidden' name="fileName" id="fileName" value="" />
                <input type='hidden' name="fileSize" id="fileSize" value="" />

                <fieldset>
                  <legend>New post</legend>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Category</label>
                    <div className="col-lg-10">
                        <select className="form-control" name="category" id="category">
                          	<option value="">선택하세요</option>

                          	{selectCategoryList}
                        </select>
                    </div>
                  </div>
                  <div className="form-group">

                    <label className="col-lg-2 control-label">Name</label>
                    <div className="col-lg-10">
                      <input className="form-control" path="username" id="username" placeholder="Name" value=""/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                      <input className="form-control" path="email" id="email" placeholder="Email" value="${sessionScope.loginInfo.email}"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Title</label>
                    <div className="col-lg-10">
                      <input className="form-control" path="title" id="title" placeholder="Title" />
                    </div>
                  </div>
                 <div className="form-group">
                    <label className="col-lg-2 control-label"></label>
                    <div className="col-lg-10 summernote-layer">
                      <div className="summernote">xxxxxx</div>
                      <input type="hidden" name="content" id="content" />
                    </div>
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
                      <button type="button" id="btn-submit" className="btn btn-primary">등록</button>
                      <button className="btn btn-default">취소</button>
                    </div>
                  </div>
                </fieldset>

                </form>
            </div>
        </div>
    );
};

export default NewPost;
