import React, { useState } from "react";

function App() {
  const arr = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const makeCard = (obj, key) => {
    return (
      <div
        key={key}
        className="card"
        data-test-id={`menu-item-${obj.category}`}
      >
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="info">
          <div className="info-head">
            <div className="title">{obj.title}</div>{" "}
            <div className="price">{obj.price}</div>{" "}
          </div>
          <div className="description">{obj.desc}</div>
        </div>
      </div>
    );
  };

  const [category, setCategory] = useState("all");
  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div className="navs">
        <button
          className="nav"
          id="filter-btn-1"
          //   data-test-id="menu-item-all"
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className="nav"
          id="filter-btn-2"
          //   data-test-id="menu-item-breakfast"
          onClick={() => setCategory("breakfast")}
        >
          Breakfast
        </button>
        <button
          className="nav"
          id="filter-btn-3"
          //   data-test-id="menu-item-lunch"
          onClick={() => setCategory("lunch")}
        >
          Lunch
        </button>
        <button
          className="nav"
          id="filter-btn-4"
          //   data-test-id="menu-item-shakes"
          onClick={() => setCategory("shakes")}
        >
          Shakes
        </button>
      </div>

      {category == "all"
        ? arr.map((elem, key) => makeCard(elem, key))
        : arr
            .filter((el) => el.category === category)
            .map((elem, key) => makeCard(elem, key))}
    </div>
  );
}

export default App;
