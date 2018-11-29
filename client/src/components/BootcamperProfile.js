import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BootcamperProfile extends Component {
  state = {
    mode: 'view'
  };

  changeMode = newMode => {
    this.setState({
      mode: newMode
    });
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
          <Button color="primary" onClick={() => this.changeMode('view')}>
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
    const { currentCandidate } = this.props;
    return currentCandidate ? (
      <div className={this.props.className}>
        <Row>
          <Col className="text-center" xs="12" sm="3">
            <img src="https://via.placeholder.com/150x150" alt="Avatar" />
          </Col>
          <Col xs="12" sm="9">
            <Row>
              <Col>
                <h3>Bootcamper Profile</h3>
              </Col>
            </Row>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Name:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.displayName || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            {/*change to input */}
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Bootcamp Start Date:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.bootcampStartDate || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Status:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.status || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Aurea Email:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.aureaEmail || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Private Email:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.privateEmail || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Skype:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.skype || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Hiring Manager:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.hiringManager || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Current Week:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.currentWeek || 'N/A'}
                  disabled={
                    (this.props.auth && this.props.auth.role === 'ic') || this.state.mode === 'view'
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label forHtml="teamInput" class="col-sm-4 col-form-label">
                Current Team:
              </label>
              <div class="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={currentCandidate.currentTeam || 'N/A'}
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

function mapStateToProps({ auth, currentCandidate }) {
  return { auth, currentCandidate };
}

export default connect(
  mapStateToProps,
  actions
)(BootcamperProfile);
