import React, { Component } from "react";
import { Row, Col, Table, List, Button } from "antd";

const data = [
  {
    title: "by Anonymous"
  },
  {
    title: "by Anonymous"
  },
  {
    title: "by Anonymous"
  },
  {
    title: "by Anonymous"
  }
];

class Detailidea extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="divInvest">
          <p className="judulInvest">Iron Man suit</p>
          <h3 className="judul2Invest">
            Submitted by <b>Tony Stark</b>
          </h3>
        </div>
        <div className="atasInvest">
          <Row>
            <Col className="rightCollumn text-align-justify" span={18} push={6}>
              <p>
                <b>Introduction</b>
              </p>
              <hr color="black" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id estlaborum.
            </Col>
            <Col className="leftKolom" span={6} pull={18}>
              <img
                src={require("../assets/img/Tony_Stark.png")}
                className="imgProfile"
              />
              <div className="socIkon m-auto">
                <img
                  style={{ paddingRight: "5px" }}
                  src={require("../assets/img/fb.png")}
                />
                <img
                  style={{ paddingRight: "5px" }}
                  src={require("../assets/img/twitter.png")}
                />
                <img
                  style={{ paddingRight: "5px" }}
                  src={require("../assets/img/linkedin.png")}
                />
                <img
                  style={{ paddingRight: "5px" }}
                  src={require("../assets/img/google+.png")}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="detailBawah">
          <Row style={{ textAlign: "left" }}>
            <Col className="mr-5 mb-5" span={12}>
              Similar Project
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <div>$ WAR MACHINE PROJECT</div>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="2 month ago"
                    />
                  </List.Item>
                )}
              />
              <div className="detailIdeaBtn mr-auto ml-auto mt-3">
                <Button size="small">Add Link</Button>
              </div>
            </Col>
            <Col span={11}>
              Discussion
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <div>Thruster for arms</div>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="1 month ago"
                    />
                  </List.Item>
                )}
              />
              <div className="detailIdeaBtn mr-auto ml-auto mt-3">
                <Button size="small">Add Discussion</Button>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Detailidea;
