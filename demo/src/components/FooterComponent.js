import React from "react";

function Footer() {
  return (
      <React.Fragment>
          <footer className="border-top border-5 text-muted py-5">
              <div className="container">
                  <p className="mb-1">If you have some questions, please write them here <a
                      href="mailto:vstoleksiy@gmail.com">vstoleksiy@gmail.com</a></p>
                  <p className="mb-0">By Oleksii Vasiuta</p>
                  <p className="float-end mb-1">
                      <a href="#">Back to top</a>
                  </p>
              </div>
          </footer>
      </React.Fragment>
  );
}

export default Footer;