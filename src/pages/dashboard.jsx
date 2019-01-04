import React, { Component } from "react";
import { Menu, Card, Modal, Button, Input } from "antd";
import ListCard4 from "../components/listCard4";

class Dashboard extends Component {
  state = {
    current: "intro",
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <React.Fragment>
        <div className="bg-db">
          <div className="wordBox">
            <div className="ideaWordTop m-0">
              <p className="m-0">Idea</p>
              <p className="m-0">Sharing</p>
            </div>
            <div className="ideaWordBot ">
              <p className="m-0">Share your idea and make it possible.</p>
            </div>
            <Button type="primary" onClick={this.showModal}>
              SHARE IDEA
            </Button>
            <Modal
              visible={visible}
              title="Share Your Idea !"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Return
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={this.handleOk}
                >
                  Submit
                </Button>
              ]}
            >
              <div
                className="ant-card-body ml-auto mr-auto mb-2"
                style={{ textAlign: "center", width: "350px" }}
              >
                <Input
                  className="textInputIdea"
                  style={{ textAlign: "center" }}
                  placeholder="Title of the idea"
                />
                <Input.TextArea
                  className="textAreaIdea"
                  rows={2}
                  placeholder="What problem do you want to be resolved and what solution do you suggest?"
                />
              </div>
            </Modal>
          </div>
        </div>
        <Menu
          className="dbMenu mb-4"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="intro">Popular Ideas</Menu.Item>
          <Menu.Item key="sim">Popular Project</Menu.Item>
        </Menu>

        <ListCard4 />
        <div className="bg-db2 mt-5">
          <img
            className="bigBox"
            src={require("../assets/img/kotakBesar.png")}
          />
          <br />

          <img
            className="teambox"
            src={require("../assets/img/kotakKecil.png")}
          />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
