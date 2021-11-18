import styled from 'styled-components';

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

    & input {
      padding: .7rem;
      border: none;
      border-radius: .5rem;
      background: #33333322;
    }

    & .container-color {
      width: 2rem;
      height: 2rem;
      background: ${props => props.color};
      border-radius: 1rem;
    }

    & #color {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
`;
