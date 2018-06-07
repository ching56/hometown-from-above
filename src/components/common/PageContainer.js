import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const PageContainer = (props) => (
    <Container>
      {props.children}
    </Container>
  );

export default PageContainer;
