import React from 'react';
import Polaroid from './Polaroid';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';

const WallOfPolaroids = () => {
  const polaroidPhotosLeft = [
    { imageSrc: image1, caption: '' },
    { imageSrc: image2, caption: ' ' },
    { imageSrc: image3, caption: '' },
  ];

  const polaroidPhotosRight = [
    { imageSrc: image4, caption: '' },
    { imageSrc: image5, caption: '' },
    { imageSrc: image6, caption: '' },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl p-4">
        {/* Coluna Esquerda */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-auto">
          {polaroidPhotosLeft.map((photo, index) => (
            <Polaroid key={index} imageSrc={photo.imageSrc} caption={photo.caption} />
          ))}
        </div>

        {/* Coluna do Meio (Texto e Vídeo) */}
        <div className="flex-1 mx-4">
          <div className="flex items-center justify-center mb-2"> {/* Contêiner para o texto */}
            <h2 className="text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">nossas memórias</h2> {/* Estilo do texto */}
          </div>
          <video controls autoPlay loop className="w-full h-auto rounded-lg"> {/* Adicione os atributos autoPlay e loop */}
            <source src="src/assets/m.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-auto">
          {polaroidPhotosRight.map((photo, index) => (
            <Polaroid key={index} imageSrc={photo.imageSrc} caption={photo.caption} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallOfPolaroids;
