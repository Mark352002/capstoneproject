import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <section className=" container mb-5">
    <div >
      <p className='mt-5'>&nbsp;</p>

        <center className='mt-4'>
            <hr className="hr-title" />
            <h4 className="mb-3">About</h4>
            </center>
      </div>
      <div className="row">
        <div className="col text-justify text-center fst-italic pt-5 m-5">
          <h5>
             
          "Welcome to Oriyami, your haven of tranquility and natural beauty amidst the urban landscape. Discover a curated selection of exquisite plants, carefully chosen to thrive in urban environments and bring a touch of nature into your home. From elegant foliage to vibrant blooms, Oriyami offers a diverse array of botanical delights to suit every taste and space. Whether you're a seasoned plant enthusiast or just beginning your green journey, our collection, coupled with expert guidance and care tips, promises to elevate your indoor oasis. Step into Oriyami and let your urban space flourish with the beauty of nature. Explore our offerings at <Link to="/" >https://www.oriyami.com/</Link>. and let your botanical adventure begin."
          </h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum architecto cupiditate animi labore dolor? Amet eligendi dolorem cupiditate ab tenetur qui debitis voluptatem non officiis unde at, rerum suscipit modi autem, maxime aperiam cum eveniet! Asperiores obcaecati sint, atque quos a doloremque odit iste alias magni tempore non? Delectus, impedit!</p>
        </div>
        <div className="col col-lg-6 col-12 mt-5 d-flex justify-content-center"><img src={require('../images/carousel/imgabout.png')} className="img-fluid" alt=""/></div>
      </div>
    </section>
    </>
    
  );
}

export default About;
