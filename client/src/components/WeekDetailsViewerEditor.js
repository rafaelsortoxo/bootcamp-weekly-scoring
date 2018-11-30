import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { formatDate } from '../utilities';

class WeekDetailsViewerEditor extends Component {
  constructor(props) {
    super(props);
    const { candidate } = this.props;
    const { viewWeek } = candidate;
    const weekData = candidate[`week${viewWeek}Data`];
    this.state = {
      candidate,
      viewWeek,
      weekData
    };
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.candidate ||
      ((this.props.candidate &&
        this.props.candidate.displayName !== prevProps.candidate.displayName) ||
        this.props.candidate.viewWeek !== prevProps.candidate.viewWeek)
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

  handleChange = ({ name, value }) => {
    this.setState((state, props) => {
      const newState = {
        ...state
      };
      newState.weekData[name] = value;
      return newState;
    });
  };

  handleSave = () => {
    const { startDate, finalScore, SEM, team, comments } = this.state.weekData;

    this.props.saveWeekDetails({
      candidateId: this.state.candidate._id,
      weekId: this.state.viewWeek,
      body: {
        startDate,
        finalScore,
        SEM,
        team,
        comments
      }
    });

    this.props.changeMode('view');
  };

  renderButtons() {
    if (this.props.auth.role !== 'ic') {
      return this.props.mode === 'view' ? (
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

  render() {
    return (
      <div className={this.props.className}>
        <h3>Week {this.state.viewWeek} Details</h3>
        <div className="form-group row">
          <label htmlFor="startDate" className="col-sm-3 col-form-label">
            Week's Start Date:
          </label>
          <div className="col-sm-9">
            <input
              name="startDate"
              className="form-control"
              type="date"
              value={formatDate(this.state.weekData.startDate)}
              onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="finalScore" className="col-sm-3 col-form-label">
            Week's Final Score:
          </label>
          <div className="col-sm-9">
            <input
              name="finalScore"
              className="form-control"
              type="text"
              value={this.state.weekData.finalScore || ''}
              onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="SEM" className="col-sm-3 col-form-label">
            Week's SEM:{' '}
          </label>
          <div className="col-sm-9">
            <input
              name="SEM"
              className="form-control"
              type="text"
              value={this.state.weekData.SEM || ''}
              onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="team" className="col-sm-3 col-form-label">
            Team:
          </label>
          <div className="col-sm-9">
            <input
              name="team"
              className="form-control"
              type="text"
              value={this.state.weekData.team || ''}
              onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="comments" className="col-sm-3 col-form-label">
            Manager's Comments:
          </label>
          <div className="col-sm-9">
            <input
              name="comments"
              className="form-control"
              type="text"
              value={this.state.weekData.comments || ''}
              onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className={'text-center with2xTopGutter'}>{this.renderButtons()}</div>
      </div>
    );
  }
}

export default WeekDetailsViewerEditor;
