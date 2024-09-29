import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VirtualTryOn from '../components/VirtualTryOn';

const TryOnPage = () => {
  const [product, setProduct] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const videoRef = useRef(null);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/public/product/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Failed to load product. Please try again later.');
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();

    let stream;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(videoStream => {
        stream = videoStream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            setIsCameraReady(true);
          };
        }
      })
      .catch(err => {
        console.error("Error accessing camera:", err);
        setError('Failed to access camera. Please check your camera permissions.');
      });

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [fetchProduct]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!isCameraReady || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-virtudress-purple">
      <div className="w-full max-w-md bg-virtudress-dark shadow-lg rounded-lg overflow-hidden">
        <div className="aspect-w-9 aspect-h-16 relative">
          <VirtualTryOn modelUrl={product.modelUrl} videoRef={videoRef} />
        </div>
        <div className="p-4 text-white">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${product.price}</span>
            <button className="bg-white text-virtudress-purple px-4 py-2 rounded hover:bg-gray-200 transition-colors">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOnPage;