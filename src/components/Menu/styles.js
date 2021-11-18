import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  position: relative;

  & .hide-tasks {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ;
    border-radius: .5rem;
    :hover {
      cursor: pointer;
      background-color: #33333322;
    }
  }

  & ul {
    height: 45vh;
    width: 12rem;
    overflow-y: auto;
    list-style: none;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .category-container {
      position: absolute;
      bottom: 0;
      transform: translateY(150%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    & .button-add, & .delete {
      transition: all .2s ;
      border-radius: .5rem;
      :hover {
        cursor: pointer;
        background-color: #33333322;
      }
    }

    & .delete {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  & img {
    bottom: 0;
    transform: translateX(0%);
    position: fixed;
  }
`;

export const CategoryContent = styled.div`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  background: ${props => props.isSelected ? "#33333315" : "none"};
  & div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 0 .5rem 0 0;
    background-color: ${props => props.color};
  }

  & span {
    width: 6.4rem;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  :hover {
    cursor: pointer;
    background: #33333322;
    border-radius: 1rem;
  }
`;