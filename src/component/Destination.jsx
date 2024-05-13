import '../App.css'
import { Container } from 'react-bootstrap';


export function Destinations() {
    return (
        <Container id="Destinations" style={{ marginTop: '20px', textAlign: 'center', color: 'grey' }}>
        <h2 style={{color: 'maroon'}}>Explore India's Iconic Destinations</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <DestinationCard
            title="The Golden Triangle"
            description="Begin your journey in the heart of India's cultural heritage with the Golden Triangle tour covering Delhi, Agra, and Jaipur. Explore the majestic forts of Jaipur, the timeless beauty of the Taj Mahal in Agra, and the bustling markets of Delhi."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydLqTA5VzV-crSnONZIaLlJeg391RkSmTyZSePiIbSA&s"
          />
          <DestinationCard
            title="Kerala Backwaters"
            description="Experience tranquility as you cruise through Kerala's backwaters on a traditional houseboat. Witness lush greenery, serene waters, and vibrant local life along the banks."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Houseboats_at_Kerala_Backwaters.jpg/640px-Houseboats_at_Kerala_Backwaters.jpg"
          />
          <DestinationCard
            title="Goa's Beaches"
            description="Indulge in sun, sand, and sea on Goa's pristine beaches. From lively beach parties to peaceful sunsets, Goa offers a perfect blend of relaxation and excitement."
            image="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/08/16/Pictures/_dbca9ffa-a138-11e8-9345-8d51f8ed9678.jpg"
          />
          <DestinationCard
            title="Ladakh's Adventure"
            description="For adventure enthusiasts, Ladakh beckons with its rugged landscapes, high-altitude treks, and Buddhist monasteries perched on cliffs."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2iCi9O2V--iMLl7LAFk8w0B1W-VP6zrv9QkoybFAaw&s"
          />
          <DestinationCard
            title="Rajasthan's Royalty"
            description="Step into the royal era of Rajasthan with its opulent palaces, colorful festivals, and desert safaris. Explore the heritage cities of Jaipur, Udaipur, Jodhpur, and more."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGd-QG3fyW4qKS5jKfqAd4vp8xEG3TWqOK-h4e39oVA&s"
          />
          <DestinationCard
            title="Varanasi's Spiritual Aura"
            description="Dive into spirituality at Varanasi, one of the oldest living cities in the world. Witness mesmerizing Ganga Aarti ceremonies and immerse yourself in the spiritual essence of India."
            image="https://miro.medium.com/v2/resize:fit:1400/1*MOmgHH_PSYCGSWo3-ZeSxQ.jpeg"
          />
        </div>
      </Container>
    );
  }
  
  export function DestinationCard({ title, description, image }) {
    return (
      <div className="card-container"
        style={{
          margin: '40px',
          maxWidth: '300px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'transform 0.3s',
          ':hover': { transform: 'scale(1.05)' },
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '200px', // Set the desired height for all images
            objectFit: 'cover', // Ensure the image covers the entire space
            transition: 'transform 0.3s',
          }}
        />
        <div style={{ padding: '10px' }}>
          <h3 style={{ marginTop: '10px' }}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  