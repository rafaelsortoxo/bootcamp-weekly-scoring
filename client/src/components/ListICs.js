import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

class ListICs extends Component {
  render() {
    return [
      <div key={'BootcampersList'} className={this.props.className}>
        ListICs
        <div>
          <input type="text" className="form-control" placeholder="type name" />
        </div>
        <Row>
          <Col>
            <h6>Name1 LastName1</h6>
            <div style={{ paddingLeft: '15px' }}>Week 1</div>
            <div style={{ paddingLeft: '15px' }}>Week 2</div>
            <div style={{ paddingLeft: '15px' }}>Week 3</div>
            <div style={{ paddingLeft: '15px' }}>Week 4</div>
          </Col>
        </Row>
        <Row>
          <Col>Name2</Col>
        </Row>
        <Row>
          <Col>Name3</Col>
        </Row>
      </div>,
      <div key={'managedBy'} className={this.props.className}>
        Managers and SEMs List
        <div>
          <input type="text" className="form-control" placeholder="type name" />
        </div>
        <Row>
          <Col>
            <h6>Manager1</h6>
          </Col>
        </Row>
        <Row>
          <Col>Manager2</Col>
        </Row>
        <Row>
          <Col>SEM1</Col>
        </Row>
        <Row>
          <Col>SEM2</Col>
        </Row>
        <Row>
          <Col>SEM3</Col>
        </Row>
      </div>
    ];
  }
}

function mapStateToProps({ candidates }) {
  return { candidates };
}

export default connect(mapStateToProps)(ListICs);
