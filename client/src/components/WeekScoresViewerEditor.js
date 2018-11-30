import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

import LeftButton from '../images/keyboard-left-arrow-button.svg';
import RightButton from '../images/keyboard-right-arrow-button.svg';

class WeekScoresViewerEditor extends Component {
  constructor(props) {
    super(props);
    const { candidate } = this.props;
    const { viewWeek } = candidate;
    const weekData = candidate[`week${viewWeek}Data`];
    this.state = {
      viewWeek,
      weekData,
      candidate
    };
  }

  handleChange = ({ name, value }) => {
    let field;
    let index;
    if (name.includes('scores') || name.includes('ftar') || name.includes('productivity')) {
      [field, index] = name.split('.');
    }
    this.setState((state, props) => {
      const newWeekData = {
        ...state.weekData
      };
      newWeekData[field][index] = value;
      return { weekData: newWeekData };
    });
  };

  handleSave = () => {
    const { ftar, productivity, scores } = this.state.weekData;

    this.props.saveWeekScores({
      candidateId: this.state.candidate._id,
      weekId: this.state.viewWeek,
      body: {
        ftar,
        productivity,
        scores
      }
    });

    this.props.changeMode('view');
  };

  componentDidUpdate(prevProps) {
    if (
      !prevProps.candidate ||
      (this.props.candidate &&
        this.props.candidate.displayName !== prevProps.candidate.displayName) ||
      this.props.candidate.viewWeek !== prevProps.candidate.viewWeek
    ) {
      const { candidate } = this.props;
      const { viewWeek } = candidate;
      const weekData = candidate[`week${viewWeek}Data`];
      this.setState({
        candidate,
        viewWeek,
        weekData
      });
    }
  }

  renderAnalytics() {
    return (
      <Row className="text-center">
        <Col xs="1">
          <img
            className="img-fluid cursor-pointer"
            src={LeftButton}
            alt={'Previous Week'}
            onClick={() => this.props.changeWeek(this.state.viewWeek - 1)}
            hidden={this.state.viewWeek < 2 || this.props.mode === 'edit'}
          />
        </Col>
        <Col xs="10">
          <img src="https://via.placeholder.com/300x150" alt="Analytics" />
        </Col>
        <Col xs="1">
          <img
            className="img-fluid cursor-pointer"
            src={RightButton}
            alt={'Next Week'}
            onClick={() => this.props.changeWeek(this.state.viewWeek + 1)}
            hidden={this.state.viewWeek > 3 || this.props.mode === 'edit'}
          />
        </Col>
      </Row>
    );
  }

  renderButtons() {
    if (this.props.auth && this.props.auth.role !== 'ic') {
      return this.props.mode === 'view' || this.props.auth.role === 'ic' ? (
        <Button onClick={() => this.props.changeMode('edit')}>Edit</Button>
      ) : (
        [
          <Button
            className={'withRightGutter'}
            color={'primary'}
            key={'save'}
            onClick={() => this.handleSave()}
          >
            Save
          </Button>,
          <Button color={'danger'} key={'cancel'} onClick={() => this.props.changeMode('view')}>
            Cancel
          </Button>
        ]
      );
    }
  }

  renderDays() {
    return (
      <div>
        <h3>Edit Week {this.state.viewWeek} Scores</h3>
        <Row noGutters>
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
      <Row noGutters>
        <Col xs="2">
          <strong>FTAR</strong>
        </Col>
        <Col xs="2">
          <input
            name="ftar.0"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.ftar[0] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="ftar.1"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.ftar[1] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="ftar.2"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.ftar[2] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="ftar.3"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.ftar[3] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="ftar.4"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.ftar[4] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
      </Row>
    );
  }

  renderProductivity() {
    return (
      <Row noGutters>
        <Col xs="2">
          <strong>Prod</strong>
        </Col>
        <Col xs="2">
          <input
            name="productivity.0"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.productivity[0] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="productivity.1"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.productivity[1] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="productivity.2"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.productivity[2] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="productivity.3"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.productivity[3] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="productivity.4"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.productivity[4] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
      </Row>
    );
  }

  renderScore() {
    return (
      <Row noGutters>
        <Col xs="2">
          <strong>Score</strong>
        </Col>
        <Col xs="2">
          <input
            name="scores.0"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.scores[0] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="scores.1"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.scores[1] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="scores.2"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.scores[2] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="scores.3"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.scores[3] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
        </Col>
        <Col xs="2">
          <input
            name="scores.4"
            type="text"
            className="form-control"
            disabled={this.props.mode === 'view' || this.props.auth.role === 'ic'}
            value={this.state.weekData.scores[4] || ''}
            onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
            size="2"
          />
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

export default WeekScoresViewerEditor;
