import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Import actual office photos
import office1 from '../assets/gallery/mich-image-1.jpeg'
import office2 from '../assets/gallery/mich-image-2.jpeg'
import office3 from '../assets/gallery/mich-image-3.jpeg'
import office4 from '../assets/gallery/mich-image-4.jpeg'
import office5 from '../assets/gallery/mich-image-5.jpeg'

// Gallery images with your actual office photos
const galleryImages = [
  {
    id: 1,
    src: office1,
    alt: 'The Mending Space - Comfortable waiting area with modern seating',
    title: 'Welcoming Waiting Area'
  },
  {
    id: 2,
    src: office2,
    alt: 'The Mending Space - Private therapy session room',
    title: 'Private Therapy Room'
  },
  {
    id: 3,
    src: office3,
    alt: 'The Mending Space - Professional office hallway',
    title: 'Professional Office Space'
  },
  {
    id: 4,
    src: office4,
    alt: 'Colony Square Center - Building exterior',
    title: 'Colony Square Center'
  },
  {
    id: 5,
    src: office5,
    alt: 'Professional building exterior with signage',
    title: 'Our Professional Location'
  }
]

const Gallery = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }, [])

  const goToImage = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      console.log('Overlay clicked, closing gallery')
      onClose()
    }
  }, [onClose])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    }
  }, [onClose, prevImage, nextImage])

  // Add keyboard event listener and prevent body scroll
  useEffect(() => {
    if (isOpen) {
      console.log('Adding keyboard listeners and preventing body scroll')
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      return () => {
        console.log('Cleaning up keyboard listeners and restoring body scroll')
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, handleKeyDown])

  // Debug logging
  console.log('Gallery component rendered, isOpen:', isOpen)

  if (!isOpen) {
    console.log('Gallery not open, returning null')
    return null
  }

  console.log('Gallery is open, rendering modal')

  return (
    <div 
      className="gallery-overlay" 
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div 
        className="gallery-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '25px',
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 10000
        }}
      >
        <div className="gallery-header">
          <h2>The Mending Space - Office Gallery</h2>
          <button className="gallery-close" onClick={onClose} aria-label="Close gallery">
            <X size={24} />
          </button>
        </div>
        
        <div className="gallery-main">
          <button 
            className="gallery-nav gallery-prev" 
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="gallery-image-container">
            <img 
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-image-info">
              <h3>{galleryImages[currentIndex].title}</h3>
              <p>{currentIndex + 1} of {galleryImages.length}</p>
            </div>
          </div>
          
          <button 
            className="gallery-nav gallery-next" 
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        <div className="gallery-thumbnails">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`View ${image.title}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery 