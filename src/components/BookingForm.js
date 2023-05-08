import React, { useReducer, useEffect } from "react";
import { Form, redirect, json } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./BookingForm.module.css";
import { useState, useRef } from "react";
import Alert from 'react-bootstrap/Alert';

const formReducer = (state, action) => {
  switch (action.type) {
    case "IDDOCUMENT_BLUR":
      return {
        ...state,
        isIdDocumentNotEmpty: action.idDocumentVal.trim() !== "",
      };

    case "FIRSTNAME_BLUR":
      return {
        ...state,
        isFirstNameNotEmpty: action.fistNameVal.toString().trim() !== "",
      };

    case "LASTNAME_BLUR":
      return {
        ...state,
        isLastNameNotEmpty: action.lastNameVal.trim() !== "",
      };

    case "PEOPLE_BLUR":
      return {
        ...state,
        isPeopleNotEmppty: action.peopleVal.trim() !== "",
        isPeopleValid: !isNaN(action.peopleVal),
      };

    case "EMAIL_BLUR":
      return {
        ...state,
        isEmailNotEmpty: action.emailVal.trim() !== "",
        isEmailValid: action.emailVal.includes("@"),
      };

    case "PHONE_BLUR":
      return {
        ...state,
        isPhoneNotEmpty: action.phoneVal.trim() !== "",
        isPhoneValid: !isNaN(action.phoneVal),
      };

    case "ORIGINCITY_BLUR":
      return {
        ...state,
        isOriginCityNotEmpty: action.originCityVal.trim() !== "",
      };
    
      case "SAVED_FORM":
        return{
        isIdDocumentNotEmpty: true,
        isFirstNameNotEmpty: true,
        isLastNameNotEmpty: true,
        isEmailNotEmpty: true,
        isEmailValid: true,
        isPhoneNotEmpty: true,
        isPhoneValid: true,
        isOriginCityNotEmpty: true,
        };
    //default state
    default:
      return {
        isIdDocumentNotEmpty: false,
        isFirstNameNotEmpty: false,
        isLastNameNotEmpty: false,
        isPeopleNotEmppty: false,
        isPeopleValid: false,
        isEmailNotEmpty: false,
        isEmailValid: false,
        isPhoneNotEmpty: false,
        isPhoneValid: false,
        isOriginCityNotEmpty: false,
        isFormValid: false,
      };
  }

  // if (action.type === "FORM_SUBMIT") {
  //   console.log("entro a FORM_SUBMIT");
  //   console.log(action.idDocumentVal.trim());
  //   console.log(action.fistNameVal.toString().trim());
  //   //check if the inputs of the forms and the form itself are not empty
  //   // and additionally check that email inpyt and phone input are valid values
  //   return {
  //     isIdDocumentNotEmpty: action.idDocumentVal.trim() !== "",
  //     isFirstNameNotEmpty: action.fistNameVal.toString().trim() !== "",
  //     isLastNameNotEmpty: action.lastNameVal.trim() !== "",
  //     isPeopleNotEmppty: action.peopleVal.trim() !== "",
  //     isPeopleValid: !isNaN(action.peopleVal),
  //     isEmailNotEmpty: action.emailVal.trim() !== "",
  //     isEmailValid: action.emailVal.includes("@"),
  //     isPhoneNotEmpty: action.phoneVal.trim() !== "",
  //     isPhoneValid: !isNaN(action.phoneVal),
  //     isOriginCityNotEmpty: action.originCityVal.trim() !== "",
  //     isFormValid:
  //       state.isIdDocumentNotEmpty &&
  //       state.isFirstNameNotEmpty &&
  //       state.isLastNameNotEmpty &&
  //       state.isPeopleNotEmppty &&
  //       state.isPeopleValid &&
  //       state.isEmailNotEmpty &&
  //       state.isEmailValid &&
  //       state.isPhoneNotEmpty &&
  //       state.isPhoneValid &&
  //       state.isOriginCityNotEmpty,
  //   };
  // }
};

