import { useFetchAnime } from "../hooks/useFetchAnime";
import {AnimeItem} from './AnimeItem';




export const GridAnime = ({anime}) => {
    const {images,loading}=useFetchAnime(anime);

    
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


