import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeekScoresViewer from './WeekScoresViewer';
import WeekScoresEditor from './WeekScoresEditor';
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
      return this.state.mode === 'view' ? (
        <WeekScoresViewer
          className={this.props.className}
          candidate={this.props.currentCandidate}
          changeMode={this.changeMode}
          changeWeek={this.changeWeek}
          auth={this.props.auth}
        />
      ) : (
        <WeekScoresEditor
          className={this.props.className}
          candidate={this.props.currentCandidate}
          changeMode={this.changeMode}
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
