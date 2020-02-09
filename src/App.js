import React from "react";
import axios from "axios";
import Image from "./Image";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    images: [],
    num: 10,
    api: "https://images-api.nasa.gov/search?q=cloud",
    searchOption: "q",
    searchWord: "cloud"
  };

  getImages = async () => {
    const { api } = this.state;
    const { data: { collection: { items } } } = await axios.get(api);
    this.setState({ images: items, isLoading: false });
  };

  cutImages = () => {
    const { images } = this.state;
    this.setState({ renderingImages: images.slice(0, 10) });
  }

  componentDidMount() {
    this.getImages();
  };

  search = (e) => {
    e.preventDefault();
    var { searchWord, searchOption } = this.state;
    // eslint-disable-next-line
    this.state.api = "https://images-api.nasa.gov/search?" + searchOption + "=" + searchWord;
    this.setState({ isLoading: true });
    this.getImages();
  };

  textInput = (e) => {
    this.setState({ searchWord: e.target.value });
  };

  searchOption = (e) => {
    this.setState({ searchOption: e.target.value });
  };

  render() {
    const { isLoading, images, num } = this.state;
    return (
      <section className="container">
        <div className="search">
          <form onSubmit={this.search}>
            <select name="search_option" onChange={this.searchOption}>
              <option value="q">전체</option>
              <option value="description">Description</option>
              <option value="title">Title</option>
            </select>
            <input className="searchInput" type="text" value={this.state.searchWord} onChange={this.textInput} placeholder="검색어 입력" />
            <button type="submit">Search</button>
          </form>
        </div>

        {isLoading
          ? <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
          : (
            <div className="images">
              {images.slice(0, num).map(image => (
                <Image
                  key={image.data[0].nasa_id}
                  nasa_id={image.data[0].nasa_id}
                  date={image.data[0].date_created}
                  title={image.data[0].title}
                  description={image.data[0].description}
                  href={typeof (image.links) === "undefined" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : image.links[0].href}
                />
              ))}
            </div>
          )}
        {num < images.length
          ? <div className="more">
            <button className="more_button" onClick={() => this.setState({ num: num + 10 })}>more</button>
          </div>
          : ""}


      </section>
    );
  }
}

export default App;
