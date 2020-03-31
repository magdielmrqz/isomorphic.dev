import React from "react";
import Not from "../images/404.svg";

export default () => (
  <>
    <h1 data-testid="not-found">NOT FOUND</h1>
    <img src={Not} alt="No se encontro el la pagina solicitada" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);
