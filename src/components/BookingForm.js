import React from "react";
import { Form, redirect, json } from "react-router-dom";
import classes from "./BookingForm.module.css";
import { useState, useRef } from "react";

function BookingForm({ method, date, onCancel }) {
  const [savedForm, setSavedForm] = useState({});
  const [isSavedForm, setIsSavedForm] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const idDocumentInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const originCityInputRef = useRef();

  const dates = [...date];

  console.log(dates);

  const cancelHandler = () => {
    onCancel(false);
  };

  const dateConverter = (d) => {
    let year = d.toLocaleString("default", { year: "numeric" });
    let month = d.toLocaleString("default", { month: "2-digit" });
    let day = d.toLocaleString("default", { day: "2-digit" });
    let formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  };

  const daysCounter = (dInitial, dEnd) => {
    // To calculate the time difference of two dates
    const difference = Math.abs(dEnd.getTime() - dInitial.getTime());

    // To calculate the no. of days between two dates
    const numberNights = Math.round(difference / (1000 * 3600 * 24) - 1);
    return numberNights;
  };
  const blurHanlder = async (e) => {
    console.log(e.target.value);
    const response = await fetch(
      "http://localhost:8080/user/" + e.target.value
    );
    if (response.status === 200) {
      const data = await response.json();
      setSavedForm(data.user);
      setIsSavedForm(true);
      return;
    }
    setIsSavedForm(false);
  };

  const userSaver = async (m) => {
    const userData = {
      id: idDocumentInputRef.current.value,
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
      originCity: originCityInputRef.current.value,
    };

    if (m === "PATH") {
      const response = await fetch(
        "http://localhost:8080/user/" + idDocumentInputRef.current.value,
        {
          method: m,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), //convert to JSON
        }
      );
      if (!response.ok) {
        throw json({ message: "Error trying to put USER" }, { status: 500 });
      }
    }

    if (m === "POST") {
      const response = await fetch("http://localhost:8080/user/save", {
        method: m,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), //convert to JSON
      });
      if (!response.ok) {
        throw json({ message: "Error trying to post USER" }, { status: 500 });
      }
    }
  };

  const clickHandler = (e) => {
    if (e.target.checked) {
      setIsAgreed(true);
    } else {
      setIsAgreed(false);
    }

    // this stuff checks whether there was an change in the any input of the
    // form that has changed or not
    if (e.target.checked && isSavedForm) {
      if (savedForm.firstName != firstNameInputRef.current.value) {
        userSaver("PUT");
        return;
      }
      if (savedForm.lastName != lastNameInputRef.current.value) {
        userSaver("PUT");
        return;
      }
      if (savedForm.email != emailInputRef.current.value) {
        userSaver("PUT");
        return;
      }
      if (savedForm.phone != phoneInputRef.current.value) {
        userSaver("PUT");
        return;
      }
      if (savedForm.originCity != originCityInputRef.current.value) {
        userSaver("PUT");
        return;
      }
    }
    if (e.target.checked && !isSavedForm) {
      userSaver("POST");
      return;
    }
    userSaver(null);
  };

  const initialDate = dateConverter(dates[0]);
  const endDate = dateConverter(dates[1]);
  // const initialDate = dates[0];
  // const endDate = dates[1];
  const night = daysCounter(dates[0], dates[1]);

  return (
    <>
      <Form method={method} className={classes.form}>
        <p>
          <label htmlFor="checkin">Día de Entrada</label>
          <input
            id="checkin"
            type="date"
            name="checkin"
            required
            value={initialDate}
            readOnly
          />
        </p>
        <p>
          <label htmlFor="checkout">Día de Salida</label>
          <input
            id="checkout"
            type="date"
            name="checkout"
            required
            value={endDate}
            readOnly
          />
        </p>
        <p>
          <label htmlFor="night">Cantidad de Noches </label>
          <input
            id="night"
            type="text"
            name="night"
            required
            value={night}
            readOnly
          />
        </p>
        <br />

        <p>
          <label htmlFor="idDocument">Carnet de Identidad</label>
          <input
            id="idDocument"
            type="text"
            name="idDocument"
            required
            onBlur={blurHanlder}
            ref={idDocumentInputRef}
          />
        </p>
        <p>
          <label htmlFor="firstName">Nombre</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            defaultValue={isSavedForm ? savedForm.firstName : ""}
            ref={firstNameInputRef}
          />
        </p>
        <p>
          <label htmlFor="lastName">Apellido</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            defaultValue={isSavedForm ? savedForm.lastName : ""}
            ref={lastNameInputRef}
          />
        </p>
        <p>
          <label htmlFor="people">Cantidad de personas</label>
          <input id="people" type="text" name="people" required />
        </p>
        <p>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="text"
            name="email"
            required
            defaultValue={isSavedForm ? savedForm.email : ""}
            ref={emailInputRef}
          />
        </p>
        <p>
          <label htmlFor="phone">Telefono Celular</label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            defaultValue={isSavedForm ? savedForm.phone : ""}
            ref={phoneInputRef}
          />
        </p>

        <p>
          <label htmlFor="originCity">Ciudad de Origen</label>
          <input
            id="originCity"
            type="text"
            name="originCity"
            required
            defaultValue={isSavedForm ? savedForm.originCity : ""}
            ref={originCityInputRef}
          />
        </p>
        <p>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            onClick={clickHandler}
          />
          <label htmlFor="agreement">
            Esta de acuerdo con los terminos y condiciones?
          </label>
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          {isAgreed ? <button>Save</button> : null}
        </div>
      </Form>
    </>
  );
}

export default BookingForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  console.log(method);

  const roomData = {
    userId: data.get("idDocument"),
    night: data.get("night"),
    people: data.get("people"),
    checkin: data.get("checkin"),
    checkout: data.get("checkout"),
    email: data.get("email"),
    phone: data.get("phone"),
    originCity: data.get("originCity"),
  };

  let url = "http://localhost:8080/booking/" + params.roomId;

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData), //convert to JSON
  });

  if (!response.ok) {
    throw json({ message: "Whatthe fuck" }, { status: 500 });
  }

  return redirect("/payment/" + data.get("idDocument") + "/" + params.roomId);
}
