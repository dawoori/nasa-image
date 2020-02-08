import React from "react";
import axios from "axios";
import Image from "./Image";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    images: []
  };

  getImages = async () => {
    const { data: { collection: { items } } } = await axios.get("https://images-api.nasa.gov/search?q=cloud");
    this.setState({ images: items, isLoading: false });
  };

  componentDidMount() {
    this.getImages();
  }

  render() {
    const { isLoading, images } = this.state;
    return (
      <section className="container">
        {isLoading
          ? <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
          : (
            <div className="images">
              {images.map(image => (
                <Image
                  key={image.data[0].nasa_id}
                  nasa_id={image.data[0].nasa_id}
                  date={image.data[0].date_created}
                  title={image.data[0].title}
                  description={image.data[0].description}
                  href={image.links[0].href}
                  keywords={image.data[0].keywords}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
