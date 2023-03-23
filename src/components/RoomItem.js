import React from "react";
import CarouselImages from "./CarouselImages";
import "../css/carousel-images.css";

function RoomItem({ room }) {
  return (
    <article className="article__carousel">
      <div className="carousel__main">
        <CarouselImages images={room.images} />
      </div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
    </article>
  );
}

export default RoomItem;
