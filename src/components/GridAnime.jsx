import { useFetchAnime } from "../hooks/useFetchAnime";
import {AnimeItem} from "./AnimeItem";





const GridAnime = ({anime}) => {
    const {images}=useFetchAnime(anime);

    
    return (
        <>
        <h3>{anime}</h3>
        <div className="card-grid">
     
            {
                images.map((image) => 
                    (<AnimeItem key={image.id}
                    {...image}/>
                    
                ))
            }
  
            


        </div>
        
            
        </>
    );
}

export default GridAnime;
