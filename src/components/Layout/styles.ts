import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template:  
    "header header"
    "aside content" / 250px 1fr;
`;