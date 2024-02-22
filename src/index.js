import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const moroccanMenu = [
  {
    name: "Harira Soup",
    ingredients: "Tomatoes, lentils, chickpeas, and various spices",
    price: 40,
    photoName: "../public/images/harira_soup.jpg",
    soldOut: false,
  },
  {
    name: "Couscous with Vegetables",
    ingredients: "Steamed couscous with mixed vegetables",
    price: 95,
    photoName: "./public/images/couscous_vegetables.jpg",
    soldOut: false,
  },
  {
    name: "Tagine with Chicken and Apricots",
    ingredients: "Chicken, apricots, almonds, and aromatic spices",
    price: 90,
    photoName: "./images/tagine_chicken_apricots.jpg",
    soldOut: false,
  },
  {
    name: "Vegetarian Bastilla",
    ingredients: "Phyllo pastry with layers of vegetables, nuts, and spices",
    price: 140,
    photoName: "./images/vegetarian_bastilla.jpg",
    soldOut: false,
  },
  {
    name: "Grilled Lamb Kebabs",
    ingredients: "Marinated lamb skewers with herbs and spices",
    price: 130,
    photoName: "./images/lamb_kebabs.jpg",
    soldOut: true,
  },
  {
    name: "Mint Tea",
    ingredients: "Green tea, fresh mint, and sugar",
    price: 30,
    photoName: "./images/mint_tea.jpg",
    soldOut: false,
  },
];
const menuExist = moroccanMenu.length;
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Atlas Oasis Bites</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      {menuExist > 0 ? (
        <>
          <p>
            Experience the Essence of Morocco: Indulge in 6 Artfully Crafted
            Dishes, All Baked in Our Traditional Stone Oven, All Made with
            Organic Ingredients, All Bursting with Authentic Moroccan Flavors.
          </p>
          <Dishes />
        </>
      ) : (
        <p>
          Dear valued patrons, we regret to inform you that our kitchen is
          taking a well-deserved break today, and we won't be offering our
          regular menu. We appreciate your understanding and look forward to
          welcoming you back for a delightful dining experience on our next
          service day. Thank you for your continued support.
        </p>
      )}
    </main>
  );
}

function Dishes() {
  return (
    <ul className="dishes">
      {moroccanMenu.map(function (moroccandish) {
        return (
          <Dish
            moroccanM={moroccandish}
            // name={el.name}
            // photoName={el.photoName}
            // ingredients={el.ingredients}
            // price={el.price}
            // soldOut={el.soldOut}
          />
        );
      })}
    </ul>
  );
}

function Dish({ moroccanM }) {
  return (
    <li className={`mrmenu ${moroccanM.soldOut ? "sold-out" : ""}`}>
      <img
        src={process.env.PUBLIC_URL + moroccanM.photoName}
        alt={moroccanM.name}
      />
      <div>
        <h3>{moroccanM.name}</h3>
        <p>{moroccanM.ingredients}</p>
        <span>{moroccanM.soldOut ? "SOLD_OUT" : `${moroccanM.price} DH`}</span>
      </div>
    </li>
  );
}
function Footer() {
  const timeNow = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isitOpen = timeNow >= openHour && timeNow <= closeHour;
  return (
    <footer className="footer">
      <div className="order">
        {isitOpen ? (
          <p>
            "We're open from {openHour}:00 to {closeHour}:00. Come visit us or
            order online"
          </p>
        ) : (
          <p>
            "We're currently closed. Please visit us during our regular hours.
            Thank you!"
          </p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
