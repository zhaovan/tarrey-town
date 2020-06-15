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
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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

const imageStyle = { margin: "auto", width: "25%", borderRadius: "5%" };

const audioArray = [
  startAudio,
  goronAudio,
  gerudoAudio,
  ritoAudio,
  zoraAudio,
  marriedAudio,
];

// const audioArray = document.getElementById("audio_clip");

export class Player extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.state = {
      currentSlide: 0,
      songTime: 0,
      currSong: startAudio,
    };
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  nextSong() {
    let song = this.state.currSong;
    if (this.state.currentSlide < audioArray.length) {
      song = audioArray[this.state.currentSlide + 1];
    }
    this.next();

    this.setState({
      ...this.state,
      currSong: song,
      currentSlide: this.state.currentSlide + 1,
    });
  }

  prevSong() {
    let song = this.state.currSong;
    if (this.state.currentSlide > 0) {
      song = audioArray[this.state.currentSlide - 1];
    }
    this.previous();
    this.setState({
      currSong: song,
      currentSlide: this.state.currentSlide - 1,
    });
  }

  getCurrentTime() {}

  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div style={{ display: "grid" }}>
          <h2 style={{ margin: "auto", padding: "2% 25%", fontSize: "30px" }}>
            Tarrey Town
          </h2>
          <div
            style={{ margin: "auto", textAlign: "center", padding: "3% 25%" }}
          >
            Tarrey Town is a small town from the Legend of Zelda, Breath of the
            Wild. It's started from completing the side quest "From the Ground
            up" in which you build the town (from the ground up) by collecting
            lots and lots of wood. The town grows and changes as you meet with
            different members from different species and the music changes
            dynamically as people are added. Whether it's the strong bassline of
            the Gorons, or the high-pitched notes of the Rito people, this site
            allows you to experience those changes.
          </div>
        </div>

        <Slider {...settings} ref={(c) => (this.slider = c)}>
          <div>
            <div style={slideContainer}>
              <div style={{ margin: "auto" }}>
                The audio below plays the music of the town at the start
              </div>
              <img src={town} alt="" style={imageStyle} />
              {/* <audio
                controls
                // autoplay="true"
                src={startAudio}
                style={audioStyle}
                id="audio_clip"
              ></audio> */}
            </div>
            {/* <button onClick={this.next}>Click to add on the Goron Sound</button> */}
          </div>
          <div>
            <div style={slideContainer}>
              <img src={goronImg} alt="" style={imageStyle} />
              {/* <audio
                controls
                src={goronAudio}
                style={audioStyle}
                id="audio_clip"
              /> */}
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img src={gerudoImg} alt="" style={imageStyle} />
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img src={ritoImg} alt="" style={imageStyle} />
              {/* <audio
                controls
                src={ritoAudio}
                style={audioStyle}
                id="audio_clip"
              ></audio> */}
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img src={zoraImg} alt="" style={imageStyle} />
              {/* <audio
                controls
                src={zoraAudio}
                style={audioStyle}
                id="audio_clip"
              /> */}
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img src={marriedImg} alt="" style={imageStyle} />
              {/* <audio
                controls
                src={marriedAudio}
                style={audioStyle}
                id="audio_clip"
              /> */}
            </div>
          </div>
        </Slider>
        {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div> */}
        <AudioPlayer
          src={this.state.currSong}
          onPlay={(e) => console.log("onPlay")}
          onClickNext={this.nextSong}
          onClickPrevious={this.prevSong}
          showSkipControls="true"
          showJumpControls="false"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        />
      </>
    );
  }
}

export default Player;
