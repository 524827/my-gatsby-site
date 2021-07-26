import React, { useState } from "react";

export default function useForm(props) {
    // debugger;
  const [values, setValues] = useState({...props});

  const updateValues = (e) => {
    let { name, value, type } = e.target;

    if (type === "number") {
      value = Number(value);
    }
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, updateValues };
}
