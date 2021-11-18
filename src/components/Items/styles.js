import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 20rem;
  height: 10rem;
  background: var(--background-card);
  padding: 1.25rem;
  margin: 0 1rem 1rem;
  border-radius: 1rem;
  overflow-y: auto;
  position: relative;
  display: ${props => props.checkboxIsCheck && props.hideTasksDone ? "none" : "flex"};
  justify-content: space-between;
  flex-direction: column;

  & .footer {
    width: calc(100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .checkbox {
    width: 20px;
    height: 20px;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 1px solid #333;
    transition: all .2s;
    :hover {
      cursor: pointer;
    }
    svg {
      transition: opacity .2s;
      opacity: 0;
    }
  }
  & .checked {
    background: var(--check);
    svg {
      opacity: 1;
    }
  }

  & input {
    display: none;
  }
`;

export const Title = styled.h2`
  transition: all .2s;
  text-decoration: ${props => props.checkboxIsCheck ? "line-through" : ""};
`;

export const Text = styled.p`
  transition: all .2s;
  text-decoration: ${props => props.checkboxIsCheck ? "line-through" : ""};
`;

export const Categories = styled.div`
  display: flex;
`;

export const UserOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & .delete {
    transition: all .2s;
    margin: 0 0 0 .2rem;
    border-radius: .5rem;
    :hover {
      cursor: pointer;
      background: #33333322;
    }
  }
`;

export const Colors = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 0 .5rem 0 0;
    background-color: ${props => props.color};

`;