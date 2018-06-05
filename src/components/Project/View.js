import React, { Component } from 'react';
import Map from './Map';
import TaskList from './TaskList';
import PropTypes from 'prop-types';
import Container from '../../components/common/Container';
import Utility from '../../data/Utility';

const U = new Utility();
const ViewContainer = Container.extend`
display: flex;
`;

class View extends Component {
  constructor(props) {
    super(props);
    const project = U.getProject(props.project);
    if (project.length > 1) {
      this.state = {
        newer: project[0],
        older: project[1],
        project,
        projectName: this.props.project,
      };
    } else if (project.length === 1) {
      this.state = {
        newer: project[0],
        older: null,
        project,
        projectName: this.props.project,
      };
    } else {
      this.state = {
        newer: null,
        older: null,
        project,
        projectName: this.props.project,
      };
    }
    this.setDate = this.setDate.bind(this);
  }
  setDate(dateNewer, dateOlder) {
    const newer = this.state.project.filter(d => d.date === dateNewer)[0];
    const older = this.state.project.filter(d => d.date === dateOlder)[0];

    this.setState({ newer, older }, () => console.log(newer, older, this));
  }
  static getDerivedStateFromProps(props, state) {
    let newer;
    let older;
    let isPropsChanged = false;
    if (props.project !== state.projectName) {
      const project = U.getProject(props.project);
      isPropsChanged = true;
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
      return { newer, older, project, projectName: props.project };
    }

    return null;
  }
  render() {
    return (
      <ViewContainer>
        <Map newer={this.state.newer} older={this.state.older} />
        <TaskList project={this.state.project} setDate={this.setDate} />
      </ViewContainer>
    );
  }
}

View.propTypes = {
  project: PropTypes.string.isRequired,
};

export default View;
