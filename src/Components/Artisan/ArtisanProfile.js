import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductListing from './CardItem';
import axios from 'axios';

const ArtisanProfile = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    // Fetch artisan data based on the id
    axios.get(`http://localhost:8008/api/artisans/${id}`)
      .then(response => {
        setArtisan(response.data); // Assuming the API response contains the artisan data
      })
      .catch(error => {
        console.error('Error fetching artisan data:', error);
      });
  }, [id]);

  // Check if artisan data is still loading
  if (!artisan) {
    return <div>Loading...</div>;
  }

  // Render the component once the data is available
  return (
    <div>
      <h2>{artisan.name}'s Profile</h2>
      <p>Bio: {artisan.bio}</p>
      <p>Email: {artisan.email}</p>

      {/* Display Product List */}
      <ProductListing artisanId={id} />
    </div>
  );
};

export default ArtisanProfile;
