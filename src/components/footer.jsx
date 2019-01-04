import React from "react";
import { Layout, Row, Col, Avatar } from "antd";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout.Footer className="m-0">
          <div className="gutter-example">
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <div className="header-footer">GET STARTED</div>
                Ideas
                <br />
                Invest
                <br />
                Team Up
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <div className="header-footer">RESOURCE</div>
                FAQ
                <br />
                About Us
                <br />
                Contact Us
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <div className="header-footer">LEGAL INFO</div>
                Risk Warnings
                <br />
                Privacy Notice
                <br />
                Term of Service
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <div className="header-footer">GET SOCIAL</div>
                <div style={{ letterSpacing: "5px" }}>
                  <img
                    style={{ paddingRight: "3px" }}
                    src={require("../assets/img/fb.png")}
                  />
                  <img
                    style={{ paddingRight: "3px" }}
                    src={require("../assets/img/twitter.png")}
                  />
                  <img
                    style={{ paddingRight: "3px" }}
                    src={require("../assets/img/linkedin.png")}
                  />
                  <img
                    style={{ paddingRight: "3px" }}
                    src={require("../assets/img/google+.png")}
                  />
                </div>
              </div>
            </Col>
          </div>
        </Layout.Footer>
        <div className="bg-cl-bl">
          <p className="text-align-center  m-0">
            Copyright © HANOMAN group All rights reserved.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
