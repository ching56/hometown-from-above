import React, { Component } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  padding: 24px;
  margin: 12px;
  border: ${props => (props.primary ? '1px solid rgba(0,0,0,0.5)' : '')};
  border-radius: 12px;
`;
class Task extends Component {
  render() {
    return (
      <button onClick={this.props.click}>
        <TaskContainer primary={this.props.primary}>
          {this.props.date}
        </TaskContainer>
      </button>

    );
  }
}

export default Task;
