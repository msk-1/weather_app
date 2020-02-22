import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";
import PropTypes from "prop-types";

class WeatherList extends React.Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  renderList() {
    return (
      <div className="ui five column grid">
        <div className="column">{oneDayWeather(this.props, 0)}</div>
        <div className="column">{oneDayWeather(this.props, 1)}</div>
        <div className="column">{oneDayWeather(this.props, 2)}</div>
        <div className="column">{oneDayWeather(this.props, 3)}</div>
        <div className="column">{oneDayWeather(this.props, 4)}</div>
      </div>
    )
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const oneDayWeather = (props, num) => {
  const res = props.response[num];
  if (props.response.length != 0) {
    var iconName = "";
    var weatherName = "";
    if (res.weather[0].main == "Clear") {
      iconName = "sun";
      weatherName = "SUNNY";
    } else if (res.weather[0].main == "Clouds") {
      iconName = "cloud";
      weatherName = "CLOUDY";
    } else if (res.weather[0].main == "Rain") {
      iconName = "rain";
      weatherName = "RAINING";
    } else if (res.weather[0].main == "Snow") {
      iconName = "snowflake";
      weatherName = "SNOWY";
    }
    const date = res.dt_txt;
    const time = date.split(" ")[1].substr(0, 5);
    const mmdd =
      date.split(" ")[0].split("-")[1] + "-" + date.split(" ")[0].split("-")[2];
    return (
      <div className="column" key={res.dt}>
        <div className="ui icon header">
          <h1>{weatherName}</h1>
          <br />
          <i className={`icon-right massive ${iconName} icon`} />
          <br />
          {mmdd + " " + time}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { response: state.weathers };
};

WeatherList.propTypes = {
  arrayNum: PropTypes.number
};

export default connect(mapStateToProps, { fetchWeather: fetchWeather })(
  WeatherList
);
