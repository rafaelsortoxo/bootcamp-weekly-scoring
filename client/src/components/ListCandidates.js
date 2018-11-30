import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class ListCandidates extends Component {
  state = {
    icFilter: '',
    semFilter: ''
  };

  renderCandidates(candidates) {
    const { currentCandidate } = this.props.candidates;
    return candidates.map(candidate => {
      return (
        <Row key={candidate._id}>
          <Col>
            <Link
              className={
                currentCandidate && candidate._id === currentCandidate._id
                  ? 'withGreyBackground'
                  : null
              }
              to={`/dashboard/candidates/view/${candidate._id}`}
            >
              {candidate.displayName}
            </Link>
          </Col>
        </Row>
      );
    });
  }

  updateIcFilter = icFilter => {
    this.setState({
      icFilter
    });
  };

  updateSemFilter = semFilter => {
    this.setState({
      semFilter
    });
  };

  render() {
    return [
      <div key={'BootcampersList'} className={this.props.className}>
        ICs List
        <div className="withBottomGutter">
          <input
            type="text"
            className="form-control"
            placeholder="type name"
            value={this.state.icFilter}
            onChange={e => this.updateIcFilter(e.target.value)}
          />
        </div>
        {this.renderCandidates(
          this.props.candidates.candidates.filter(
            candidate =>
              candidate.role === 'ic' && candidate.displayName.includes(this.state.icFilter)
          )
        )}
      </div>,
      <div key={'managedBy'} className={this.props.className}>
        SEMs List
        <div className="withBottomGutter">
          <input
            type="text"
            className="form-control"
            placeholder="type name"
            value={this.state.semFilter}
            onChange={e => this.updateSemFilter(e.target.value)}
          />
        </div>
        {this.renderCandidates(
          this.props.candidates.candidates.filter(
            candidate =>
              candidate.role === 'sem' && candidate.displayName.includes(this.state.semFilter)
          )
        )}
      </div>
    ];
  }
}

function mapStateToProps({ candidates }) {
  return { candidates };
}

export default connect(mapStateToProps)(ListCandidates);
