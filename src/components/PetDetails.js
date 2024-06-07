import React from 'react';
import { motion } from 'framer-motion';
import './PetDetails.css';
function PetDetails({ pet }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Pet Details</h2>
      <p className="text-gray-600"><strong>Name:</strong> {pet.name}</p>
      <p className="text-gray-600"><strong>Type:</strong> {pet.type}</p>
      <p className="text-gray-600"><strong>Breed:</strong> {pet.breed}</p>
      <p className="text-gray-600"><strong>Weight:</strong> {pet.weight}</p>
      <p className="text-gray-600"><strong>Color:</strong> {pet.color}</p>
    </motion.div>
  );
}

export default PetDetails;
