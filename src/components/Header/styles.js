import styled from "styled-components";

export const Container = styled.header`
  max-width: 1300px;
  padding: 0 .5rem;
  margin: 1.5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .button-add {
    transition: all .2s ;
    border-radius: .5rem;
    :hover {
      cursor: pointer;
      background-color: #33333322;
    }
  }
`;

export const Title = styled.h1`
  color: var(--text-title);
`;