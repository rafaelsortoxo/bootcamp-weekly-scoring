import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeekDetails extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h3>Week Details</h3>
        <p>
          Week's Start Date: <span>2018/11/10</span>
        </p>
        <p>
          Week's Final Score: <span>4</span>
        </p>
        <p>
          Role: <span>SE</span>
        </p>
        <p>
          Tech: <span>Java</span>
        </p>
        <p>
          Week's SEM: <span>Deniz</span>
        </p>
        <p>
          Team: <span>HUT</span>
        </p>
        <p>
          Manager's Comments: <span>Top Performer</span>
        </p>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(WeekDetails);
