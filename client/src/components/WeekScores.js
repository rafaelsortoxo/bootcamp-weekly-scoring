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
          className={this.props.className}
          candidate={this.props.currentCandidate}
          mode={this.state.mode}
          changeMode={this.changeMode}
          changeWeek={this.changeWeek}
          auth={this.props.auth}
        />
      );
    } else {
      return <div>Please select a candidate</div>;
    }
  }
}

function mapStateToProps({ auth, currentCandidate }) {
  return { auth, currentCandidate };
}

export default connect(
  mapStateToProps,
  actions
)(WeekScores);
