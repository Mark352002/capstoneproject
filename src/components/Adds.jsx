import React, { useEffect, useState } from 'react';

const Adds = () => {
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const carousel = () => {
      const x = document.getElementsByClassName('slide');
      if (x.length === 0) return; // Check if elements exist
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      const newIndex = (myIndex % x.length) + 1;
      x[newIndex - 1].style.display = 'block';
      setMyIndex(newIndex);
    };

    const intervalId = setInterval(carousel, 3000);

    return () => clearInterval(intervalId);
  }, [myIndex]);

  return (
    <center>
      <div className="mt-5 w3-content w3-section mb-5" style={{ maxWidth: '100%' }}>
        <img className="slide" src={require(`../images/index/h1.jpg`)} style={{ width: '77%' }} alt="" />
        <img className="slide" src={require(`../images/index/h2.jpg`)} style={{ width: '77%' }} alt="" />
      </div>
    </center>
  );
};

export default Adds;
