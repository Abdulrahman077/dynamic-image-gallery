import ImageCard from './components/ImageCard'
import './App.css'

function App() {
  const images = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
      title: 'Nature',
      description: 'Beautiful landscapes and scenery.'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Mountain',
      description: 'Beautiful mountain view.'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Beach',
      description: 'Beautiful beach view.'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      title: 'Forest',
      description: 'Peaceful green forest.'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      title: 'Adventure',
      description: 'Beautiful adventure destination.'
    }
  ]

  return (
    <>
      <header className="gallery-header">
        <h1>My Dynamic Image Gallery</h1>
        <p>Explore the beauty of nature!</p>
      </header>

      <main className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
          />
        ))}
      </main>
    </>
  )
}

export default App