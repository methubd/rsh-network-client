import { useEffect, useState } from 'react';

const LocationDetector = () => {
  const [location, setLocation] = useState(null);
  const address = location?.addressParts;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Call the Nominatim API to get the location details
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then(response => response.json())
            .then(data => {
              if (data.display_name) {
                const addressParts = data.display_name.split(',');
                
                setLocation(prevLocation => ({...prevLocation, addressParts }));
              }
            })
            .catch(error => {
              console.error('Error geocoding:', error);
            });
        },
        error => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return [address]
};

export default LocationDetector;
