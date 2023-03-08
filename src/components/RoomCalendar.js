import React, { useEffect } from "react";
import Calendar from "react-calendar";

import "./RoomCalendar.module.css";
import classes from "./RoomCalendar.module.css";
import "react-calendar/dist/Calendar.css";

function RoomCalendar(props) {
  let reservedDatesArray = [];

  const onChangeHandler = (datesSelected) => {
    props.onChange(datesSelected);
  };

  const onClickHandler = (daySelected) => {
    props.onClick(daySelected);
  };

  const parseDate = (input) => {
    let parts = input.split("-");

    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based
  };

  const getDatesFromRage = (startDateString, endDateString) => {
    let dateArray = [];
    const startDate = parseDate(startDateString);
    const endDate = parseDate(endDateString);
    startDate.setDate(startDate.getDate() + 1);
    while (startDate < endDate) {
      dateArray.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    return dateArray;
  };

  const getAllReservedDates = (dates) => {
    dates.map((reservedDate) => {
      let arrayDates = getDatesFromRage(
        reservedDate.startDate,
        reservedDate.endDate
      );
      arrayDates.map((singleDate) => {
        reservedDatesArray.push(new Date(singleDate));
      });
    });
  };

  const dateConverter = (d) => {
    let year = d.toLocaleString("default", { year: "numeric" });
    let month = d.toLocaleString("default", { month: "2-digit" });
    let day = d.toLocaleString("default", { day: "2-digit" });
    let formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  };

  // useEffect(() => {
  //   getAllReservedDates(props.reservation);
  // },[]);

  getAllReservedDates(props.reservation);


  const defineDisabled = (year, month, day) => {    
    let isDisabled; 

    for(const reservedDate of reservedDatesArray) {
      let reservedDateString = dateConverter(reservedDate);      
      let partsDate = reservedDateString.split("-");      
      console.log(partsDate[0]+ '-' + +partsDate[1]+ '-' +partsDate[2]);
      console.log('original ' + year + '-' + month + '-' +day);
      isDisabled = year === +partsDate[0] && month === +partsDate[1] && day === +partsDate[2];
    //   if (isDisabled) {
    //     console.log('es igual!!');
    //     return; 
    // }
    isDisabled = year === +partsDate[0] && month === +partsDate[1] && day === +partsDate[2];
      if (isDisabled) {
        console.log('es igual!!');
        break; 
      }
    };
    return isDisabled;

  };

  return (
    <div className={classes.calendarContainer}>
      <Calendar
        onChange={onChangeHandler}
        onClickDay={onClickHandler}
        minDate={new Date()}
        selectRange={true}
        minDetail="month"
        next2Label={null}
        prev2Label={null}
        formatLongDate={(date) =>
          new Intl.DateTimeFormat({
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(date)
        }
        tileDisabled={({ date }) =>
          defineDisabled(date.getFullYear(), date.getMonth() +1 , date.getDate())
        }
      />
    </div>
  );
}

export default RoomCalendar;
