import React, { useState, useEffect } from 'react';
import './sharan.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlayFill, PauseFill } from 'react-bootstrap-icons';

const images = [
    {
        id: 1,
        src: 'https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/202001291805159657-303c1a80_z.jpg',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,',
       
      },
      {
        id: 2,
        src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/03/shutterstock_465558758-illustration-of-India-background-showing-its-culture-and-diversity-with-monument-dance-and-festival.jpg',
        details: 'Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India s languages, religions, dance, music, architecture, food and customs differ from place to place within the country.Indian culture, often labelled as a combination of several cultures, has been influenced by a history that is several millennia old, beginning with the Indus Valley civilization and other early cultural areas.[1][2] Many elements of Indian culture, such as Indian religions, mathematics, philosophy, cuisine, languages, dance, music and movies have had a profound impact across the Indosphere, Greater India, and the world. There was also mutual influence between India and Southeast Asian',
       
      },
      {
        
        id: 3,
        src: 'https://bairesdev.mo.cloudinary.net/blog/2021/09/software-developer-1.jpg?tx=w_3840,q_auto',
        details: 'Software developers design, program, build, deploy and maintain software using many different skills and tools. They also help build software systems that power networks and devices and ensure that those systems remain functional. Their job may also involve meeting with clients to determine the needs for a software solution, which will help them design the final product,Software developers work in a wide variety of industries, and some even work as freelancers. Software is involved across virtually every industry to power the devices and applications used within that field. You can find software developers working in business, technology, defense, healthcare, aerospace and manufacturing,Depending on the setting, a software developer may work alone or on a team with other developers and programmers. In general, larger companies tend to have teams of developers due to the complexity of the software they are designing.',
      },
      {
        id: 4,
        src: 'https://www.keralaayurveda.biz/media/user_v1oz1Yz27j/2140/80628081_s.jpg',
        details: 'Ayurveda is a medical practice that originated in India. Thought to be far superior than other forms of medicine, it promises treatment for various ailments that would not normally not be found in other systems of medicine. If you are looking to get treated by the Ayurveda system of medicine, here are 10 facts about the practice.The rishis of ancient India through deep meditation were able to pierce the veil of illusion and see the  underlying mechanics of the manifest world.  What they could see was that everyone and everything is made of five elements that interchange and morph into that which can been seen, touched, heard, tasted, and smelled.The most fundamental element is space.  Space is unbounded and infinite.  It is also called Akasha and is the first manifestation of pure awareness. When we think of space, we can imagine the unlimited canopy of the sky or the infinite galaxies and within the human body, it is the hollow spaces and ',
      },
      {
        id: 5,
        src: 'https://hikerwolf.com/wp-content/uploads/2020/06/Ooty.jpg',
        details: ' Ooty is a scenic hill town in southern India. It is surrounded by the Nilgiri Hills and is popularly known as the Queen of Hills. But when is the best time to visit Ooty? Climate (if any) is the only serious deterrent which might spoil your travel plans to Ooty. But regarding climate too, Ooty has something different to offer all throughout the year. The summer is perhaps the best time to visit the place, if you are planning to visit all the tourist spots, including some adventurous treks and hand gliding.Be it summer, monsoon or winter, Ooty will enthral you with the natural grandeur of the mountains and the hospitality of its residents. Being a cherished tourist destination for many, Ooty has got excellent connectivity with the cities and towns in the neighbourhood. And hire one of the best car rental companies in Ooty to ensure a comfortable ride with in Ooty Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, ',
      },
  // Add more images as needed 
];

const Sharan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        goToNextImage();
      }, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image-container">
            <img id='radius' src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} className="img-fluid" />
          </div>
         
         <div className="thumbnails">
          <button className="btn btn-primary" onClick={goToPreviousImage}>Previous</button>
            {images.map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Image ${index + 1}`}
                className={`thumbnail ${currentIndex === index ? 'selected' : ''}`}
                onClick={() => goToImage(index)}
              />
            ))}
             <button className="btn btn-primary" onClick={goToNextImage}>Next</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="details-container">
            <h3>Image Details</h3>
            <p>{images[currentIndex].details}</p>
            
          </div>
          <div id='play'>
          <button className="btn btn-primary" onClick={togglePlay}>{isPlaying ? <PauseFill /> : <PlayFill />}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharan;
