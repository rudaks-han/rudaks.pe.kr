import React from 'react';
import './Guestbook.css';

const Guestbook = () => {
    return (
        <div>
            <div className="col-lg-8">
            <div>

                <div className="well bs-component">
                  <form name="postForm" id="postForm" method="post" className="form-horizontal">
                    <fieldset>
                      <legend>Guestbook</legend>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Username</label>
                        <div className="col-lg-10">
                            <input className="form-control" path="username" id="username" placeholder="Username" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Email</label>
                        <div className="col-lg-10">
                            <input className="form-control" path="email" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label  className="col-lg-2 control-label">Password</label>
                        <div className="col-lg-10">
                            <input type="password" className="form-control" path="password" id="password" placeholder="Password" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Comment</label>
                        <div className="col-lg-10">
                          <textarea className="form-control" rows="3" path="comment" id="comment" placeholder="Comment" />
                        </div>
                      </div>


                      <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2 text-right">
                          <input type="submit" id="btn-submit" className="btn btn-primary" value="등록"/>
                        </div>
                      </div>
                    </fieldset>
                  </form>

                </div>
              </div>


                  <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                                <div className="pull-left">2017010100000 by rudaks</div>
                                <div className="pull-right">
                                    <button type="button" className="btn btn-link btn-xs btn-modify hide">Modify</button>
                                    <button type="button" className="btn btn-link btn-xs btn-delete hide">Delete</button>
                                </div>
                        </h3>

                      </div>

                      <div className="panel-body">
                        내용...
                      </div>

                    <div className="pager pagination">
                        페이지 네비게이터
                    </div>
                </div>


            </div>
        </div>
    );


};

export default Guestbook;
