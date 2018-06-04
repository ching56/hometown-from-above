import React, { Component } from 'react';
import Nav from '../components/Project/Nav';
import View from '../components/Project/View';
import Container from '../components/common/Container';
import projects from '../data/Projects';

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
    console.log(project)
    this.setState({
      project,
    });
  }
  render() {
    return (
      <Container>
        <Nav setProject={this.setProject} projects={this.projects} active={this.state.project} />
        <View project={this.state.project} />
      </Container>
    );
  }
}

export default Project;