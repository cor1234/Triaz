import React from 'react';
import './PetDropdown.css';
function PetDropdown({ pets, onSelect }) {
  const handleChange = (event) => {
    const selectedPet = pets.find(pet => pet.name === event.target.value);
    onSelect(selectedPet);
  };

  return (
    <div className="mb-8">
      <select 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-blue-600"
      >
        <option value="">Select a pet</option>
        {pets.map((pet) => (
          <option key={pet.id} value={pet.name}>{pet.name}</option>
        ))}
      </select>
    </div>
  );
}

export default PetDropdown;
