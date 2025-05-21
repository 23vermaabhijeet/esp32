import { useState, useEffect } from "react";
import State from "./State";
import { usePinContext } from "./PinContext";

function DigitalOutput() {
  const [state, setState] = useState(0);
  const { inputPinStates, updatePinState, togglePinState } = usePinContext();

  // Generate table rows for digital outputs
  const generateDigitalOutputRows = () => {
    return Array(4)
      .fill(0)
      .map((_, index) => (
        <tr key={index}>
          <td className="px-6 py-3 text-center">{`Digital Input_Output ${index}`}</td>
          <td className="px-6 py-3 text-center">
            <button
              onClick={() => handleTurnOn(index)}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Turn on
            </button>
          </td>
          <td className="px-6 py-3 text-center">
            <button
              onClick={() => handleTurnOff(index)}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Turn off
            </button>
          </td>
          <td className="px-6 py-3 text-center">
            <button
              onClick={() => handleSwitchState(index)}
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Switch state
            </button>
          </td>
        </tr>
      ));
  };

  // Button handlers that update the shared context
  const handleTurnOn = (pinIndex) => {
    console.log(`Turning on pin ${pinIndex}`);
    updatePinState(pinIndex, 1);
  };

  const handleTurnOff = (pinIndex) => {
    console.log(`Turning off pin ${pinIndex}`);
    updatePinState(pinIndex, 0);
  };

  const handleSwitchState = (pinIndex) => {
    console.log(`Switching state for pin ${pinIndex}`);
    togglePinState(pinIndex);
  };

  // PWM section handlers
  const handleChangeState = (e) => {
    let pin = Number(document.getElementById("pins").value);
    if (e.target.value === "on") {
      setState(1);
      e.target.textContent = "Disable";
      e.target.classList =
        "w-32 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
      e.target.value = "off";

      // Also update the pin state if a pin is selected
      if (pin >= 0 && pin <= 3) {
        updatePinState(pin, 1);
      }
    } else {
      setState(0);
      e.target.textContent = "Enable";
      e.target.value = "on";
      e.target.classList =
        "w-32 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";

      // Also update the pin state if a pin is selected
      if (pin >= 0 && pin <= 3) {
        updatePinState(pin, 0);
      }
    }
  };

  return (
    <>
      <h3 className="text-3xl font-bold mt-16 mb-10">Output pins</h3>
      <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg mb-24">
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="col-span-2 px-6 py-3 text-center">
                PIN
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                HIGH
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                LOW
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                SWITCH
              </th>
            </tr>
          </thead>
          <tbody>{generateDigitalOutputRows()}</tbody>
        </table>
      </div>

      <h3 className="text-3xl w-full font-bold mt-16 mb-10">PWM</h3>
      <div className="relative overflow-x-auto w-fit shadow-md sm:rounded-lg mb-24">
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="col-span-2 px-6 py-3 text-center">
                PWM
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                DUTY CYCLE
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                PIN SELECTOR
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                STATE
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                ENABLE/DISABLE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col" className="col-span-2 px-6 py-3 text-center">
                PWM
              </td>
              <td scope="col" className="px-6 py-3 text-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="border-2 p-2 rounded"
                />
              </td>
              <td scope="col" className="px-6 py-3 text-center">
                <form className="max-w-sm mx-auto">
                  <select
                    id="pins"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="-1" selected>
                      Choose a pin
                    </option>
                    <option value="0">DO_01</option>
                    <option value="1">DO_02</option>
                    <option value="2">DO_03</option>
                    <option value="3">DO_04</option>
                  </select>
                </form>
              </td>
              <td id="state" scope="col" className="px-6 py-3 text-center">
                <State
                  type={state === 1 ? "pos" : "neg"}
                  prop={state === 1 ? "Enabled" : "Disabled"}
                />
              </td>
              <td scope="col" className="px-6 py-3 text-center">
                <button
                  onClick={handleChangeState}
                  value="on"
                  type="button"
                  className="w-32 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Enable
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DigitalOutput;
