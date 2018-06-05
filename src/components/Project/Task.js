import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper) `
  margin: ${props => (props.primary ? 'initial' : '12px')};
  cursor: ${props => (props.primary ? 'initial' : 'pointer')};
  /* transition: 0.1s; */
  &:hover {
    transform: ${props => (props.primary ? 'initial' : 'scale(1.05)')};
  }
`;

const TaskContainer = styled.div`
  padding: 24px;
  margin: 12px;
  border-radius: 12px;
  opacity: 0.7;
  /* trantion: 0.5s; */
  ${ props => props.primary && css`
    font-weight:: 700;
    font-size: 24px;
    opacity: 1;
  `}
`;
const CommentContainer = styled.ul`
  margin-top: 12px;
  padding: 0;
`;
const Comment = styled.li`
  font-size: initial;
  font-weight: initial;
`

class Task extends Component {
  render() {
    return (
      <StyledPaper onClick={this.props.click} elevation={this.props.primary ? 2 : 1} primary={this.props.primary?1:0}>
        <TaskContainer primary={this.props.primary}>
          {this.props.date}
          <CommentContainer>
            <Comment>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Comment>
          </CommentContainer>
        </TaskContainer>
      </StyledPaper>
    );
  }
}

export default Task;
