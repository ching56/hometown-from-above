import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import about from './pages/About';
import project from './pages/Project';
import Container from './components/common/Container';
import uploaderInfo from './pages/UploaderInfo';
import PageContainer from './components/common/PageContainer';
import './style/base';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDW0NLjaYlW4ce9Ny-TPuP5FezdkA0hQJE',
  authDomain: 'hometown-from-above.firebaseapp.com',
  databaseURL: 'https://hometown-from-above.firebaseio.com',
  projectId: 'hometown-from-above',
  storageBucket: 'hometown-from-above.appspot.com',
  messagingSenderId: '1064918437602',
};

firebase.initializeApp(config);
window.firebaseCommentsRef = firebase.database().ref().child('comments');

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;
const Group = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items:center;
`;
const Nav = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.li`
  margin: 24px;
`;
const Img = styled.img`
  align-self: center;
  border-radius: 50%;
  margin-right: 12px;
`;
const activeStyle = {
  fontWeight: 'bold',
  color: 'blue',
  borderRadius: '4px',
};
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  word-break: keep-all;
`;
const ColContainer = Container.extend`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;


const App = () => (
  <Container>
    <Router>
      <ColContainer>
        <Header>
          <Group>
            <Img src="http://via.placeholder.com/50x50" alt="logo" />
            <h1>看見家鄉</h1>
          </Group>
          <Nav>
            <NavItem>
              <StyledNavLink exact activeStyle={activeStyle} to="/hometown-from-above">看見</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink activeStyle={activeStyle} to="/hometown-from-above/about">關於</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink activeStyle={activeStyle} to="/hometown-from-above/uploader-info">我要上傳空拍照!</StyledNavLink>
            </NavItem>
          </Nav>
        </Header>
        <PageContainer>
          <Route exact path="/hometown-from-above" component={project} />
          <Route path="/hometown-from-above/about" component={about} />
          <Route path="/hometown-from-above/uploader-info" component={uploaderInfo} />
        </PageContainer>
      </ColContainer>
    </Router>
  </Container>
);

export default App;
