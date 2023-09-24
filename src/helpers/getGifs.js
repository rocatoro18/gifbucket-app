
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5Mxm4PhAJ00ugsJfmH5MJw4Vr4kp5Uoe&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);

    const gifs = data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    })
    );

    console.log(gifs);
    
    return gifs;
}