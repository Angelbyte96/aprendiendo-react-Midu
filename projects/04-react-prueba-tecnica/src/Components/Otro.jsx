import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Angelbyte' })
  console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
