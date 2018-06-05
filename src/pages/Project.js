import React, { Component } from 'react';
import Nav from '../components/Project/Nav';
import View from '../components/Project/View';
import Container from '../components/common/Container';
import projects from '../data/Projects';

const ProjectContainer = Container.extend`
  width: 100%;
  max-width: 1080px;
  margin-top: 36px;
`

class Project extends Component {
  constructor() {
    super();
    this.projects = projects.list;
    this.state = {
      project: projects.list[0],
    };
    this.setProject = this.setProject.bind(this);
  }
  setProject(project) {
    this.setState({
      project,
    });
  }
  render() {
    return (
      <ProjectContainer>
        <Nav setProject={this.setProject} projects={this.projects} active={this.state.project} />
        <View project={this.state.project} />
      </ProjectContainer>
    );
  }
}

export default Project;