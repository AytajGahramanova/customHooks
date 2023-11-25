import { useState } from "react";

const useColor = () => {
  const [headerColor, setHeaderColor] = useState("#cbd5e1");

  function yellow() {
    setHeaderColor("#fde047");
  }

  function blue() {
    setHeaderColor("#22d3ee");
  }

  function green() {
    setHeaderColor("#bef264");
  }

  function pink() {
    setHeaderColor("#f0abfc");
  }

  function purple() {
    setHeaderColor("#a78bfa");
  }

  function lightblue() {
    setHeaderColor("#e0f2fe");
  }

  function gray() {
    setHeaderColor("#cbd5e1");
  }

  function brown() {
    setHeaderColor("#d6d3d1");
  }
  return {
    headerColor,
    gray,
    brown,
    yellow,
    blue,
    lightblue,
    green,
    pink,
    purple,
  };
};

export default useColor;
