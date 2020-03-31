import React from "react";
import portal from "../images/portal.svg";

export default () => {
  return (
    <div className="flex flex-wrap items-center mt-12 my-5">
      <h1 className="px-2 minh-1-8 text-3xl font-medium md:w-1/2 lg:w-1/2">
        Hola, soy un desarrollador Javascript Full Stack.
        <br />
        <small className="font-bold">
          Resuelvo problemas creando productos tecnológicos.
        </small>
      </h1>
      <img
        className="px-2 md:w-1/2 lg:w-1/2"
        src={portal}
        alt="Ilustracion de programador"
      />
    </div>
  );
};
