import React from "react";
import { Col, Row, Select, Card, Icon, Avatar, List } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class teamup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
    this.setData = this.setData.bind(this);
  }

  setData() {
    let data = {
      header: require("../assets/img/ironman.png"),
      avatar: "",
      title: "Stark Industries",
      description:
        "Lets mass produce the iron man suit, bringing happiness to everyone"
    };

    let dataList = [];

    for (let i = 0; i < 10; i++) {
      dataList.push(data);
    }

    this.setState({ listData: dataList });
  }

  componentDidMount() {
    this.setData();
  }

  render() {
    console.log(this.state.listData);
    return (
      <div>
        <Row
          className="teamup-header"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col span={20}>
            Be the part of Developer comunity. Create a projects to meet another
            developer from various place!
          </Col>
          <Col span={4}>
            <Select defaultValue="all" style={{ minWidth: 100 }}>
              <Select.Option value="all">All Categories</Select.Option>
            </Select>
          </Col>
        </Row>

        <hr />

        {this.state.listData && (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={this.state.listData}
            renderItem={item => (
              <List.Item key={item.title}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      style={{ maxHeight: "150px" }}
                      src={item.header}
                    />
                  }
                  actions={[
                    <Icon type="setting" />,
                    <Icon type="edit" />,
                    <Icon type="ellipsis" />
                  ]}
                >
                  <Card.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    );
  }
}

export default teamup;
