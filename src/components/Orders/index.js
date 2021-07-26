import React from "react";
import Img from "gatsby-image";

import useForm from "../../utils/useForm";
import calculatePizzaPrice from "../../utils/calculatePizzaPrice";

import {
  InfoContainer,
  OrderStyled,
  PizzaMenuItems,
  PizzaPriceButtons,
} from "./StyledComponent";
import formateMoney from "../../utils/formateMoney";
import { usePizza } from "../../utils/usePizza";
import PizzaOrder from "./components/PizzaOrder";

const Orders = ({ data }) => {
  // debugger
  const {values, updateValues} = useForm({
    name: "",
    email: "",
  });

  const {orders, addToOrder, removeFromOrder} = usePizza({pizzas: data.pizzas.nodes,inputs: values});

  return (
    <OrderStyled>
      <fieldset>
        <legend>Your Info</legend>
        <InfoContainer>
          {/*  */}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={values?.name}
            onChange={updateValues}
          ></input>
        </InfoContainer>
        <InfoContainer>
          {/* <legend>Your Info</legend> */}
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={values?.email}
            onChange={updateValues}
          ></input>
        </InfoContainer>
      </fieldset>
      <fieldset className="menu">
        <legend>Menu</legend>
        {data.pizzas.nodes.map((pizza) => {
          return (
            <PizzaMenuItems>
              <Img width="50" height="50" fluid={pizza.image.fluid} />
              <h2>{pizza.name}</h2>
              <PizzaPriceButtons>
                {["S", "M", "L"].map((size) => {
                  return (
                    <button type="button" onClick={()=>addToOrder({id: pizza.id, size})}>
                      {size}{" "}
                      {formateMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  );
                })}
              </PizzaPriceButtons>
            </PizzaMenuItems>
          );
        })}
      </fieldset>
      <fieldset className="orders">
        <legend>Orders</legend>
        <PizzaOrder order={orders}  pizzas={data.pizzas} removeFromOrder={removeFromOrder}/>
      </fieldset>
    </OrderStyled>
  );
};

export default Orders;
