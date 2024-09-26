import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import api from '../utils/api';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const TryOnPage = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { tryOnLink } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/try-on/${tryOnLink}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load product data');
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [tryOnLink]);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError('Failed to access camera');
      }
    };

    startVideo();
  }, []);

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
      console.log('Image captured:', imageDataUrl);
    }
  };

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Virtual Try-On: {product.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <video ref={videoRef} autoPlay className="w-full h-auto" />
          <canvas ref={canvasRef} className="hidden" width="640" height="480" />
          <button 
            onClick={captureImage} 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Capture Image
          </button>
          {product.modelUrl && (
            <div className="mt-4" style={{ height: '400px' }}>
              <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                  <Model url={product.modelUrl} />
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="mb-2">{product.description}</p>
          <p className="mb-2">Color: {product.color}</p>
          <p className="mb-2">Size: {product.size}</p>
          <p className="mb-2">Fabric: {product.fabric}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryOnPage;