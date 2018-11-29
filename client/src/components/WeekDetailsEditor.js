import React, { Component } from 'react';
import { Button } from 'reactstrap';

class WeekDetailsViewer extends Component {
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
    return [
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
    ];
  }

  render() {
    return (
      <div className={this.props.className}>
        <h3>Week {this.state.viewWeek} Details</h3>
        <div class="form-group row">
          <label forHtml="staticEmail" class="col-sm-3 col-form-label">
            Week's Start Date:
          </label>
          <div class="col-sm-9">
            <input className="form-control" type="date" value={this.state.weekData.startDate} />
          </div>
        </div>
        <div class="form-group row">
          <label forHtml="staticEmail" class="col-sm-3 col-form-label">
            Week's Final Score:
          </label>
          <div class="col-sm-9">
            <input className="form-control" type="text" value={this.state.weekData.finalScore} />
          </div>
        </div>
        <div class="form-group row">
          <label forHtml="staticEmail" class="col-sm-3 col-form-label">
            Week's SEM:{' '}
          </label>
          <div class="col-sm-9">
            <input className="form-control" type="text" value={this.state.weekData.manager} />
          </div>
        </div>
        <div class="form-group row">
          <label forHtml="staticEmail" class="col-sm-3 col-form-label">
            Team:
          </label>
          <div class="col-sm-9">
            <input className="form-control" type="text" value={this.state.weekData.team} />
          </div>
        </div>
        <div class="form-group row">
          <label forHtml="staticEmail" class="col-sm-3 col-form-label">
            Manager's Comments:
          </label>
          <div class="col-sm-9">
            <input className="form-control" type="text" value={this.state.weekData.comments} />
          </div>
        </div>
        <div className={'text-center with2xTopGutter'}>{this.renderButtons()}</div>
      </div>
    );
  }
}

export default WeekDetailsViewer;
