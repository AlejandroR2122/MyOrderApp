import React from 'react';

const ImagenProductos = ({ imageUrl }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Imagen del producto"
          className="max-w-full max-h-full object-cover rounded"
        />
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
};

export default ImagenProductos;
