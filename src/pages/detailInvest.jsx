import React, { Component } from "react";
import { Menu, Icon, Row, Col, Table, Card, Button, Progress } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class DetailInvest extends Component {
  state = {
    current: "intro"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="divInvest">
          <p className="judulInvest">Iron Man suit</p>
          <h3 className="judul2Invest">
            Submitted by <b>Stark Industries</b>
          </h3>
        </div>
        <div className="atasInvest">
          <Row>
            <Col className="rightKolom text-align-justify" span={18} push={6}>
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
        <div className="bawahInvest">
          <Menu
            className="menuInvest"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="intro">Introduction</Menu.Item>
            <Menu.Item key="sim">Similar Project</Menu.Item>
            <Menu.Item key="discussion">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discussion
              </a>
            </Menu.Item>
          </Menu>
          <Row className="colInvestBawah">
            <Col style={{ textAlign: "center" }} span={16}>
              <Card style={{ width: 765 }}>
                <p>
                  <b>Introduction</b>
                </p>
                <p className="text-align-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Senectus et netus et malesuada. In fermentum posuere
                  urna nec tincidunt praesent semper feugiat nibh. Placerat duis
                  ultricies lacus sed turpis. Volutpat sed cras ornare arcu dui.
                  Magna eget est lorem ipsum dolor sit amet consectetur.
                  Pellentesque adipiscing commodo elit at. Orci ac auctor augue
                  mauris augue neque gravida. Quis commodo odio aenean sed
                  adipiscing diam. Lacus suspendisse faucibus interdum posuere.
                  Sollicitudin nibh sit amet commodo nulla facilisi. Hendrerit
                  gravida rutrum quisque non tellus orci. Vitae proin sagittis
                  nisl rhoncus mattis rhoncus.
                </p>
                <img
                  style={{ width: 400 }}
                  src={require("../assets/img/ironman.jpg")}
                />
                <p className="text-align-justify">
                  Morbi tristique senectus et netus et malesuada fames ac
                  turpis. Netus et malesuada fames ac turpis egestas sed tempus.
                  Et ligula ullamcorper malesuada proin. Hendrerit gravida
                  rutrum quisque non tellus orci ac auctor. In ornare quam
                  viverra orci sagittis eu volutpat odio. Massa massa ultricies
                  mi quis hendrerit dolor magna. At augue eget arcu dictum
                  varius duis at. Ac turpis egestas integer eget aliquet nibh
                  praesent. Placerat in egestas erat imperdiet. In est ante in
                  nibh. Amet mauris commodo quis imperdiet massa.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <div>
                <Card style={{ marginBottom: "8px", width: 400 }}>
                  <div
                    className="ml-auto mr-auto mb-2"
                    style={{ width: "120px" }}
                  >
                    <img
                      style={{ width: 30 }}
                      src={require("../assets/img/iconFounder.png")}
                    />{" "}
                    <b>Co-Founder</b>
                  </div>
                  <div>
                    <Row>
                      <Col style={{ textAlign: "left" }} span={12}>
                        <table>
                          <tr>
                            <th>
                              <img
                                style={{ width: 25 }}
                                src={require("../assets/img/iconFounder.png")}
                              />
                            </th>
                            <th className="thStyle"> Muhamad Yusrizan</th>
                            <td className="tdStyle">
                              <i>Business Development</i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <img
                                style={{ width: 25 }}
                                src={require("../assets/img/iconFounder.png")}
                              />
                            </th>
                            <th className="thStyle">Muhamad Ihsan Kamil</th>
                            <td className="tdStyle">
                              <i>Business Development</i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <img
                                style={{ width: 25 }}
                                src={require("../assets/img/iconFounder.png")}
                              />
                            </th>
                            <th className="thStyle">Tony Stark</th>
                            <td className="tdStyle">
                              <i>Project Manager</i>
                            </td>
                          </tr>
                        </table>
                      </Col>
                      <Col style={{ textAlign: "left" }} span={12}>
                        <table>
                          <tr>
                            <th>
                              <img
                                style={{ width: 25 }}
                                src={require("../assets/img/iconFounder.png")}
                              />
                            </th>
                            <th className="thStyle">M Gilang Akbar H</th>
                            <td className="tdStyle">
                              <i>Business Development</i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <img
                                style={{ width: 25 }}
                                src={require("../assets/img/iconFounder.png")}
                              />
                            </th>
                            <th className="thStyle">Vega Savera Yuana</th>
                            <td className="tdStyle">
                              <i>Business Development</i>
                            </td>
                          </tr>
                        </table>
                      </Col>
                    </Row>
                  </div>
                  <div className="detailButton">
                    <Button size="small" className="mr-2">
                      Contact Us
                    </Button>
                    <Button size="small">Team Up</Button>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: 400 }}>
                  <Row>
                    <Col style={{ textAlign: "left" }} span={16}>
                      <tr>
                        <th className="thStyle3">Investment Sought</th>
                      </tr>
                      <tr>
                        <th>$ 200.000</th>
                      </tr>
                    </Col>
                    <Col style={{ textAlign: "left" }} span={8}>
                      <tr>
                        <th className="thStyle3">Equity Offered</th>
                      </tr>
                      <tr>
                        <th>15.67%</th>
                      </tr>
                    </Col>
                    <div>
                      <Progress
                        className="styleProgress"
                        percent={95}
                        status="active"
                      >
                        95%
                      </Progress>
                    </div>
                    <Col style={{ textAlign: "left" }} span={16}>
                      <tr>
                        <th className="thStyle3">Investment Already Funded</th>
                      </tr>
                      <tr>
                        <th>$ 190.000</th>
                      </tr>
                    </Col>
                    <Col style={{ textAlign: "left" }} span={8}>
                      <tr>
                        <th className="thStyle3">Investment Closed</th>
                      </tr>
                      <tr>
                        <th>50 days to left</th>
                      </tr>
                    </Col>
                  </Row>
                  <div className="detailInvestBtn mr-auto ml-auto mt-3">
                    <Button size="small">Invest</Button>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailInvest;
