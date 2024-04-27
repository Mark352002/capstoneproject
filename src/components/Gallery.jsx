import React from 'react';
// import Footer from './Footer';

const Gallery = () => {
  return (
    <section className="">
      <div >
      <p className='mt-5'>&nbsp;</p>

        <center className='mt-4'>
            <hr className="hr-title" />
            <h4 className="mb-3">Gallery</h4>
            </center>
      </div>
      <div className="gal pt-0">
        <div className="gallery">
          
          <a href={require(`../images/gallery/1.jpg`)} data-lightbox="models" data-title="Oriyami">
          <img src={require(`../images/gallery/1.jpg`)} alt="" className="w-100" />
          </a>
          <a href={require(`../images/gallery/2.jpg`)}  data-lightbox="models" data-title="Soil">
            <img src={require(`../images/gallery/2.jpg`)} alt="Soil" />
          </a>
          <a href={require(`../images/gallery/3.jpg`)} data-lightbox="models" data-title="Sansevieria">
            <img src={require(`../images/gallery/3.jpg`)} alt="Sansevieria" />
          </a>
          <a href={require(`../images/gallery/4.jpg`)} data-lightbox="models" data-title="Gardis">
            <img src={require(`../images/gallery/4.jpg`)} alt="Gardis" />
          </a>
          <a href={require(`../images/gallery/5.jpg`)} data-lightbox="models" data-title="Gloves">
            <img src={require(`../images/gallery/5.jpg`)} alt="Gloves" />
          </a>
          <a href={require(`../images/gallery/6.jpg`)} data-lightbox="models" data-title="Boston">
            <img src={require(`../images/gallery/6.jpg`)} alt="Boston" />
          </a>
          <a href={require(`../images/gallery/7.jpg`)} data-lightbox="models" data-title="Sansevieria">
            <img src={require(`../images/gallery/7.jpg`)} alt="Sansevieria" />
          </a>
          <a href={require(`../images/gallery/8.jpg`)} data-lightbox="models" data-title="Maki">
            <img src={require(`../images/gallery/8.jpg`)} alt="Maki" />
          </a>
        </div>
      </div>
      {/* <Footer/> */}
    </section>
  );
}

export default Gallery;
