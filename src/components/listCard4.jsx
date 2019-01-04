import React, { Component } from "react";
import { Row, Col, Card, Table, Icon, Tooltip } from "antd";

const { Meta } = Card;

const columns = [
  {
    title: "Interested"
  },
  {
    title: "Investment"
  },
  {
    title: "Investors"
  }
];

class ListCard4 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row
          style={{ marginRight: "5.5%", marginLeft: "5.5%", paddingBottom: 15 }}
        >
          <Col style={{ textAlign: "center" }} span={6}>
            <Card
              className="m-auto"
              hoverable
              style={{ textAlign: "center", width: 268 }}
              cover={
                <img
                  alt="example"
                  onClick={() => {
                    window.location.href = "/detailidea";
                  }}
                  src={require("../assets/img/ironman.png")}
                />
              }
              actions={[
                <Tooltip title="350k">
                  {" "}
                  <Icon type="dollar" />
                  <br />
                  Investment
                </Tooltip>,
                <Tooltip title="105">
                  {" "}
                  <Icon type="user" />
                  <br />
                  Investors
                </Tooltip>
              ]}
            >
              <Meta
                className="
                cardDesc
                mt-1 mb-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
            </Card>
          </Col>
          <Col style={{ textAlign: "center" }} span={6}>
            <Card
              className="m-auto"
              hoverable
              style={{ textAlign: "center", width: 268 }}
              cover={
                <img
                  alt="example"
                  onClick={() => {
                    window.location.href = "/detailidea";
                  }}
                  src={require("../assets/img/ironman.png")}
                />
              }
              actions={[
                <Tooltip title="350k">
                  {" "}
                  <Icon type="dollar" />
                  <br />
                  Investment
                </Tooltip>,
                <Tooltip title="105">
                  {" "}
                  <Icon type="user" />
                  <br />
                  Investors
                </Tooltip>
              ]}
            >
              <Meta
                className="
                cardDesc
                mt-1 mb-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
            </Card>
          </Col>
          <Col style={{ textAlign: "center" }} span={6}>
            <Card
              className="m-auto"
              hoverable
              style={{ textAlign: "center", width: 268 }}
              cover={
                <img
                  alt="example"
                  onClick={() => {
                    window.location.href = "/detailidea";
                  }}
                  src={require("../assets/img/ironman.png")}
                />
              }
              actions={[
                <Tooltip title="350k">
                  {" "}
                  <Icon type="dollar" />
                  <br />
                  Investment
                </Tooltip>,
                <Tooltip title="105">
                  {" "}
                  <Icon type="user" />
                  <br />
                  Investors
                </Tooltip>
              ]}
            >
              <Meta
                className="
                cardDesc
                mt-1 mb-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
            </Card>
          </Col>
          <Col style={{ textAlign: "center" }} span={6}>
            <Card
              className="m-auto"
              hoverable
              style={{ textAlign: "center", width: 268 }}
              cover={
                <img
                  alt="example"
                  onClick={() => {
                    window.location.href = "/detailidea";
                  }}
                  src={require("../assets/img/ironman.png")}
                />
              }
              actions={[
                <Tooltip title="350k">
                  {" "}
                  <Icon type="dollar" />
                  <br />
                  Investment
                </Tooltip>,
                <Tooltip title="105">
                  {" "}
                  <Icon type="user" />
                  <br />
                  Investors
                </Tooltip>
              ]}
            >
              <Meta
                className="
                cardDesc
                mt-1 mb-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ListCard4;
