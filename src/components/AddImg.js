export const AddImg= async(anime)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5APYOFZp2gqDy7wBmOV23qpT5ypmV1eI&q=${anime}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })    
    return gifs;
}

