import React from 'react';
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`

const PageContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default PageContainer;