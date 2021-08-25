import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 80vh;

  & ul {
    list-style: none;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .button-add {
    transition: all .2s ;
    border-radius: .5rem;
    :hover {
      cursor: pointer;
      background-color: #33333322;
    }
  }
  }
  & iframe {
    bottom: 0;
    transform: translateX(-15%);
    position: fixed;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  & div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 0 .5rem 0 0;
    background-color: ${props => props.color};
  }

  & span {
    font-size: 1.25rem;
  }
  
  :hover {
    background: #33333322;
    border-radius: 1rem;
  }
`;