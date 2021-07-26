import styled from "styled-components";

export const OrderStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    grid-gap: 1rem;
    align-content: start;

    &.menu,
    &.orders {
      grid-column: span 1;
    }
  }

  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.orders {
      grid-column: span 2;
    }
  }
`;

export const PizzaMenuItems = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #1c1c1c;
  padding: 5px;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
  }
  h2 {
    font-size: 15px;
  }

  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: -8px;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 15px;

  input {
    line-height: 25px;
    width: 204px;
  }
`;

export const PizzaContainer = styled.div`
  margin-top: 10px;

  h2 {
    padding: 4px;
  }
`;

export const PizzaPriceButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;
