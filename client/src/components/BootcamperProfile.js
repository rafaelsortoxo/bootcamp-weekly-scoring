import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class BootcamperProfile extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Row>
          <Col className="text-center">
            <img src="https://via.placeholder.com/150x150" alt="Avatar" />
          </Col>
          <Col>
            <Row>
              <Col>
                <h3>Bootcamper Profile</h3>
              </Col>
            </Row>
            <Row>
              <Col>Bootcamp Start Date: 2018/11/12</Col>
            </Row>
            <Row>
              <Col>Status: Ongoing</Col>
            </Row>
            <Row>
              <Col>Aurea Email</Col>
            </Row>
            <Row>
              <Col>Private Email</Col>
            </Row>
            <Row>
              <Col>Skype</Col>
            </Row>
            <Row>
              <Col>Hiring Manager</Col>
            </Row>
            <Row>
              <Col>Current Team</Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BootcamperProfile;
