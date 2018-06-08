import React, { Component } from 'react';
import Container from '../components/common/Container';
import Hero from '../images/hero.jpg'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const AboutContainer = Container.extend`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
const Img = styled.img`
  width:100%;
  filter: brightness(0.6);
`
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  height: 60vh;
  align-items: center;
  overflow: hidden;
`
const SloganContainer = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  line-height: 64px;
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 200;
  opacity: 0.8;
  letter-spacing: 5px;
  filter: none;
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 200;
  opacity: 0.8;
  letter-spacing: 5px;
  filter: none;
`

const FeaturesContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 64px;
`
const Features = styled.div`
`

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  margin: 64px;
  display: flex;
  justify-content: center;
`
const StyledButton = styled(Button)`
  &&{
    color: white;
    padding: 12px 48px;
    background-color: blue;
    &:hover {
      background-color: lightblue;
    }
    *{ 
      text-decoration: none;
    }
  }
`

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <ImgContainer>
          <Img src={Hero} />
          <SloganContainer>
            <H1>看見家鄉</H1>
            <H2>記錄家鄉的時空間變化</H2>
          </SloganContainer>
        </ImgContainer>
        <FeaturesContainer>
          <Features>Features</Features>
          <Features>Features</Features>
          <Features>Features</Features>
        </FeaturesContainer>
        <StyledNavlink to="/hometown-from-above">
          <StyledButton size="large">
            啟程
          </StyledButton>
        </StyledNavlink>
      </AboutContainer>
    );
  }
}

export default About;
