import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export default () => (
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" sm="8">
        <h3>Add an IC for the Bootcamp</h3>
        <div className="text-center">
          <img src="http://via.placeholder.com/150" alt="Profile Avatar" />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="inputProfilePicture">Profile Picture Url:</label>
            <input
              type="text"
              className="form-control"
              id="inputProfilePicture"
              placeholder="Enter Profile Picture Url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Display Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Display Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Private Email:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Private email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAureasEmail">Aurea's Email:</label>
            <input
              type="email"
              className="form-control"
              id="inputAureasEmail"
              placeholder="Enter Aureas email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputSkype">Skype</label>
            <input
              type="text"
              className="form-control"
              id="inputSkype"
              placeholder="Enter Skype ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputHiringManager">Hiring Manager</label>
            <input
              type="text"
              className="form-control"
              id="inputHiringManager"
              placeholder="Enter Hiring Manager"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputStartDate">Bootcamp Start Date</label>
            <input
              type="date"
              className="form-control"
              id="inputStartDate"
              placeholder="Enter Bootcamp's Start Date"
            />
          </div>
          <div className="withRoundedBlueBorder withPadding withBottomGutter">
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Start Date</label>
              <input
                type="date"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week1 Start Date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Manager</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week1 Manager"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Team</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week1 Team"
              />
            </div>
          </div>
          <div className="withRoundedBlueBorder withPadding withBottomGutter">
            <div className="form-group">
              <label htmlFor="inputStartDate">Week2 Start Date</label>
              <input
                type="date"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week2 Start Date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week2 Manager</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week2 Manager"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week2 Team</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week2 Team"
              />
            </div>
          </div>
          <div className="withRoundedBlueBorder withPadding withBottomGutter">
            <div className="form-group">
              <label htmlFor="inputStartDate">Week3 Start Date</label>
              <input
                type="date"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week3 Start Date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Manager</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week3 Manager"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Team</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week3 Team"
              />
            </div>
          </div>
          <div className="withRoundedBlueBorder withPadding withBottomGutter">
            <div className="form-group">
              <label htmlFor="inputStartDate">Week4 Start Date</label>
              <input
                type="date"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week4 Start Date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Manager</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week4 Manager"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStartDate">Week1 Team</label>
              <input
                type="text"
                className="form-control"
                id="inputStartDate"
                placeholder="Enter Week4 Team"
              />
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Active
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </Col>
    </Row>
  </Container>
);
