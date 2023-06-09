import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/test_bed.css";
// import "../css/owl.carousel.min.css";
import ArrayBannerDiv from "../components/ArrayBannerDiv";
import CarouselDiv from "../components/CarouselDiv";
import { Link } from "react-router-dom";


function HomePage(props) {
  return (
    <>
      {/* <!-- slider_area_start --> */}
      <div class="slider_area">
        <div>
          <div class="slider_active">
            <div class="carousel_goros">
              <CarouselDiv divs={ArrayBannerDiv} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- slider_area_end --> */}

      {/* <!-- about_area_start --> */}
      <div id="about__section" class="about_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-5">
              <div class="about_info">
                <div class="section_title mb-20px">
                  <span>About Us</span>
                  <h3>
                    A Luxuries Hotel <br />
                    with Nature
                  </h3>
                </div>
                <p>
                  Suscipit libero pretium nullam potenti. Interdum, blandit
                  phasellus consectetuer dolor ornare dapibus enim ut tincidunt
                  rhoncus tellus sollicitudin pede nam maecenas, dolor sem.
                  Neque sollicitudin enim. Dapibus lorem feugiat facilisi
                  faucibus et. Rhoncus.
                </p>
                <a href="#" class="line-button">
                  Learn More
                </a>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7">
              <div class="about_thumb d-flex">
                <div class="img_1">
                  <img src="img/about/about_1.png" alt="" />
                </div>
                <div class="img_2">
                  <img src="img/about/about_2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about_area_end --> */}

      {/* <!-- offers_area_start --> */}
      <div class="offers_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title text-center mb-100">
                <span>Our Offers</span>
                <h3>Ongoing Offers</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-4">
              <div class="single_offers">
                <div class="about_thumb">
                  <img src="img/offers/1.png" alt="" />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults & 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" class="book_now">
                  book now
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-4">
              <div class="single_offers">
                <div class="about_thumb">
                  <img src="img/offers/2.png" alt="" />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults & 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" class="book_now">
                  book now
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-4">
              <div class="single_offers">
                <div class="about_thumb">
                  <img src="img/offers/3.png" alt="" />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults & 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" class="book_now">
                  book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- offers_area_end --> */}

      {/* <!-- video_area_start --> */}
      <div class="video_area video_bg overlay">
        <div class="video_area_inner text-center">
          <span>Montana Sea View</span>
          <h3>
            Relax and Enjoy your <br />
            Vacation{" "}
          </h3>
          <a
            href="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
            class="video_btn popup-video"
          >
            <i class="fa fa-play"></i>
          </a>
        </div>
      </div>
      {/* <!-- video_area_end --> */}

      {/* <!-- about_area_start --> */}
      <div class="about_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7">
              <div class="about_thumb2 d-flex">
                <div class="img_1">
                  <img src="img/about/1.png" alt="" />
                </div>
                <div class="img_2">
                  <img src="img/about/2.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div class="about_info">
                <div class="section_title mb-20px">
                  <span>Delicious Food</span>
                  <h3>
                    We Serve Fresh and <br />
                    Delicious Food
                  </h3>
                </div>
                <p>
                  Suscipit libero pretium nullam potenti. Interdum, blandit
                  phasellus consectetuer dolor ornare dapibus enim ut tincidunt
                  rhoncus tellus sollicitudin pede nam maecenas, dolor sem.
                  Neque sollicitudin enim. Dapibus lorem feugiat facilisi
                  faucibus et. Rhoncus.
                </p>
                <a href="#" class="line-button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about_area_end --> */}

      {/* <!-- features_room_startt --> */}
      <div id="room__section" class="features_room">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title text-center mb-100">
                <span>Featured Rooms</span>
                <h3>Choose a Better Room</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="rooms_here">
          <div class="single_rooms">
            <div class="room_thumb">
              <img src="img/rooms/1.png" alt="" />
              <div class="room_heading d-flex justify-content-between align-items-center">
                <div class="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Superior Room</h3>
                </div>
                {/* <a href="#" class="line-button">
                  book now
                </a> */}
                <Link to={"rooms/1"} className="line-button"> book now</Link>
              </div>
            </div>
          </div>
          <div class="single_rooms">
            <div class="room_thumb">
              <img src="img/rooms/2.png" alt="" />
              <div class="room_heading d-flex justify-content-between align-items-center">
                <div class="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Deluxe Room</h3>
                </div>
                <a href="#" class="line-button">
                  book now
                </a>
              </div>
            </div>
          </div>
          <div class="single_rooms">
            <div class="room_thumb">
              <img src="img/rooms/3.png" alt="" />
              <div class="room_heading d-flex justify-content-between align-items-center">
                <div class="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Signature Room</h3>
                </div>
                <a href="#" class="line-button">
                  book now
                </a>
              </div>
            </div>
          </div>
          <div class="single_rooms">
            <div class="room_thumb">
              <img src="img/rooms/4.png" alt="" />
              <div class="room_heading d-flex justify-content-between align-items-center">
                <div class="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Couple Room</h3>
                </div>
                <a href="#" class="line-button">
                  book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- features_room_end --> */}

      {/* <!-- forQuery_start --> */}
      <div id="contact__section" class="forQuery">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 offset-xl-1 col-md-12">
              <div class="Query_border">
                <div class="row align-items-center justify-content-center">
                  <div class="col-xl-6 col-md-6">
                    <div class="Query_text">
                      <p>Para Reservaciones o Consultas</p>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-6">
                    <div class="phone_num">
                      <a href="#" class="mobile_no">
                        +10 576 377 4789
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- forQuery_end--> */}

      {/* <!-- instragram_area_start --> */}
      <div class="instragram_area">
        <div class="single_instagram">
          <img src="img/instragram/1.png" alt="" />
          <div class="ovrelay">
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="single_instagram">
          <img src="img/instragram/2.png" alt="" />
          <div class="ovrelay">
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="single_instagram">
          <img src="img/instragram/3.png" alt="" />
          <div class="ovrelay">
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="single_instagram">
          <img src="img/instragram/4.png" alt="" />
          <div class="ovrelay">
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="single_instagram">
          <img src="img/instragram/5.png" alt="" />
          <div class="ovrelay">
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- instragram_area_end --> */}

      {/* <!-- footer --> */}
      

      {/* <!-- link that opens popup --> */}

      {/* <!-- form itself end--> */}
      {/* <form id="test-form" class="white-popup-block mfp-hide">
                <div class="popup_box ">
                        <div class="popup_inner">
                            <h3>Check Availability</h3>
                            <form action="#">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <input id="datepicker" placeholder="Check in date"/>
                                    </div>
                                    <div class="col-xl-6">
                                        <input id="datepicker2" placeholder="Check out date"/>
                                    </div>
                                    <div class="col-xl-6">
                                        <select class="form-select wide" id="default-select" >
                                            <option data-display="Adult">1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-6">
                                        <select class="form-select wide" id="default-select" >
                                            <option data-display="Children">1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12">
                                        <select class="form-select wide" id="default-select" >
                                            <option data-display="Room type">Room type</option>
                                            <option value="1">Laxaries Rooms</option>
                                            <option value="2">Deluxe Room</option>
                                            <option value="3">Signature Room</option>
                                            <option value="4">Couple Room</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12">
                                        <button type="submit" class="boxed-btn3">Check Availability</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </form> */}
      {/* <!-- form itself end --> */}
    </>
  );
}

export default HomePage;
