import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Qrcode = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('/qrcode')
      .then(response => {
        setQrCodes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (event) => {
    const selectedId = event.target.value;
    const selectedQrCode = qrCodes.find(qrCode => qrCode.id === parseInt(selectedId));

    setSelectedOption(selectedQrCode.qr_name);
    setSelectedImage(selectedQrCode.qr_image);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select QR Code</option>
        {qrCodes.map(qrCode => (
          <option key={qrCode.id} value={qrCode.id}>{qrCode.qr_name}</option>
        ))}
      </select>
      {selectedImage && (
        <div>
          <img src={selectedImage} alt={selectedOption} />
        </div>
      )}
    </div>
  );
};

export default Qrcode;
