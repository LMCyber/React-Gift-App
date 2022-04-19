export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=tZhTuv2Rew9exjzyhAEqmorfo2cAy5n8&q=${encodeURI(category)}&limit=10`

  const resp = await window.fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs
}
