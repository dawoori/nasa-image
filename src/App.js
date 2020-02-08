import React from "react";
import axios from "axios";
import Image from "./Image";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    images: [],
    renderingImages: [],
    api: "https://images-api.nasa.gov/search?q=cloud",
    searchWord: "cloud"
  };

  getImages = async () => {
    console.log("getting");
    const { api } = this.state;
    const { data: { collection: { items } } } = await axios.get(api);
    this.setState({ images: items, isLoading: false });
  };

  componentDidMount() {
    this.getImages();
  };
  
  search = (e) => {
    e.preventDefault();
    var { searchWord } = this.state;
    // eslint-disable-next-line
    this.state.api = "https://images-api.nasa.gov/search?q=" + searchWord;
    this.setState({ isLoading: true });
    this.getImages();
  };
  
  textInput = (e) => {
    this.setState({ searchWord: e.target.value });
  };
  
  render() {
    const { isLoading, images } = this.state;

    return (
      <section className="container">
        <div className="search">
          <form onSubmit={this.search}>
            <input className="searchInput" type="text" value={this.state.searchWord} onChange={this.textInput} placeholder="검색어 입력" />
            <button type="submit">Search</button>
          </form>
          <button onClick={() => console.log()}>more</button>
        </div>

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
