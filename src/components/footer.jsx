import React, { useState } from "react";
import Social from "./icons/social";
import { useForm } from "react-hook-form";

export default () => {
  const [formResponse, setFormResponse] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const handleResponse = res => setFormResponse(res);
  const onSubmit = data => {
    const options = {
      default: "omit",
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    fetch("https://formspree.io/mwkbvrgb", options).then(res => {
      if (res.status >= 200 && res.status < 400) {
        handleResponse("SUCCESS");
      } else {
        handleResponse("ERROR");
      }
    });
  };
  return (
    <footer id="footer" className="footer">
      <Social />
      <div className="footer-card">
        <form
          action="https://formspree.io/mwkbvrgb"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label htmlFor="name" className="footer-label">
              Nombre
            </label>
            <input
              type="text"
              ref={register({
                required: "Required",
                minLength: 3
              })}
              name="name"
              placeholder="Maria Alejandra"
              className="footer-input focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <>
                <br />
                <small className="w-full text-red-700">Campo requerido.</small>
              </>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="footer-label">
              Email
            </label>
            <input
              type="text"
              ref={register({
                required: "Required",
                validator: {
                  regEx: "Email no es valido",
                  value:
                    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
                }
              })}
              name="email"
              placeholder="marialejandra@gmail.com"
              className="footer-input focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <>
                <br />
                <small className="w-full text-red-700">Campo requerido.</small>
              </>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="footer-label">
              Mensaje
            </label>
            <textarea
              type="text"
              ref={register({
                required: "Required",
                minLength: 15
              })}
              name="message"
              placeholder="Buenas, para pedir informacion sobre ..."
              className="footer-input focus:outline-none focus:shadow-outline"
            />
            {errors.message && (
              <>
                <br />
                <small className="w-full text-red-700">Campo requerido.</small>
              </>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="footer-button focus:outline-none hover:bg-indigo-400 hover:border-indigo-400 hover:text-white"
            >
              Enviar
            </button>
          </div>
          {formResponse && formResponse !== "ERROR"
            ? "Su mensaje fue enviado, Gracias..."
            : ""}
        </form>
      </div>
    </footer>
  );
};
