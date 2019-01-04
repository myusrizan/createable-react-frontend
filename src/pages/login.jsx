import React, { Component } from 'react';
import { Row, Col, Card, Input, Button } from 'antd';
const { TextArea } = Input;

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
              <div className="bg-si">
                <Row>
                  <Col span={8}></Col>
                  <Col span={8}>
									<Card style={{ textAlign:"center", marginTop: "60px", marginBottom: "8px", width: 400 }}>
										<div className="ant-card-body ml-auto mr-auto mt-2" style={{width: "350px"}}>
											<p className="textIdea">Login to your account !</p>
											<hr className="hrIdea"></hr>
										</div>
										<div className="ant-card-body ml-auto mr-auto mb-2" style={{ textAlign:"center", width: "350px"}}>
											<Input className="textInputIdea" style={{ textAlign:"center"}} placeholder="Email" />
											<Input className="textInputIdea" style={{ textAlign:"center"}} placeholder="Password" />
										</div>
										<div className="shareIdeaBtn mr-auto ml-auto mt-2 mb-2">
                        <Button size="small">Login</Button>
                        <Button className="ml-3" size="small">Register</Button>
                    </div>
									</Card>
									</Col>
                  <Col span={8}></Col>
              	</Row>
              </div>
            </React.Fragment>
         );
    }
}
 
export default Login;