import React, { Component } from 'react';
import Map from './Map';
import TaskList from './TaskList';
import PropTypes from 'prop-types';
import Container from '../../components/common/Container';

class View extends Component {
  constructor() {
    super();
    this.state = {
      dateNewer: null,
      dateOlder: null,
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(dateNewer, dateOlder) {
    this.setState({ dateNewer, dateOlder });
  }
  render() {
    return (
      <Container>
        <Map dateNewer={this.state.dateNewer} dateOlder={this.state.dateOlder} />
        <TaskList project={this.props.project} setDate={this.setDate} />
      </Container>
    );
  }
}

View.propTypes = {
  project: PropTypes.string.isRequired,
};

export default View;
