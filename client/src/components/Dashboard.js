import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Resource from './Resource';
import ListCandidates from './ListCandidates';
import BootcamperProfile from './BootcamperProfile';
import ExtraInfo from './ExtraInfo';
import WeekScores from './WeekScores';
import WeekDetails from './WeekDetails';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCandidateData().then(() => {
      this.props.setCurrentCandidate(this.props.match.params);
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.resourceId !== prevProps.match.params.resourceId ||
      this.props.match.params.action !== prevProps.match.params.action
    ) {
      this.props.setCurrentCandidate(this.props.match.params);
    }
  }

  renderColumns() {
    const { resource, action } = this.props.match.params;
    switch (this.props.auth.role) {
      case 'manager':
      case 'sem':
        return (
          <Row noGutters={true}>
            <Col xs="12" sm="3">
              <ListCandidates className="withBorder withPadding" />
            </Col>
            <Col xs="12" sm="9">
              {resource !== 'candidates' && action ? (
                <Resource action={action} resource={resource} />
              ) : (
                [
                  <Row key={'topDashboard'} noGutters={true}>
                    <Col xs="12">
                      <WeekScores className="withBorder withPadding" />
                    </Col>
                    <Col xs="12">
                      <WeekDetails className="withBorder withPadding" />
                    </Col>
                  </Row>,
                  <Row key={'bottomDashboard'} noGutters={true}>
                    <Col xs="12">
                      <BootcamperProfile className="withBorder withPadding" />
                    </Col>
                    <Col xs="12">
                      <ExtraInfo className="withBorder withPadding" />
                    </Col>
                  </Row>
                ]
              )}
            </Col>
          </Row>
        );
      default:
        return (
          <div>
            <Row noGutters={true}>
              <Col xs="12" sm="8" className="withBorder">
                <WeekScores className="withPadding" />
              </Col>
              <Col xs="12" sm="4" className="withBorder">
                <WeekDetails className="withPadding" />
              </Col>
            </Row>
            <Row noGutters={true}>
              <Col xs="12" sm="8" className="withBorder">
                <BootcamperProfile className="withPadding" />
              </Col>
              <Col xs="12" sm="4" className="withBorder">
                <ExtraInfo className="withPadding" />
              </Col>
            </Row>
          </div>
        );
    }
  }

  render() {
    // Check if the user is authenticated
    return this.props.auth ? (
      this.renderColumns()
    ) : (
      <Row>
        <Col xs="12">
          Please <a href="/auth/google">Login</a> first.
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
