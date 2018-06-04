import React, { Component } from 'react';
import Map from './Map';
import TaskList from './TaskList';
import PropTypes from 'prop-types';
import Container from '../../components/common/Container';
import Utility from '../../data/Utility';

const U = new Utility();

class View extends Component {
  constructor(props) {
    super(props);
    const project = U.getProject(props.project);
    if (project.length > 1) {
      this.state = {
        newer: project[0],
        older: project[1],
      };
    } else if (project.length === 1) {
      this.state = {
        newer: project[0],
        older: null,
      };
    } else {
      this.state = {
        newer: null,
        older: null,
      };
    }
    this.setDate = this.setDate.bind(this);
  }
  setDate(dateNewer, dateOlder) {
    this.setState({ dateNewer, dateOlder });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let newer;
    let older;
    if (prevState !== nextProps) {
      const project = U.getProject(nextProps.project);
      if (project.length > 1) {
        newer = project[0];
        older = project[1];
      } else if (project.length === 1) {
        newer = project[0];
        older = null;
      } else {
        newer = null;
        older = null;
      }
    } else {
      return null;
    }
    return{
      newer,older,
    };
  }
  render() {
    return (
      <Container>
        <Map newer={this.state.newer} older={this.state.older} />
        <TaskList project={this.props.project} setDate={this.setDate} />
      </Container>
    );
  }
}

View.propTypes = {
  project: PropTypes.string.isRequired,
};

export default View;
