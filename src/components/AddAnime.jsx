import React from "react";
import { useState } from "react";

export const AddAnime = ({onNewAnime}) => {
    let [inputValueAnime, setInputValueAnime] = useState("");

    const handleInputAnime = ({target}) => {
        setInputValueAnime(target.value);
        
    }

    const formSubmitAnime = (event) => {
        event.preventDefault()
        
        // setAnime(Anime=>[inputValue,...Anime])
        onNewAnime( inputValueAnime )
        setInputValueAnime("")

    }
  return (
    
      <form onSubmit={(event)=>formSubmitAnime(event)}>
        <input type="text"
        placeholder="Busca un anime"
        value={inputValueAnime}
        onChange={handleInputAnime} />
      </form>
    
  );
};


