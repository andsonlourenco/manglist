import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: aside;
  background-color: #fff;
  border-right: 1px solid #eee;
  height: calc(100vh - 63px);

  ul{
    margin-top: 1rem;

    li {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;

    transition: all 0.1s;

    &:hover {
      background-color: var(--background);
    }

    &:before{
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      background-color: #5D4CE5;
    }

    a {
      padding-left: 1.5rem;
      color: var(--text);
      width: 100%;
    }
  }
  }
`;