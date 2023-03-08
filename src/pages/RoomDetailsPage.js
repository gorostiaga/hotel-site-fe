import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import RoomItem from "../components/RoomItem";
import RoomCalendar from "../components/RoomCalendar";
import Button from "../components/Button";
import { useState } from "react";
import BookingForm from "../components/BookingForm";

function RoomDetailsPage(props) {
  const [date, setDate] = useState([]);

  const [errorDate, setErrorDate] = useState(false);
  const [booking, setBooking] = useState(false);
  const [data, reservation] = useRouteLoaderData("room-details");


  let clickedDate;

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('date[1] es ' + date[1]);
    // console.log('clickedDate es' +clickedDate);

    // the idea of this is to ensure a date range is selected
    if (date[1] !== clickedDate && clickedDate !== undefined) {
      setErrorDate(true);
      return;
    }
    setErrorDate(false);
    setBooking(true);
  };

  const onChangeHandler = (date) => {
    const selectedDate = date;
    setDate((prev) => {
      return date;
    });
    console.log(selectedDate);
  };
  const onClickHandler = (dayClicked) => {
    clickedDate = dayClicked;
    console.log("clickedDate en la func es" + clickedDate);
  };

  const cancelHandler = (isCancel) => {
    setBooking(isCancel);
  };

  return (
    <>
      <RoomItem room={data.room} />
      <form onSubmit={submitHandler}>
        <div>
          <RoomCalendar onChange={onChangeHandler} onClick={onClickHandler} 
            reservation={reservation.schedule}
          />
          {errorDate ? (
            <p>Tienes que seleccionar fecha inicio y fecha de salida</p>
          ) : null}
        </div>
        <Button type="submit" onSubmit={submitHandler}>
          {" "}
          Reservar{" "}
        </Button>
      </form>
      <div>
        {booking ? (
          <BookingForm method="post" date={date} onCancel={cancelHandler} />
        ) : null}
      </div>
    </>
  );
}

export default RoomDetailsPage;

export async function loader({ request, params }) {
  const id = params.roomId;

  return Promise.all([
    fetch("http://localhost:8080/rooms/" + id),
    fetch("http://localhost:8080/rooms/reservation/" + id),
  ])
    .then(
      ([data, reservation]) => Promise.all([data.json(), reservation.json()]),
      (error) => {
        throw json({ message: "No se encuentra su pagina" }, { status: 500 });
      }
    )
    .then(([data, reservation]) => {
      return [data, reservation];
    });
}
