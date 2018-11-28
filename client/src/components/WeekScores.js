import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

class WeekScores extends Component {
  renderAnalytics() {
    return (
      <Row className="text-center">
        <Col>
          <img src="https://via.placeholder.com/300x150" alt="Analytics" />
        </Col>
      </Row>
    );
  }

  renderDays() {
    return (
      <Row>
        <Col xs="2" />
        <Col xs="2">
          <strong>Day 1</strong>
        </Col>
        <Col xs="2">
          <strong>Day 2</strong>
        </Col>
        <Col xs="2">
          <strong>Day 3</strong>
        </Col>
        <Col xs="2">
          <strong>Day 4</strong>
        </Col>
        <Col xs="2">
          <strong>Day 5</strong>
        </Col>
      </Row>
    );
  }

  renderFtar() {
    return (
      <Row>
        <Col xs="2">
          <strong>FTAR</strong>
        </Col>
        <Col xs="2">100%</Col>
        <Col xs="2">100%</Col>
        <Col xs="2">100%</Col>
        <Col xs="2">100%</Col>
        <Col xs="2">100%</Col>
      </Row>
    );
  }

  renderProductivity() {
    return (
      <Row>
        <Col xs="2">
          <strong>Prod</strong>
        </Col>
        <Col xs="2">1000</Col>
        <Col xs="2">600</Col>
        <Col xs="2">700</Col>
        <Col xs="2">800</Col>
        <Col xs="2">1000</Col>
      </Row>
    );
  }

  renderScore() {
    return (
      <Row>
        <Col xs="2">
          <strong>Score</strong>
        </Col>
        <Col xs="2">2</Col>
        <Col xs="2">3</Col>
        <Col xs="2">4</Col>
        <Col xs="2">3</Col>
        <Col xs="2">2</Col>
      </Row>
    );
  }

  renderTabularData() {
    return (
      <div>
        {this.renderDays()}
        {this.renderProductivity()}
        {this.renderFtar()}
        {this.renderScore()}
        {this.renderAnalytics()}
      </div>
    );
  }

  render() {
    return <div className={this.props.className}>{this.renderTabularData()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(WeekScores);
