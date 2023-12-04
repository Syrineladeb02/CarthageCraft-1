import React from 'react';
import { useParams } from 'react-router-dom';
import ProductListing from './CardItem';

const ArtisanProfile = ({ artisan }) => {
  const { id } = useParams();

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