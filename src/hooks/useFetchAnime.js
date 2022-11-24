import { useEffect,useState } from 'react';
import { AddImg } from '../components/AddImg';


export const useFetchAnime = (anime) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
   

    const getAnimeImg=async()=>{
        const newAnimeimg=await AddImg(anime);
        setImages(newAnimeimg);
        setLoading(false);
        
    }
    useEffect(() => {
        getAnimeImg();
  
    
    });
  return {
    images,
    loading
}
}
