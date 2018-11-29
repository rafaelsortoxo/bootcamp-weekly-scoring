import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeekDetailsEditor from './WeekDetailsEditor';
import WeekDetailsViewer from './WeekDetailsViewer';

class WeekDetails extends Component {
  state = {
    mode: 'view'
  };

  changeMode = newMode => {
    this.setState({
      mode: newMode
    });
  };

  render() {
    if (this.props.currentCandidate) {
      return this.state.mode === 'view' ? (
        <WeekDetailsViewer
          candidate={this.props.currentCandidate}
          className={this.props.className}
          changeMode={this.changeMode}
          auth={this.props.auth}
        />
      ) : (
        <WeekDetailsEditor
          candidate={this.props.currentCandidate}
          className={this.props.className}
          changeMode={this.changeMode}
          auth={this.props.auth}
        />
      );
    } else {
      return <div>Please select a candidate first</div>;
    }
  }
}

function mapStateToProps({ auth, currentCandidate }) {
  return { auth, currentCandidate };
}

export default connect(mapStateToProps)(WeekDetails);
