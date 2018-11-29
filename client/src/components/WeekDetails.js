import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  render() {
    if (this.props.currentCandidate) {
      return (
        <WeekDetailsViewerEditor
          candidate={this.props.currentCandidate}
          className={this.props.className}
          changeMode={this.changeMode}
          auth={this.props.auth}
          mode={this.state.mode}
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
