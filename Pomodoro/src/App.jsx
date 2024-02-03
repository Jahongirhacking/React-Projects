import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import pomodoroLogo from "./assets/pomodoro.png";

const initialState = {
  break: 5,
  session: 25,
  status: "Session",
  timer: 25 * 60,
  active: false,
  intervalId: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.secondsToClockTime = this.secondsToClockTime.bind(this);
    this.padZero = this.padZero.bind(this);
    this.reset = this.reset.bind(this);
    this.decreaseBreak = this.decreaseBreak.bind(this);
    this.increaseBreak = this.increaseBreak.bind(this);
    this.decreaseSession = this.decreaseSession.bind(this);
    this.increaseSession = this.increaseSession.bind(this);
    this.recalculateTimer = this.recalculateTimer.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.playOrStop = this.playOrStop.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
  }

  padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  secondsToClockTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${this.padZero(minutes)}:${this.padZero(
      remainingSeconds
    )}`;
    return formattedTime;
  }

  reset = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
    this.setState({
      ...initialState,
    });
    const audio = document.getElementById("beep");
    this.stopAudio(audio);
  };

  playAudio = (audio) => {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };

  stopAudio = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  };

  playOrStop = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: null,
        active: false,
      });
    } else {
      const intervalId = setInterval(() => {
        if (this.state.timer === 0) {
          const audio = document.getElementById("beep");
          this.playAudio(audio);
          this.toggleStatus();
          this.recalculateTimer();
          return;
        }
        this.setState((state) => ({
          timer: state.timer - 1,
        }));
      }, 1000);
      this.setState({
        active: true,
        intervalId,
      });
    }
  };

  toggleStatus = () => {
    this.setState((state) => ({
      status: state.status === "Session" ? "Break" : "Session",
    }));
  };

  recalculateTimer = () => {
    this.setState((state) => ({
      timer: state[state.status.toLowerCase()] * 60,
    }));
  };

  decreaseBreak = () => {
    if (this.state.active || this.state.break <= 1) return;
    this.setState((state) => ({
      break: state.break - 1,
    }));
    if (this.state.status === "Break") this.recalculateTimer();
  };

  increaseBreak = () => {
    if (this.state.active || this.state.break >= 60) return;
    this.setState((state) => ({
      break: state.break + 1,
    }));
    if (this.state.status === "Break") this.recalculateTimer();
  };

  decreaseSession = () => {
    if (this.state.active || this.state.session <= 1) return;
    this.setState((state) => ({
      session: state.session - 1,
    }));
    if (this.state.status === "Session") this.recalculateTimer();
  };

  increaseSession = () => {
    if (this.state.active || this.state.session >= 60) return;
    this.setState((state) => ({
      session: state.session + 1,
    }));
    if (this.state.status === "Session") this.recalculateTimer();
  };

  render() {
    return (
      <>
        <div className="container">
          <img className="pomodoro-img" src={pomodoroLogo} alt="pomodoro-img" />
          <div className="length">
            {/* BREAK */}
            <div className="length-control break">
              <div id="break-label">Break Length</div>
              <div className="control">
                <button id="break-decrement" onClick={this.decreaseBreak}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <span id="break-length">{this.state.break}</span>
                <button id="break-increment" onClick={this.increaseBreak}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </button>
              </div>
            </div>

            {/* SESSION */}
            <div className="length-control session">
              <div id="session-label">Session Length</div>
              <div className="control">
                <button id="session-decrement" onClick={this.decreaseSession}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <span id="session-length">{this.state.session}</span>
                <button id="session-increment" onClick={this.increaseSession}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </button>
              </div>
            </div>
          </div>

          {/* TIMER */}
          <div className="timer-container">
            <div id="timer-label">{this.state.status}</div>
            <h1
              id="time-left"
              className={this.state.timer <= 60 ? "alert" : ""}
            >
              {this.secondsToClockTime(this.state.timer)}
            </h1>
          </div>

          {/* START STOP */}
          <div className="timer-controls">
            <button id="start_stop" onClick={this.playOrStop}>
              {this.state.active ? "Pause" : "Start"}
            </button>
            <button id="reset" onClick={this.reset}>
              Reset
            </button>
          </div>
          <audio
            id="beep"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
          />
        </div>
        <span className="author">
          by <a href="https://jahongirhacking.netlify.app/">Jahongir Hayitov</a>
        </span>
      </>
    );
  }
}

export default App;
