import React, { useState } from "react";
import pokemon from "pokemontcgsdk";
import AppLayout from "../layouts/appLayout.jsx";
import Card from "../components/card.jsx";
const Tcg = () => {
  const [cards, setCards] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await pokemon.card.where({ q: 'name:' + event.target[0].value });
    setCards(res.count ? res.data : null);
    document.getElementsByTagName('form')[0].reset();
  };

  const resetCards = () => {
    setCards([]);
  };

  return (
    <AppLayout>
        <div className="container mx-auto">
          <form onSubmit={handleSubmit} className="mt-24 flex mx-auto">
            <input type="text" className="rounded-l px-2 w-full bg-gray-100 placeholder:text-gray-300" placeholder="Tcg a pokemon.." />
            <button type="submit" className="bg-pokeball-red rounded-r px-2 py-1 hover:opacity-75 duration-300 text-white font-thin">Tcg</button>
          </form>

          <div className="container my-4 p-4 bg-pokeball-white rounded mx-auto grid gap-8 grid-cols-4 grid-rows-1">
            {cards && cards.length > 0 ? cards.map((card) => (
              <Card key={card.id} pokemon={card} />
            )) : (<p className="mx-auto text-center col-span-full">No card found... 😢</p>)}
          </div>
        </div>
    </AppLayout>
  );
};

export default Tcg;