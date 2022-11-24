import { useEffect,useState } from 'react';
import { AddImg } from '../components/AddImg';


export const useFetchAnime = (anime) => {
    const [images, setImages] = useState([]);
    
   

    const getAnimeImg=async()=>{
        const newAnimeimg=await AddImg(anime);
        setImages(newAnimeimg);
        
        
    }
    useEffect(() => {
        getAnimeImg();
  
    
    });
  return {
    images,
    
}
}
