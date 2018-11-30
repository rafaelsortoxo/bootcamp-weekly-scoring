import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import WeekDetailsViewerEditor from './WeekDetailsViewerEditor';

class WeekDetails extends Component {
  state = {
    mode: 'view'
  };

  changeMode = newMode => {
    this.setState({
      mode: newMode
    });
  };

  saveWeekDetails = data => {
    this.props.saveWeekDetails(data);
  };

  render() {
    if (this.props.currentCandidate) {
      return (
        <WeekDetailsViewerEditor
          candidate={this.props.currentCandidate}
          className={this.props.className}
          changeMode={this.changeMode}
          auth={this.props.auth}
          mode={this.state.mode}
          saveWeekDetails={this.saveWeekDetails}
        />
      );
    } else {
      return <div>Please select a candidate first</div>;
    }
  }
}

function mapStateToProps({ auth, candidates }) {
  return { auth, currentCandidate: candidates.currentCandidate };
}

export default connect(
  mapStateToProps,
  actions
)(WeekDetails);
