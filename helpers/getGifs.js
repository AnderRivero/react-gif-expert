export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=tQrapRpeasuR7vhu2mN7to6ZIKskeiPZ&q=${category}&limit=5`;
  try {
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.fixed_width.url,
    }));
console.log(data);
    return gifs;
  } catch (error) {
    console.log(error);
  }
};
