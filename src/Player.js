import React, { Component } from "react";
import startAudio from "./assets/start.mp3";
import goronAudio from "./assets/goron.mp3";
import ritoAudio from "./assets/rito.mp3";
import gerudoAudio from "./assets/gerudo.mp3";
import zoraAudio from "./assets/zora.mp3";
import marriedAudio from "./assets/married.mp3";
import town from "./assets/img/start_img.png";
import Stepper from "react-stepper-horizontal";
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

import piano from "./assets/icons/48/piano.png";
import trombone from "./assets/icons/48/trombone.png";
import dulcimer from "./assets/icons/dulcimer.png";
import clarinet from "./assets/icons/clarinet.png";
import guitar from "./assets/icons/48/electric-guitar.png";
import bagpipe from "./assets/icons/bagpipe.png";

const slideContainer = {
  display: "grid",
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

const instrumentArray = [piano, trombone, dulcimer, clarinet, guitar, bagpipe];

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
      currInstruments: [piano],
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
    if (this.state.currentSlide < audioArray.length - 1) {
      song = audioArray[this.state.currentSlide + 1];
    }
    const newSlide = Math.min(
      this.state.currentSlide + 1,
      audioArray.length - 1
    );

    this.next();
    this.setState({
      ...this.state,
      currSong: song,
      currentSlide: newSlide,
    });
  }

  prevSong() {
    let song = this.state.currSong;
    if (this.state.currentSlide > 0) {
      song = audioArray[this.state.currentSlide - 1];
    }

    const newSlide = Math.max(this.state.currentSlide - 1, 0);
    this.previous();
    this.setState({
      currSong: song,
      currentSlide: newSlide,
    });
  }

  getCurrentTime() {}

  render() {
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      draggable: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div style={{ display: "grid" }}>
          <h2 style={{ margin: "auto", padding: "2% 25%", fontSize: "30px" }}>
            Tarrey Town Quest
          </h2>
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "auto",
                //   textAlign: "center",
                padding: "1% 1%",
                backgroundColor: "lightgray",
                borderRadius: "5%",
                width: "35%",
                fontFamily: "Arvo",
              }}
            >
              Tarrey Town is a small town from the Legend of Zelda, Breath of
              the Wild. It's started from completing the side quest "From the
              Ground up" in which you build the town (from the ground up) by
              collecting lots and lots of wood. The town grows and changes as
              you meet with different members from different species and the
              music changes dynamically as people are added. Whether it's the
              strong bassline of the Gorons, or the high-pitched notes of the
              Rito people, this site allows you to experience those changes. Use
              the arrows on the audio player to switch between different
              versions and hear the differences.
            </div>
            <div
              style={{
                margin: "auto",
                width: "33%",
                // backgroundColor: "lightblue",
                // paddingRight: "50px",
              }}
            >
              <h3>(Main) Instruments currently present:</h3>
              <div>
                {instrumentArray.map((val, index) => {
                  if (index <= this.state.currentSlide) {
                    return (
                      <img
                        src={val}
                        alt={val.toString()}
                        style={{
                          width: "48px",
                          color: "black",
                          borderRadius: "5%",
                          margin: "5px",
                          //   backgroundColor: "white",
                        }}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          ref={(c) => (this.slider = c)}
          style={{ paddingTop: "3%" }}
        >
          <div>
            <div style={slideContainer}>
              {/* <div style={{ margin: "auto" }}>
                The audio below plays the music of the town at the start
              </div> */}
              <img src={town} alt="" style={imageStyle} />
            </div>
            {/* <button onClick={this.next}>Click to add on the Goron Sound</button> */}
          </div>
          <div>
            <div style={slideContainer}>
              <img src={goronImg} alt="" style={imageStyle} />
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
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img src={zoraImg} alt="" style={imageStyle} />
            </div>
          </div>
          <div>
            <div style={slideContainer}>
              <img src={marriedImg} alt="" style={imageStyle} />
            </div>
          </div>
        </Slider>

        <div style={{ margin: "1%" }}>
          <Stepper
            steps={[
              { title: "Original Town" },
              { title: "With Goron" },
              { title: "With Gerudo" },
              { title: "With Rito" },
              { title: "With Zora " },
              { title: "Altogether now!" },
            ]}
            activeStep={this.state.currentSlide}
          />
        </div>
        <div>{this.state.currSongTitle}</div>
        <AudioPlayer
          src={this.state.currSong}
          onPlay={(e) => console.log("onPlay")}
          onClickNext={this.nextSong}
          onClickPrevious={this.prevSong}
          showSkipControls="true"
          showJumpControls={false}
          loop="true"
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
