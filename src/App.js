import React from 'react';
import PropTypes from "prop-types";

function Food({ name,picture,rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "kimchi",
    image: 
    "//gungangmall.co.kr/web/product/big/201607/861_shop1_630241.png"
  },
  {
    id: 2,
    name: "bibimbab",
    image: 
    "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTZfMTAg/MDAxNTE2MDk5NjY3OTI3.J1Kpox1dTkYgKl9_Xhpsg_XwVpLnvWZrQ975_x6rZ0Ug.KB65tShRWrBtzbo9kEo48Mn1n_pmeKpdx19O_sZIJY4g.JPEG.wwkd0974/IMG_5140.JPG?type=w800",
    rating: 4.9
  },
  {
    id: 3,
    name: "bulgogi",
    image: 
    "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMDRfNCAg/MDAxNDg4NjM3NTMxMzA1.7Sig96NsWwET-rIdNUpsEwtkoixsWUT7ZpCtF2LMmGkg.3qi7XILEuwaMHx60C6h0-8YDpFN8OUd9VBMWoSTjS90g.JPEG.arira78/IMG_5870_%EC%82%AC%EB%B3%B8.jpg?type=w2",
    rating : 4.8
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
