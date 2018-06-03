import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import reset from 'styled-reset';
import about from './pages/About';
import project from './pages/Project';
import uploaderInfo from './pages/UploaderInfo';
import PageContainer from './components/common/PageContainer';

injectGlobal`
  ${reset}
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  height: 100%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Group = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
`;
const Nav = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: space-between;
`;
const NavItem = styled.li`
  padding: 12px;
`;
const Img = styled.img`
  align-self: center;
  border-radius: 50%;
  margin-right: 12px;
`;
const activeStyle = {
  fontWeight: 'bold',
  color: 'red',
};
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;  
`;


const App = () => (
  <Container>
    <Router>
      <Container>
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
      </Container>
    </Router>
  </Container>
);

export default App;
