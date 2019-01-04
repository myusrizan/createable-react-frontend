import React, { Component } from 'react';
import { Row, Col, Card, Input, Button } from 'antd';
class Register extends Component {
    state = {  }
    render() { 
        return ( 
          <React.Fragment>
			  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
						 <div className="bg-re">
                <Row>
                  <Col span={5}></Col>
                  <Col span={12}>
									<Card style={{ textAlign:"center", marginTop: "60px", marginBottom: "8px", width: 800 }}>
										<div className="ant-card-body ml-auto mr-auto mt-2" style={{width: "750px"}}>
											<p className="textRe">Regist your account</p>
										</div>
										<div className="ant-card-body ml-auto mr-auto mb-2" style={{ textAlign:"center", width: "600px"}}>
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="First Name" />
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="Last Name" />
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="Email" />
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="Password" />
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="Address" />
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="Country" />
											<Input className="textInputRe" style={{ textAlign:"left"}} placeholder="Telephone Number" />
										</div>
										<div className="registBtn mr-auto ml-auto mt-2 mb-2">
                        <Button size="small">Register</Button>
                    </div>
									</Card>
									</Col>
                  <Col span={5}></Col>
              	</Row>
              </div>
					</React.Fragment>
         );
    }
}
 
export default Register;