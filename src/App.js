import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    images: []
  };

  componentDidMount() {
    const images = axios.get("https://images-api.nasa.gov/search?q=cloud");
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "ready"}
      </div>
    );
  }
}

export default App;
