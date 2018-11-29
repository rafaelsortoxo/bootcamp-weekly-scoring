import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

import RightArrow from '../images/keyboard-right-arrow-button.svg';
import LeftArrow from '../images/keyboard-left-arrow-button.svg';

class WeekScoresViewer extends Component {
  constructor(props) {
    super(props);
    const { candidate } = this.props;
    const { viewWeek } = candidate;
    const weekData = candidate[`week${viewWeek}Data`];
    const scores = [
      candidate.week1Data.score || 0,
      candidate.week2Data.score || 0,
      candidate.week3Data.score || 0,
      candidate.week4Data.score || 0
    ];
    this.state = {
      viewWeek,
      weekData,
      scores
    };
  }

  renderAnalytics() {
    return (
      <Row className="text-center">
        <Col xs="1">
          <img className="img-fluid" src={LeftArrow} alt={'Previous Week'} />
        </Col>
        <Col xs="10">
          <img src="https://via.placeholder.com/300x150" alt="Analytics" />
        </Col>
        <Col xs="1">
          <img className="img-fluid" src={RightArrow} alt={'Next Week'} />
        </Col>
      </Row>
    );
  }

  renderButtons() {
    return this.props.auth && this.props.auth.role !== 'ic' ? (
      <Button onClick={() => this.props.changeMode('edit')}>Edit</Button>
    ) : null;
  }

  renderDays() {
    return (
      <div>
        <h3>Week {this.state.viewWeek} Scores</h3>
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
      </div>
    );
  }

  renderFtar() {
    return (
      <Row>
        <Col xs="2">
          <strong>FTAR</strong>
        </Col>
        <Col xs="2">{this.state.weekData.ftar[0] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.ftar[1] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.ftar[2] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.ftar[3] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.ftar[4] || 'N/A'}</Col>
      </Row>
    );
  }

  renderProductivity() {
    return (
      <Row>
        <Col xs="2">
          <strong>Prod</strong>
        </Col>
        <Col xs="2">{this.state.weekData.productivity[0] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.productivity[1] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.productivity[2] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.productivity[3] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.productivity[4] || 'N/A'}</Col>
      </Row>
    );
  }

  renderScore() {
    return (
      <Row>
        <Col xs="2">
          <strong>Score</strong>
        </Col>
        <Col xs="2">{this.state.weekData.scores[0] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.scores[1] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.scores[2] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.scores[3] || 'N/A'}</Col>
        <Col xs="2">{this.state.weekData.scores[4] || 'N/A'}</Col>
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
        <div className={'with2xTopGutter'}>{this.renderAnalytics()}</div>
        <div className={'text-center with2xTopGutter'}>{this.renderButtons()}</div>
      </div>
    );
  }

  render() {
    return <div className={this.props.className}>{this.renderTabularData()}</div>;
  }
}

export default WeekScoresViewer;
