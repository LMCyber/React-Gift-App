import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifts()
  }, [])

  const getGifts = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=tZhTuv2Rew9exjzyhAEqmorfo2cAy5n8&q=goku&limit=10'

    const resp = await window.fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    setImages(gifs)
  }

  return (
    <>
      <h3>{category}</h3>

      <div className='card-grid'>
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}
