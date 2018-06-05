import React, { Component } from 'react';
import Container from '../common/Container';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskContainer = Container.extend`
flex: 0;
flex-basis: 50%;
display: flex;
flex-direction: column;
`;
class TaskList extends Component {
  constructor() {
    super();
    this.setActive = this.setActive.bind(this);
    this.state = {
      active: 0,
    };
  }
  setActive(key) {
    const newerDate = this.props.project[key].date;
    const olderDate = (key < this.props.project.length - 1) ? this.props.project[key + 1].date : null;
    this.props.setDate(newerDate, olderDate);
    this.setState({
      active: key,
    });
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
                primary={this.state.active === i || this.state.active === (i - 1)}
              />))
        }
      </TaskContainer>
    );
  }
}

TaskList.propTypes = {
  project: PropTypes.array,
  setDate: PropTypes.func,
};

export default TaskList;
