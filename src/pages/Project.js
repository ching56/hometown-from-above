import React, { Component } from 'react';
import Nav from '../components/Project/Nav';
import View from '../components/Project/View';
import Container from '../components/common/Container';

class Project extends Component {
  constructor() {
    super();
    this.projects = ['南投中正國小', '台南左鎮國中', '台南永康南台科技大學', '太平國小'];
    this.state = {
      project: '南投中正國小',
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
      <Container>
        <Nav setProject={this.setProject} projects={this.projects} active={this.state.project} />
        <View project={this.state.project} />
      </Container>
    );
  }
}

export default Project;