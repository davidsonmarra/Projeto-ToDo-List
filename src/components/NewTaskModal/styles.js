import styled from "styled-components";

export const Container = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 1rem 0;
`;

export const Cancel =  styled.button`
  padding: .8rem 2rem;
  border: none;
  background: none;
  color: var(--text-title);
  font-size: 1rem;
  border-radius: 1rem;
  transition: all .2s;
  &:hover {
    background: #33333322;
  }
`;

export const Add = styled.button`
  padding: .8rem 2rem;
  border-radius: 1rem;
  border: none;
  background: var(--buttons);
  color: var(--background);
  font-size: 1rem;
  transition: all .2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Menu = styled.div`
   display: flex;
   margin: 3rem auto;
   flex-direction: column;

`;

export const CampInput = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction: column;

    & label{
      font-size: 1rem;
      margin: 0 0 .5rem 0;
    } 

    & textarea {
      font-family: 'Poppins', sans-serif;
      resize: none;
      height: 7rem;
      padding: .7rem;
      border: none;
      border-radius: .5rem;
      background: #33333322;
    }

    & input {
      padding: .7rem;
      border: none;
      border-radius: .5rem;
      background: #33333322;
    }
`;

export const CampCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerCategory = styled.div`
  .check-category {
    display: none;
  }
`;

export const CategoryCheck = styled.label`
  padding: .5rem 1rem;
  margin: .2rem .2rem 0;
  border-radius: .5rem;
  display: flex;
  background: ${props => props.isCheck ? "#32323233" : ""};
  transition: all .2s;
  & label {
    display: flex;
    :hover {
      cursor: pointer;
    }
  }

  &:hover {
    cursor: pointer;
    background: #33333322;
  }
`;

export const Ball = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 0 .1rem 0 0;
  background-color: ${props => props.color};
`;