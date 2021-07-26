import styled from 'styled-components';

export const PizzaGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap:4rem;
    grid-auto-rows: auto auto 500px;
`;


export const PizzaStyle = styled.div`
  display: grid;
  grid-gap: 1rem

  
  h2, p{
      margin:0;
      padding: 0;
  }

`
