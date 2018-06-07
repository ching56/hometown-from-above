import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const StyledPaper = styled(Paper)`
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
  ${props => props.primary && css`
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
  padding-top: 8px;
  margin-left: 20px;
  list-style: decimal;
`;
const EmptyTask = styled.li`
  list-style: none;
  font-size: initial;
  font-weight: normal;
  padding-top: 8px;
  opacity: 0.8;
`

class Task extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {
      loading: false,
      newComment: [],
    };
  }
  submit(ev) {
    if (ev.key === 'Enter') {
      const ref = window.firebaseCommentsRef.child(this.props.projectName);
      const CommentItem = {
        date: this.props.date,
        content: ev.target.value,
      }
      this.setState({
        loading: true,
      });
      ref.push().set(CommentItem, () => this.setState({ 
        loading: false,
        newComment: [...this.state.newComment, CommentItem]
       }));
      ev.target.value = '';
      ev.preventDefault();
    }
  }
  render() {
    return (
      <StyledPaper onClick={this.props.click} elevation={this.props.primary ? 2 : 1} primary={this.props.primary ? 1 : 0}>
        <TaskContainer primary={this.props.primary}>
          {this.props.date}
          <CommentContainer>
            {this.props.comments.map((d, i) => (
              <Comment key={i}>
                  {d.content}
                </Comment>
              ))}
            {this.state.newComment.map((d, i) => (
              <Comment key={`new${i}`}>
                {d.content}
              </Comment>
            ))}
            {
              (this.props.comments.length === 0 &&
              this.state.newComment.length === 0) &&
              <EmptyTask>沒有人看見這段時間的變化😔</EmptyTask>
            }
          </CommentContainer>
          {
            this.props.showTextField &&
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Fade
                  in={this.state.loading}
                  style={{
                    transitionDelay: this.state.loading ? '800ms' : '0ms',
                  }}
                  unmountOnExit
                >
                  <CircularProgress size={20} />
                </Fade>
              </Grid>
              <Grid item>
                <TextField
                  onKeyPress={this.submit}
                  autoFocus
                  label="我看見了👀"
                  margin="normal"
                />
              </Grid>
            </Grid>
          }
        </TaskContainer>
      </StyledPaper>
    );
  }
}

Task.propTypes = {
  click: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectName: PropTypes.string.isRequired,
  showTextField: PropTypes.bool.isRequired,
};


export default Task;
