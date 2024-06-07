import React, { useState, useEffect } from 'react';
import PetDropdown from './components/PetDropdown';
import PetDetails from './components/PetDetails';
import './App.css';
const mockPetsData = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    weight: "30kg",
    color: "Golden"
  },
  {
    id: 2,
    name: "Mittens",
    type: "Cat",
    breed: "Siamese",
    weight: "4kg",
    color: "Cream"
  },
  {
    id: 3,
    name: "Charlie",
    type: "Dog",
    breed: "Beagle",
    weight: "10kg",
    color: "Tricolor"
  },
  {
    id: 4,
    name: "Bella",
    type: "Cat",
    breed: "Persian",
    weight: "5kg",
    color: "White"
  },
  {
    id: 5,
    name: "Max",
    type: "Dog",
    breed: "German Shepherd",
    weight: "35kg",
    color: "Black and Tan"
  },
  {
    id: 6,
    name: "Luna",
    type: "Cat",
    breed: "Bengal",
    weight: "6kg",
    color: "Brown Spotted"
  },
  {
    id: 7,
    name: "Rocky",
    type: "Dog",
    breed: "Bulldog",
    weight: "24kg",
    color: "Brindle"
  },
  {
    id: 8,
    name: "Oliver",
    type: "Cat",
    breed: "Maine Coon",
    weight: "8kg",
    color: "Gray"
  },
  {
    id: 9,
    name: "Molly",
    type: "Dog",
    breed: "Poodle",
    weight: "12kg",
    color: "Apricot"
  },
  {
    id: 10,
    name: "Simba",
    type: "Cat",
    breed: "Ragdoll",
    weight: "7kg",
    color: "Blue Point"
  }
];


function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    setPets(mockPetsData);
  }, []);

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-400 to-blue-500">
      <h1 className="text-4xl font-bold mb-8 text-white">Pet List</h1>
      <PetDropdown pets={pets} onSelect={handlePetSelect} />
      {selectedPet && <PetDetails pet={selectedPet} />}
    </div>
  );
}

export default App;
