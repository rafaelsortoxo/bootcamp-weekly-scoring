import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { formatDate } from '../utilities';
import * as actions from '../actions';

class BootcamperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCandidate: {
        ...this.props.currentCandidate
      },
      mode: 'view'
    };
  }

  changeMode = newMode => {
    this.setState({
      mode: newMode
    });
  };

  componentDidUpdate = prevProps => {
    if (
      (!prevProps.currentCandidate && this.props.currentCandidate) ||
      prevProps.currentCandidate.displayName !== this.props.currentCandidate.displayName
    ) {
      this.setState({
        currentCandidate: {
          ...this.props.currentCandidate
        },
        mode: 'view'
      });
    }
  };

  handleChange = ({ name, value }) => {
    // cast 'true' or 'false' to Boolean
    value = value === 'true' || value === 'false' ? value === 'true' : value;
    this.setState((state, props) => {
      const currentCandidate = {
        ...state.currentCandidate
      };
      currentCandidate[name] = value;
      return { currentCandidate };
    });
  };

  saveProfile = () => {
    this.props.updateProfile(this.state.currentCandidate);
    this.changeMode('view');
  };

  renderButtons() {
    return this.state.mode === 'view' ? (
      <Row>
        <Col className="text-center">
          <Button onClick={() => this.changeMode('edit')}>Edit</Button>
        </Col>
      </Row>
    ) : (
      <Row>
        <Col className="text-center">
          <Button color="primary" onClick={this.saveProfile}>
            Save
          </Button>
          <Button color="danger" onClick={() => this.changeMode('view')}>
            Cancel
          </Button>
        </Col>
      </Row>
    );
  }

  render() {
    const { currentCandidate } = this.state;
    return currentCandidate ? (
      <div className={this.props.className}>
        <Row>
          <Col className="text-center" xs="12" sm="3">
            <img
              src={currentCandidate.profilePicUrl || 'https://via.placeholder.com/150x150'}
              alt="Avatar"
            />
          </Col>
          <Col xs="12" sm="9">
            <Row>
              <Col>
                <h3>Bootcamper Profile</h3>
              </Col>
            </Row>
            <div className="form-group row">
              <label htmlFor="displayName" className="col-sm-4 col-form-label">
                Name:
              </label>
              <div className="col-sm-8">
                <input
                  name="displayName"
                  className="form-control"
                  type="text"
                  value={this.state.currentCandidate.displayName || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="bootcampStartDate" className="col-sm-4 col-form-label">
                Bootcamp Start Date:
              </label>
              <div className="col-sm-8">
                <input
                  name="bootcampStartDate"
                  className="form-control"
                  type="date"
                  value={formatDate(this.state.currentCandidate.bootcampStartDate)}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="bootcampCompleted" className="col-sm-4 col-form-label">
                Bootcamp Completed:
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  id="bootcampCompleted"
                  name="bootcampCompleted"
                  value={currentCandidate.bootcampCompleted ? 'true' : 'false'}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="bootcampPassed" className="col-sm-4 col-form-label">
                Bootcamp Passed
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  id="bootcampPassed"
                  name="bootcampPassed"
                  value={currentCandidate.bootcampPassed ? 'true' : 'false'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="bootcampReason" className="col-sm-4 col-form-label">
                Bootcamp Reason:
              </label>
              <div className="col-sm-8">
                <input
                  name="bootcampReason"
                  className="form-control"
                  type="text"
                  value={currentCandidate.bootcampReason || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="aureaEmail" className="col-sm-4 col-form-label">
                Aurea Email:
              </label>
              <div className="col-sm-8">
                <input
                  name="aureaEmail"
                  className="form-control"
                  type="text"
                  value={currentCandidate.aureaEmail || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="privateEmail" className="col-sm-4 col-form-label">
                Private Email:
              </label>
              <div className="col-sm-8">
                <input
                  name="privateEmail"
                  className="form-control"
                  type="text"
                  value={currentCandidate.privateEmail || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="hiringManager" className="col-sm-4 col-form-label">
                Hiring Manager:
              </label>
              <div className="col-sm-8">
                <input
                  name="hiringManager"
                  className="form-control"
                  type="text"
                  value={currentCandidate.hiringManager || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="currentWeek" className="col-sm-4 col-form-label">
                Current Week:
              </label>
              <div className="col-sm-8">
                <input
                  name="currentWeek"
                  className="form-control"
                  type="number"
                  value={currentCandidate.currentWeek || 0}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="currentTeam" className="col-sm-4 col-form-label">
                Current Team:
              </label>
              <div className="col-sm-8">
                <input
                  name="currentTeam"
                  className="form-control"
                  type="text"
                  value={currentCandidate.currentTeam || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="notes" className="col-sm-4 col-form-label">
                Notes:
              </label>
              <div className="col-sm-8">
                <input
                  name="notes"
                  className="form-control"
                  type="text"
                  value={currentCandidate.notes || ''}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
        {this.props.auth && this.props.auth.role !== 'ic' ? this.renderButtons() : null}
      </div>
    ) : (
      <div>No current candidate selected</div>
    );
  }
}

function mapStateToProps({ auth, candidates }) {
  return { auth, currentCandidate: candidates.currentCandidate };
}

export default connect(
  mapStateToProps,
  actions
)(BootcamperProfile);
