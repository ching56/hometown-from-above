import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaskContainer = styled.div`
  overflow: auto;
  flex: 1;
  flex-basis: 30%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
class TaskList extends Component {
  constructor(props) {
    super();
    this.state = {
      active: 0,
      comments: [],
      projectName: props.projectName,
    };
    this.setActive = this.setActive.bind(this);
  }
  setActive(key) {
    const newerDate = this.props.project[key].date;
    const olderDate = (key < this.props.project.length - 1) ? this.props.project[key + 1].date : null;
    this.props.setDate(newerDate, olderDate);
    this.setState({
      active: key,
    });
  }
  componentDidMount() {
    const comments = [];
    const commentRef = window.firebaseCommentsRef.child(this.state.projectName);
    commentRef.once('value').then((snapshot) => {
      const val = snapshot.val();
      if (val) {
        const items = Object.keys(val).map(k => val[k]);
        comments.push(...items);
        this.setState({ comments });
      }
    });
  }
  componentDidUpdate(props, state) {
    let comments = [];
    if (props.projectName !== this.state.projectName) {
      const commentRef = window.firebaseCommentsRef.child(this.state.projectName);
      commentRef.once('value').then((snapshot) => {
        const val = snapshot.val();
        if (val) {
          const keys = Object.keys(val);
          comments = keys.map(k => val[k]);
        }
        this.setState({
          comments,
        });
      });
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.projectName !== state.projectName) {
      return {
        projectName: props.projectName,
      };
    }
    return null;
  }
  render() {
    return (
      <TaskContainer>
        {
          this.props.project
            .map((d, i) =>
              (<Task
                click={this.setActive.bind(null, i)}
                key={d.mapID}
                date={d.date}
                comments={this.state.comments && this.state.comments.filter(c => c.date === d.date)}
                primary={this.state.active === i || this.state.active === (i - 1)}
                showTextField={this.state.active === i}
                projectName={this.props.projectName}
              />))
        }
      </TaskContainer>
    );
  }
}

TaskList.propTypes = {
  project: PropTypes.array.isRequired,
  setDate: PropTypes.func.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default TaskList;
