import React, { Component } from 'react';
import { Button } from 'reactstrap';

class WeekDetailsViewerEditor extends Component {
  constructor(props) {
    super(props);
    const { candidate } = this.props;
    const { viewWeek } = candidate;
    const weekData = candidate[`week${viewWeek}Data`];
    this.state = {
      viewWeek,
      weekData
    };
  }

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
            onClick={() => this.props.saveWeekDetails()}
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
          <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
            Week's Start Date:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="date"
              value={this.state.weekData.startDate}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
            Week's Final Score:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              value={this.state.weekData.finalScore}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
            Week's SEM:{' '}
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              value={this.state.weekData.manager}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
            Team:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              value={this.state.weekData.team}
              disabled={this.props.auth.role === 'ic' || this.props.mode === 'view'}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
            Manager's Comments:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              value={this.state.weekData.comments}
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
