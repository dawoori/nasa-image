import React from 'react';
import PropTypes from 'prop-types';

const imageOfCity = [
  {
    id: 1,
    name: "Seoul",
    image: "https://img.theculturetrip.com/x/smart/wp-content/uploads/2013/07/lotte-world-tower-1791802_1280.jpg",
    
  },
  {
    id: 2,
    name: "Seosan",
    image: "https://img-wishbeen.akamaized.net/plan/1457487355490_samhwa.png",
    rating: 4
  },
  {
    id: 3,
    name: "Korea",
    image: "https://lp-cms-production.imgix.net/2019-06/09a64fea2933f6da77ab07d671d1f678-south-korea.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    rating: 3
  }
];

// function renderCity(city) {
//   console.log();
//   return <Image name={city.name} picture={city.image} />
// }

function Image({ name, picture, rating }) {
  return (
    <div>
      <h3>I'm the {name}.</h3>
      <p>{rating}</p>
      <img src={picture} alt={name} />
    </div>
  );
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello.</h1>
      {imageOfCity.map(city => (
        <Image
          key={city.id}
          name={city.name}
          picture={city.image}
          rating={city.rating}
        />
      ))}
    </div>
  );
}

export default App;
