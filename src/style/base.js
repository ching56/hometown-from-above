
import reset from 'styled-reset';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  ${reset}
`;

injectGlobal`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  * {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif !important; 
    box-sizing: border-box;
  }
`;
