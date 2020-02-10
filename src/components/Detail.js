import React from "react";
import { Link } from "react-router-dom"
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (

        <div className="image_detail">
          <Link to={{ pathname: "/" }}>
            <div className="exit">X</div>
          </Link>
            <img src={location.state.href} alt={location.state.title} title={location.state.title}></img>
          <div>
            <h3 className="image_title">{location.state.title}</h3>
            <h5 className="image_date">{location.state.date}</h5>
            <p className="image_description">{location.state.description}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
