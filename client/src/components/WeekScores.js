import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeekScoresViewerEditor from './WeekScoresViewerEditor';
import * as actions from '../actions';

class WeekScores extends Component {
  state = {
    mode: 'view' // view or edit
  };

  changeWeek = weekNumber => {
    this.props.changeWeek(weekNumber);
  };

  changeMode = newMode => {
    this.setState({
      mode: newMode
    });
  };

  render() {
    if (this.props.currentCandidate) {
      return (
        <WeekScoresViewerEditor
          auth={this.props.auth}
          className={this.props.className}
          candidate={this.props.currentCandidate}
          mode={this.state.mode}
          changeMode={this.changeMode}
          changeWeek={this.changeWeek}
          saveWeekScores={this.props.saveWeekScores}
        />
      );
    } else {
      return <div>Please select a candidate</div>;
    }
  }
}

function mapStateToProps({ auth, candidates }) {
  return { auth, currentCandidate: candidates.currentCandidate };
}

export default connect(
  mapStateToProps,
  actions
)(WeekScores);
