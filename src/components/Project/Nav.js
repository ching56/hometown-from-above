import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ItemGroup = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 12px;
  opacity: 0.6;
  transition: 0.1s;
  &:hover {
    opacity: 0.9;
  }
`;

const FocusedItem = styled.li`
  font-size: 24px;
  font-weight: 500;
  padding: 12px;
  opacity: 0.6;
`;

const Nav = (props) => (
    <ItemGroup>
      <FocusedItem>看見 {props.active}</FocusedItem>
      {
        props.projects &&
        props.projects
          .filter(d => d !== props.active)
          .map((d, i) => <Item key={d}><Button onClick={props.setProject.bind(null, d)}>{d}</Button></Item>)
      }
    </ItemGroup>
  );

Nav.propTypes = {
  setProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
};

export default Nav;