function BookingForm({ method, date, onCancel }) {
  const [savedForm, setSavedForm] = useState({});
  const [isSavedForm, setIsSavedForm] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formState, dispatchForm] = useReducer(formReducer, {
    // idDocumentValue: "",
    // firstNameValue: "",
    // lastNameValue: "",
    // emailValue: "",
    // phoneValue: "",
    // originCityValue: "",
    isIdDocumentNotEmpty: false,
    isFirstNameNotEmpty: false,
    isLastNameNotEmpty: false,
    isPeopleNotEmppty: false,
    isPeopleValid: false,
    isEmailNotEmpty: false,
    isEmailValid: false,
    isPhoneNotEmpty: false,
    isPhoneValid: false,
    isOriginCityNotEmpty: false,
    isFormValid: false,
  });

  const idDocumentInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const peopleInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const originCityInputRef = useRef();

  const dates = [...date];

  console.log(dates);

  useEffect(() => {
    setFormIsValid(
      formState.isIdDocumentNotEmpty &&
        formState.isFirstNameNotEmpty &&
        formState.isLastNameNotEmpty &&
        formState.isPeopleNotEmppty &&
        formState.isPeopleValid &&
        formState.isEmailNotEmpty &&
        formState.isEmailValid &&
        formState.isPhoneNotEmpty &&
        formState.isPhoneValid &&
        formState.isOriginCityNotEmpty
    );
  }, [formState.isIdDocumentNotEmpty,
    formState.isFirstNameNotEmpty,
    formState.isLastNameNotEmpty,
    formState.isPeopleNotEmppty,
    formState.isPeopleValid,
    formState.isEmailNotEmpty,
    formState.isEmailValid,
    formState.isPhoneNotEmpty,
    formState.isPhoneValid,
    formState.isOriginCityNotEmpty
  ]);

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
  const idDocumentBlurHanlder = async (e) => {
    console.log(e.target.value);
    dispatchForm({
      type: "IDDOCUMENT_BLUR",
      idDocumentVal: idDocumentInputRef.current.value,
    });

    const response = await fetch(
      "http://localhost:8080/user/" + e.target.value
    );
    if (response.status === 200) {
      const data = await response.json();
      setSavedForm(data.user);
      setIsSavedForm(true);
      dispatchForm({
        type: "SAVED_FORM",
      });
      return;
    }
    setIsSavedForm(false);
  };

  const firstNameBlurHandler = () => {
    dispatchForm({
      type: "FIRSTNAME_BLUR",
      fistNameVal: firstNameInputRef.current.value,
    });
  };

  const lastNameBlurHandler = () => {
    dispatchForm({
      type: "LASTNAME_BLUR",
      lastNameVal: lastNameInputRef.current.value,
    });
  };

  const peopleBlurHandler = () => {
    dispatchForm({
      type: "PEOPLE_BLUR",
      peopleVal: peopleInputRef.current.value,
    });
  };

  const emailBlurHandler = () => {
    dispatchForm({
      type: "EMAIL_BLUR",
      emailVal: emailInputRef.current.value,
    });
  };

  const phoneBlurHandler = () => {
    dispatchForm({
      type: "PHONE_BLUR",
      phoneVal: phoneInputRef.current.value,
    });
  };

  const originCityBlurHandler = () => {
    dispatchForm({
      type: "ORIGINCITY_BLUR",
      originCityVal: originCityInputRef.current.value,
    });
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

  // const dispatcherUpdater = () => {
  //   return new Promise((resolve) => {
  //     dispatchForm(
  //       {
  //         type: "FORM_SUBMIT",
  //         idDocumentVal: idDocumentInputRef.current.value,
  //         fistNameVal: firstNameInputRef.current.value,
  //         lastNameVal: lastNameInputRef.current.value,
  //         peopleVal: peopleInputRef.current.value,
  //         emailVal: emailInputRef.current.value,
  //         phoneVal: phoneInputRef.current.value,
  //         originCityVal: originCityInputRef.current.value,
  //       },
  //       () => {
  //         resolve();
  //       }
  //     );
  //   });
  // };

  const checkBoxClickHandler = async (e) => {
    if (e.target.checked) {
      setIsAgreed(true);
    } else {
      setIsAgreed(false);
    }

    // this stuff is to check the validity of all the inputs of the form
    // and also the overall validity of the form itself
    // dispatchForm({
    //   type: "FORM_SUBMIT",
    //   idDocumentVal: idDocumentInputRef.current.value,
    //   fistNameVal: firstNameInputRef.current.value,
    //   lastNameVal: lastNameInputRef.current.value,
    //   peopleVal: peopleInputRef.current.value,
    //   emailVal: emailInputRef.current.value,
    //   phoneVal: phoneInputRef.current.value,
    //   originCityVal: originCityInputRef.current.value,
    // });
    // console.log(
    //   formState.isIdDocumentNotEmpty +"\n"+
    //   formState.isFirstNameNotEmpty +"\n"+
    //   formState.isLastNameNotEmpty +"\n"+
    //   formState.isPeopleNotEmppty +"\n"+
    //   formState.isPeopleValid +"\n"+
    //   formState.isEmailNotEmpty +"\n"+
    //   formState.isEmailValid +"\n"+
    //   formState.isPhoneNotEmpty +"\n"+
    //   formState.isPhoneValid +"\n"+
    //   formState.isOriginCityNotEmpty +"\n"+
    //   formState.isFormValid
    // );
    setFormIsValid(formState.isIdDocumentNotEmpty &&
      formState.isFirstNameNotEmpty &&
      formState.isLastNameNotEmpty &&
      formState.isPeopleNotEmppty &&
      formState.isPeopleValid &&
      formState.isEmailNotEmpty &&
      formState.isEmailValid &&
      formState.isPhoneNotEmpty &&
      formState.isPhoneValid &&
      formState.isOriginCityNotEmpty
      );


    // this stuff checks whether there was an change in the any input of the
    // form that has changed or not
    // only if all the inputs from the form are valid
    if (formIsValid) {
      console.log("foisFormValid true");
      if (e.target.checked && isSavedForm) {
        console.log("entra wey");
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
    }
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
        <div>
        <p>
          <label htmlFor="idDocument">Carnet de Identidad</label>
          <input
            id="idDocument"
            type="text"
            name="idDocument"
            required
            onBlur={idDocumentBlurHanlder}
            ref={idDocumentInputRef}
          />
          </p>
          {isAgreed && !formState.isIdDocumentNotEmpty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        </div>
        <div>
        <p>
          <label htmlFor="firstName">Nombre</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            defaultValue={isSavedForm ? savedForm.firstName : ""}
            ref={firstNameInputRef}
            onBlur={firstNameBlurHandler}
          />
          </p>
          {isAgreed && !formState.isFirstNameNotEmpty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        </div>
        <div>
        <p>
          <label htmlFor="lastName">Apellido</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            defaultValue={isSavedForm ? savedForm.lastName : ""}
            ref={lastNameInputRef}
            onBlur={lastNameBlurHandler}
          />
          </p>
          {isAgreed && !formState.isLastNameNotEmpty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        </div>
        <div>
        <p>
          <label htmlFor="people">Cantidad de personas</label>
          <input
            id="people"
            type="text"
            name="people"
            required
            ref={peopleInputRef}
            onBlur={peopleBlurHandler}
          />
          </p>
          {isAgreed && !formState.isPeopleNotEmppty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        {isAgreed && !formState.isPeopleValid && <Alert key="danger" variant="danger">
          Debe ser un número 
        </Alert>}
        </div>
        <div>
        <p>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="text"
            name="email"
            required
            defaultValue={isSavedForm ? savedForm.email : ""}
            ref={emailInputRef}
            onBlur={emailBlurHandler}
          />
          </p>
          {isAgreed && !formState.isEmailNotEmpty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        {isAgreed && !formState.isEmailValid && <Alert key="danger" variant="danger">
          Debe ser un email válido 
        </Alert>}
        </div>
        <div>
        <p>
          <label htmlFor="phone">Telefono Celular</label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            defaultValue={isSavedForm ? savedForm.phone : ""}
            ref={phoneInputRef}
            onBlur={phoneBlurHandler}
          />
          </p>
          {isAgreed && !formState.isPhoneNotEmpty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        {isAgreed && !formState.isPhoneValid && <Alert key="danger" variant="danger">
          Debe ser un teléfono válido
        </Alert>}
        </div>

        <div>
        <p>
          <label htmlFor="originCity">Ciudad de Origen</label>
          <input
            id="originCity"
            type="text"
            name="originCity"
            required
            defaultValue={isSavedForm ? savedForm.originCity : ""}
            ref={originCityInputRef}
            onBlur={originCityBlurHandler}
          />
          </p>
          {isAgreed && !formState.isOriginCityNotEmpty && <Alert key="danger" variant="danger">
          Debes llenar esta casilla 
        </Alert>}
        </div>
        <p>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            onClick={checkBoxClickHandler}
          />
          <label htmlFor="agreement">
            Esta de acuerdo con los terminos y condiciones?
          </label>
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          {isAgreed && formIsValid ? <button>Save</button> : null}
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
