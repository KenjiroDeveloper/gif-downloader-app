

export const getGifs = async (category, offset) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=cYmeCiXvqQ7k5F6ajyTWVye9ZOzmQAMg&q=${category}&limit=9&offset=${offset}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        user: img.username
    }));

    return gifs
}