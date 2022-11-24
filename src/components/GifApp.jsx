import React from "react";
import { useState } from "react";
import AddAnime from "./AddAnime";
import GridAnime from "./GridAnime";

const GifApp = () => {
  const [anime, setAnime] = useState(["Samurai X"]);

  const onAddAnime = (newAnime) => {
    setAnime([newAnime,...anime]);
  };
  return (
    <>
      {/* Titulo */}
      <h2>GifApp</h2>
      {/* Input */}
      <AddAnime
        // setAnime={ setAnime }
        onNewAnime={(event) => onAddAnime(event)}
      />

      {/* Listado de Gifs */}

      {anime.map((anime) => (
        <GridAnime 
        key={anime} 
        anime={anime} />
      ))}

      {/* GifItem */}
    </>
  );
};

export default GifApp;
