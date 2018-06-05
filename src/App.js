import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import about from './pages/About';
import project from './pages/Project';
import Container from './components/common/Container';
import uploaderInfo from './pages/UploaderInfo';
import PageContainer from './components/common/PageContainer';
import './style/base';

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 24px;
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
  margin: 0 12px;
`;
const Img = styled.img`
  align-self: center;
  border-radius: 50%;
  margin-right: 12px;
`;
const activeStyle = {
  fontWeight: 'bold',
  backgroundColor: 'lightgray',
  borderRadius: '2px',
};
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 40px 8px; 
`;
const ColContainer = Container.extend`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
`


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
              <StyledNavLink exact activeStyle={activeStyle} to="/">看見</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink activeStyle={activeStyle} to="/about">關於</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink activeStyle={activeStyle} to="/uploader-info">我要上傳空拍照!</StyledNavLink>
            </NavItem>
          </Nav>
        </Header>
        <PageContainer>
          <Route exact path="/" component={project} />
          <Route path="/about" component={about} />
          <Route path="/uploader-info" component={uploaderInfo} />
        </PageContainer>
      </ColContainer>
    </Router>
  </Container>
);

export default App;
