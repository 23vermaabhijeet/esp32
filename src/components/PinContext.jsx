import { createContext, useState, useContext } from 'react';

// Create the context
const PinContext = createContext();

// Create a provider component
export function PinProvider({ children }) {
  // Initialize with a default array of 4 pins, all set to disabled (value 0)
  const [inputPinStates, setInputPinStates] = useState(Array(4).fill(0));
  
  // Function to update a specific pin state
  const updatePinState = (pinIndex, newState) => {
    setInputPinStates(prevStates => {
      const newStates = [...prevStates];
      newStates[pinIndex] = newState;
      return newStates;
    });
  };

  // Function to toggle a pin's state
  const togglePinState = (pinIndex) => {
    setInputPinStates(prevStates => {
      const newStates = [...prevStates];
      newStates[pinIndex] = newStates[pinIndex] === 0 ? 1 : 0;
      return newStates;
    });
  };

  return (
    <PinContext.Provider value={{ inputPinStates, updatePinState, togglePinState }}>
      {children}
    </PinContext.Provider>
  );
}

// Custom hook to use the pin context
export function usePinContext() {
  return useContext(PinContext);
}