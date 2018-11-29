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
    return this.props.auth && this.props.auth.role !== 'ic' ? (
      <Button onClick={() => this.props.changeMode('edit')}>Edit</Button>
    ) : null;
  }

  render() {
    return (
      <div className={this.props.className}>
        <h3>Week {this.state.viewWeek} Details</h3>
        <p>
          Week's Start Date: <span>{this.state.weekData.startDate || 'N/A'}</span>
        </p>
        <p>
          Week's Final Score: <span>{this.state.weekData.finalScore || 'N/A'}</span>
        </p>
        <p>
          Week's SEM: <span>{this.state.weekData.SEM || 'N/A'}</span>
        </p>
        <p>
          Team: <span>{this.state.weekData.team || 'N/A'}</span>
        </p>
        <p>
          Manager's Comments: <span>{this.state.weekData.comments || 'N/A'}</span>
        </p>
        <div className={'text-center with2xTopGutter'}>{this.renderButtons()}</div>
      </div>
    );
  }
}

export default WeekDetailsViewer;
