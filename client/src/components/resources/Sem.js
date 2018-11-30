import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class Sem extends Component {
  state = {
    profilePicUrl: '',
    displayName: '',
    privateEmail: '',
    aureaEmail: '',
    skype: '',
    hiringManager: '',
    bootcampStartDate: '',
    week1Data: {
      startDate: '',
      SEM: '',
      team: ''
    },
    week2Data: {
      startDate: '',
      SEM: '',
      team: ''
    },
    week3Data: {
      startDate: '',
      SEM: '',
      team: ''
    },
    week4Data: {
      startDate: '',
      SEM: '',
      team: ''
    },
    active: true,
    position: ''
  };

  handleChange = ({ name, value, checked }) => {
    if (name === 'active') {
      value = checked;
    }
    this.setState({
      [name]: value
    });
  };

  handleSave = async e => {
    e.preventDefault();
    const response = await this.props.addNewSem(this.state);
    console.log('Response', response);
    if (response.message || response.error) {
      this.setState({
        error: response.message || response.error.message
      });
    } else {
      this.props.history.push(`/dashboard/candidates/view/${response.candidate._id}`);
    }
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" sm="8">
            <h3>Add a SEM for the Bootcamp</h3>
            <div className="text-center">
              <img src="http://via.placeholder.com/150" alt="Profile Avatar" />
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="profilePicUrl">Profile Picture Url:</label>
                <input
                  name="profilePicUrl"
                  type="text"
                  className="form-control"
                  id="profilePicUrl"
                  placeholder="Enter Profile Picture Url"
                  value={this.state.profilePicUrl}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="displayName">Display Name:</label>
                <input
                  name="displayName"
                  type="text"
                  className="form-control"
                  id="displayName"
                  placeholder="Enter Display Name"
                  required
                  value={this.state.displayName}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="privateEmail">Private Email:</label>
                <input
                  name="privateEmail"
                  type="email"
                  className=" form-control"
                  id="privateEmail"
                  placeholder="Enter Private email"
                  value={this.state.privateEmail}
                  required
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAureasEmail">Aurea's Email:</label>
                <input
                  name="aureaEmail"
                  type="email"
                  className="form-control"
                  id="aureaEmail"
                  placeholder="Enter Aureas email"
                  value={this.state.aureaEmail}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputSkype">Skype</label>
                <input
                  name="skype"
                  type="text"
                  className="form-control"
                  id="skype"
                  placeholder="Enter Skype ID"
                  value={this.state.skype}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hiringManager">Hiring Manager</label>
                <input
                  name="hiringManager"
                  type="text"
                  className="form-control"
                  id="hiringManager"
                  placeholder="Enter Hiring Manager"
                  value={this.state.hiringManager}
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bootcampStartDate">Bootcamp Start Date</label>
                <input
                  name="bootcampStartDate"
                  type="date"
                  className="form-control"
                  id="bootcampStartDate"
                  placeholder="Enter Bootcamp's Start Date"
                  value={this.state.bootcampStartDate}
                  required
                  onChange={e => this.handleChange({ name: e.target.name, value: e.target.value })}
                />
              </div>
              <div className="withRoundedBlueBorder withPadding withBottomGutter">
                <div className="form-group">
                  <label htmlFor="week1Data.startDate">Week1 Start Date</label>
                  <input
                    name="week1Data.startDate"
                    type="date"
                    className="form-control"
                    id="week1Data.startDate"
                    placeholder="Enter Week1 Start Date"
                    value={this.state.week1Data.startDate}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="week1Data.SEM">Week1 Manager</label>
                  <input
                    name="week1Data.SEM"
                    type="text"
                    className="form-control"
                    id="week1Data.SEM"
                    placeholder="Enter Week1 Manager"
                    value={this.state.week1Data.SEM}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="week1Data.team">Week1 Team</label>
                  <input
                    name="week1Data.team"
                    type="text"
                    className="form-control"
                    id="week1Data.team"
                    placeholder="Enter Week1 Team"
                    value={this.state.week1Data.team}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="withRoundedBlueBorder withPadding withBottomGutter">
                <div className="form-group">
                  <label htmlFor="week2Data.startDate">Week2 Start Date</label>
                  <input
                    name="week2Data.startDate"
                    type="date"
                    className="form-control"
                    id="week2Data.startDate"
                    placeholder="Enter Week2 Start Date"
                    value={this.state.week2Data.startDate}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="week2Data.SEM">Week2 Manager</label>
                  <input
                    name="week2Data.SEM"
                    type="text"
                    className="form-control"
                    id="week2Data.SEM"
                    placeholder="Enter Week2 Manager"
                    value={this.state.week2Data.SEM}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="week2Data.team">Week2 Team</label>
                  <input
                    name="week2Data.team"
                    type="text"
                    className="form-control"
                    id="week2Data.team"
                    placeholder="Enter Week2 Team"
                    value={this.state.week2Data.team}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="withRoundedBlueBorder withPadding withBottomGutter">
                <div className="form-group">
                  <label htmlFor="inputStartDate">Week3 Start Date</label>
                  <input
                    name="week3Data.startDate"
                    type="date"
                    className="form-control"
                    id="week3Data.startDate"
                    placeholder="Enter Week3 Start Date"
                    value={this.state.week3Data.startDate}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="week3Data.SEM">Week3 Manager</label>
                  <input
                    name="week3Data.SEM"
                    type="text"
                    className="form-control"
                    id="week3Data.SEM"
                    placeholder="Enter Week3 Manager"
                    value={this.state.week3Data.SEM}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStartDate">Week3 Team</label>
                  <input
                    name="week3Data.team"
                    type="text"
                    className="form-control"
                    id="inputStartDate"
                    placeholder="Enter Week3 Team"
                    value={this.state.week1Data.team}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="withRoundedBlueBorder withPadding withBottomGutter">
                <div className="form-group">
                  <label htmlFor="week4Data.startDate">Week4 Start Date</label>
                  <input
                    name="week4Data.startDate"
                    type="date"
                    className="form-control"
                    id="week4Data.startDate"
                    placeholder="Enter Week4 Start Date"
                    value={this.state.week4Data.startDate}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="week4Data.SEM">Week4 Manager</label>
                  <input
                    name="week4Data.SEM"
                    type="text"
                    className="form-control"
                    id="week4Data.SEM"
                    placeholder="Enter Week4 Manager"
                    value={this.state.week4Data.SEM}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStartDate">Week4 Team</label>
                  <input
                    name="week4Data.team"
                    type="text"
                    className="form-control"
                    id="week4Data.team"
                    placeholder="Enter Week4 Team"
                    value={this.state.week4Data.team}
                    onChange={e =>
                      this.handleChange({ name: e.target.name, value: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-check">
                <input
                  name="active"
                  type="checkbox"
                  className="form-check-input"
                  id="active"
                  defaultChecked={this.state.active}
                  onChange={e => this.handleChange(e.target)}
                />
                <label className="form-check-label" htmlFor="active">
                  Active
                </label>
              </div>
              {this.state.error && (
                <div>
                  <p className="text-danger">{this.state.error}</p>
                </div>
              )}
              <button className="btn btn-primary" onClick={this.handleSave}>
                Save
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(Sem));
