function ImageCard({ imageUrl, title, description }) {
  return (
    <article className="image-card">
      <img
        src={imageUrl}
        alt={title}
        className="gallery-image"
      />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ImageCard