import React from 'react';

interface GoogleMapProps {
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ className = "" }) => {
  // Collin County, Texas coordinates - Using a demo key for now
  // In production, you should use your own Google Maps API key
  const mapUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Collin+County,+Texas&zoom=10&center=33.1879,-96.6667";

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
        title="FreshCo Cleaning Service Areas - Collin County"
      />
    </div>
  );
};

export default GoogleMap;
