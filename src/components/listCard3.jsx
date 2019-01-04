import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

import { Progress, Tooltip } from "antd";
const { Meta } = Card;

const gridStyle = {
  width: "50%",
  textAlign: "center"
};

class ListCard3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row
          style={{
            marginRight: "5.5%",
            marginLeft: "5.5%",
            paddingTop: 5,
            paddingBottom: 15
          }}
        >
          <Col style={{ textAlign: "center" }} span={8}>
            <Card
              className="m-auto"
              hoverable
              style={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                textAlign: "center",
                width: 350
              }}
              cover={
                <img
                  className="ant-card-cover img"
                  alt="example"
                  src={require("../assets/img/ironman.jpg")}
                  onClick={() => {
                    window.location.href="/detailInvest"
                  }}
                />
              }
              actions={[
                <Tooltip title="30k">
                  Interested <br />
                  30K
                </Tooltip>,
                <Tooltip title="105">
                  Investors
                  <br />
                  105
                </Tooltip>
              ]}
            >
              <Meta
                style={{ textAlign: "left" }}
                className="cardDesc mt-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
              <Progress
                className="progressBar"
                percent={80}
                showInfo={false}
                status="active"
              />
              <p>30 days to go - 80% funded</p>
            </Card>
          </Col>
          <Col style={{ textAlign: "center" }} span={8}>
            <Card
              className="m-auto"
              hoverable
              style={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                textAlign: "center",
                width: 350
              }}
              cover={
                <img
                  className="ant-card-cover img"
                  alt="example"
                  src={require("../assets/img/ironman.jpg")}
                  onClick={() => {
                    window.location.href="/detailInvest"
                  }}
                />
              }
              actions={[
                <Tooltip title="30k">
                  Interested <br />
                  30K
                </Tooltip>,
                <Tooltip title="105">
                  Investors
                  <br />
                  105
                </Tooltip>
              ]}
            >
              <Meta
                style={{ textAlign: "left" }}
                className="cardDesc mt-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
              <Progress
                className="progressBar"
                percent={80}
                showInfo={false}
                status="active"
              />
              <p>30 days to go - 80% funded</p>
            </Card>
          </Col>
          <Col style={{ textAlign: "center" }} span={8}>
            <Card
              className="m-auto"
              hoverable
              style={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                textAlign: "center",
                width: 350
              }}
              cover={
                <img
                  className="ant-card-cover img"
                  alt="example"
                  src={require("../assets/img/ironman.jpg")}
                  onClick={() => {
                    window.location.href="/detailInvest"
                  }}
                />
              }
              actions={[
                <Tooltip title="30k">
                  Interested <br />
                  30K
                </Tooltip>,
                <Tooltip title="105">
                  Investors
                  <br />
                  105
                </Tooltip>
              ]}
            >
              <Meta
                style={{ textAlign: "left" }}
                className="cardDesc mt-1"
                title="Stark Industries"
                description="Lets mass produce the iron man suit, bringing happiness to everyone"
              />
              <Progress
                className="progressBar"
                percent={80}
                showInfo={false}
                status="active"
              />
              <p>30 days to go - 80% funded</p>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ListCard3;
