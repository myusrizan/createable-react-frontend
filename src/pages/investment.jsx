import React, { Component } from "react";
import { Menu, Dropdown, Button, Icon, message, Card, Row, Col } from "antd";

import ListCard3 from "../components/listCard3";

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);
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

const gridStyle = {
  width: "50%",
  textAlign: "center"
};
class Investment extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="underNavbar">
          <center>
            <h3 className="h3Invest">invest in project</h3>
          </center>
          <center>
            <h3 className="h3Invest">you believe in</h3>
          </center>
          <center>
            <h5 className="h5Invest">
              Find your key to success here, invest at project that you believe
              in
            </h5>
          </center>
        </div>
        <div className="upperGrid">
          <Row
            style={{
              marginRight: "5.5%",
              marginLeft: "5.5%",
              marginTop: "40px"
            }}
          >
            <Col span={12}>
              <p className="pInvest">
                <b>Investment opportunities</b>
              </p>
            </Col>
            <Col span={12}>
              <Dropdown overlay={menu}>
                <Button>
                  All Categories <Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <ListCard3 />
        <ListCard3 />
        <ListCard3 />
      </React.Fragment>
    );
  }
}

export default Investment;
