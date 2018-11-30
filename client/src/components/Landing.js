import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Logo from '../images/logo.svg';

class Landing extends Component {
  componentDidUpdate() {
    if (this.props.auth) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <Container style={{ paddingTop: '20px' }}>
        <Card>
          <CardImg top width="100%" src={Logo} alt="Aurea Bootcamp" />
          <CardBody>
            <CardTitle>Login via Google</CardTitle>
            <CardText>Only Aurea.com users are allowed to login.</CardText>
            <a href={'/auth/google'} className="btn btn-secondary">
              Log In
            </a>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
