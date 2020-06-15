import React, { Component } from "react";

// import ReactPlayer from "react-player";
// import "./App.css";
import startAudio from "./assets/start.mp3";
import goronAudio from "./assets/goron.mp3";
import ritoAudio from "./assets/rito.mp3";
import gerudoAudio from "./assets/gerudo.mp3";
import zoraAudio from "./assets/zora.mp3";
import marriedAudio from "./assets/married.mp3";
import town from "./assets/img/start_img.png";
// import Stepper from "react-stepper-horizontal";

import Slider from "react-slick";

// Import various image files needed for carousel
import goronImg from "./assets/img/goron.jpeg";
import zoraImg from "./assets/img/zora.jpg";
import ritoImg from "./assets/img/rito.png";
import gerudoImg from "./assets/img/gerudo.png";
import marriedImg from "./assets/img/married.jpg";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideContainer = {
  display: "grid",
};

const audioStyle = {
  margin: "auto",
};

const audioArray = document.getElementById("audio_clip");

export class Player extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      currentSlide: 0,
      songTime: 0,
      //   playing: [false, false, false, false, false, false],
    };
  }

  next() {
    // const currentSongTime = audioArray[this.state.currentSlide].currentTime;
    // const oldSlide = this.state.currentSlide
    // const newSlide = this.state.currentSlide + 1;
    // this.setState({ songTime: currentSongTime, currentSlide: newSlide, playing[oldSlide]: false, playing[newSlide]: true });
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  getCurrentTime() {}

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div style={{ display: "grid" }}>
          <h2 style={{ margin: "auto", padding: "2% 25%" }}>Tarrey Town</h2>
          <div
            style={{ margin: "auto", textAlign: "center", padding: "3% 25%" }}
          >
            Tarrey Town is a small town from the Legend of Zelda, Breath of the
            Wild. It's started from completing the side quest "From the Ground
            up" in which you build the town (from the ground up) by collecting
            lots and lots of wood.
          </div>
        </div>

        <Slider {...settings} ref={(c) => (this.slider = c)}>
          <div>
            <div style={slideContainer}>
              <div style={{ margin: "auto" }}>
                The audio below plays the music of the town at the start
              </div>
              <img
                src={town}
                alt=""
                style={{ margin: "auto", width: "25%", borderRadius: "5%" }}
              />
              <audio
                controls
                // autoplay="true"
                src={startAudio}
                style={audioStyle}
                id="audio_clip"
              ></audio>
            </div>
            {/* <button onClick={this.next}>Click to add on the Goron Sound</button> */}
          </div>
          <div>
            <div style={slideContainer}>
              <img
                src={goronImg}
                alt=""
                style={{ margin: "auto", width: "25%" }}
              />
              <audio
                controls
                src={goronAudio}
                style={audioStyle}
                id="audio_clip"
              />
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img
                src={gerudoImg}
                alt=""
                style={{ margin: "auto", width: "25%" }}
              />
              <audio
                controls
                autoplay={true}
                src={gerudoAudio}
                style={audioStyle}
                id="audio_clip"
              ></audio>
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img
                src={ritoImg}
                alt=""
                style={{ margin: "auto", width: "25%" }}
              />
              <audio
                controls
                src={ritoAudio}
                style={audioStyle}
                id="audio_clip"
              ></audio>
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img
                src={zoraImg}
                alt=""
                style={{ margin: "auto", width: "25%" }}
              />
              <audio
                controls
                src={zoraAudio}
                style={audioStyle}
                id="audio_clip"
              />
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img
                src={marriedImg}
                alt=""
                style={{ margin: "auto", width: "25%" }}
              />
              <audio
                controls
                src={marriedAudio}
                style={audioStyle}
                id="audio_clip"
              />
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Player;
