import React from "react";
import dolar from "./static/dolar.jpeg";
import burning_dolar from "./static/burning_dolar.jpeg";
import profile from "./static/profile.jpeg";

function Home() {
    document.title = 'Main Page';

  return (
      <React.Fragment>
          <div className="container-fluid text-center">
              <div className="row content">
                  <div className="col-sm-2 sidenav">
                      <a className="btn btn-default well l_b" href="/takecredit" role="button">Take a credit</a>
                      <a className="btn btn-default well l_b" href="/repaycredit" role="button">Repay the credit</a>
                      <a className="btn btn-default well l_b" href="/updateprofile" role="button">Update profile</a>
                  </div>
                  <div className="col-sm-8 text-left">
                      <h1>Welcome to online credit bank</h1>
                      <p>Need more money? Maybe you want to start your own business? Or you need money just now because
                          of your problems?
                          That can be a lot of reasons. We can say you : "Your problem is not the real problem with our
                          help !" We can borrow
                          you our money at interest. This process don`t take a lot of time. So, you just need to follow
                          the instructions.</p>
                      <hr/>
                          <h3>Instruction</h3>
                          <p>To take a credit you need create an account on our website. After doing that, fill in the
                              required information.
                              If all is well, the money will appear in your account. Also, you can repay the loan. To do
                              this you need to
                              update your credit information. After verification, your loan will be closed.</p>
                          <hr/>
                              <div className="row">
                                  <div className="col-md-4">
                                      <div className="thumbnail">
                                          <a href="/takecredit" target="_blank">
                                              <img src={dolar} alt="banknote"/>
                                                  <div className="caption">
                                                      <p>Take a credit.(firstly login)</p>
                                                  </div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="thumbnail">
                                          <a href="/repaycredit" target="_blank">
                                              <img src={burning_dolar} alt="burning_dolar" className="imgs"/>
                                                  <div className="caption">
                                                      <p>Repay a credit.(firstly login)</p>
                                                  </div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="thumbnail">
                                          <a href="/updateprofile.html" target="_blank">
                                              <img src={profile} alt="Profile picture" className="imgs"/>
                                                  <div className="caption">
                                                      <p>Update profile.(firstly login)</p>
                                                  </div>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                  </div>
                  <div className="col-sm-2 sidenav">
                      <div className="well">
                          <p>ADS</p>
                      </div>
                      <div className="well">
                          <p>ADS</p>
                      </div>
                  </div>
              </div>
          </div>


      </React.Fragment>
  );
}

export default Home;
