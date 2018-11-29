import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

class WeekScoresEditor extends Component {
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
        <Col>
          <img src="https://via.placeholder.com/300x150" alt="Analytics" />
        </Col>
      </Row>
    );
  }

  renderButtons() {
    return [
      <Button
        className={'withRightGutter'}
        color={'primary'}
        key={'save'}
        onClick={() => this.props.saveWeekScores()}
      >
        Save
      </Button>,
      <Button color={'danger'} key={'cancel'} onClick={() => this.props.changeMode('view')}>
        Cancel
      </Button>
    ];
  }

  renderDays() {
    return (
      <div>
        <h3>Edit Week {this.state.viewWeek} Scores</h3>
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
        <Col xs="2">
          <input type="text" value={this.state.weekData.ftar[0] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.ftar[1] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.ftar[2] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.ftar[3] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.ftar[4] || 0} size="2" />
        </Col>
      </Row>
    );
  }

  renderProductivity() {
    return (
      <Row>
        <Col xs="2">
          <strong>Prod</strong>
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.productivity[0] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.productivity[1] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.productivity[2] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.productivity[3] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.productivity[4] || 0} size="2" />
        </Col>
      </Row>
    );
  }

  renderScore() {
    return (
      <Row>
        <Col xs="2">
          <strong>Score</strong>
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.scores[0] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.scores[1] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.scores[2] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.scores[3] || 0} size="2" />
        </Col>
        <Col xs="2">
          <input type="text" value={this.state.weekData.scores[4] || 0} size="2" />
        </Col>
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

export default WeekScoresEditor;
