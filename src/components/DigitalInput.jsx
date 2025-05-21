import { useState, useEffect } from "react";
import State from "./State";
import { usePinContext } from "./PinContext";

function DigitalInput() {
  const { inputPinStates } = usePinContext();

  return (
    <>
      <h3 className="text-3xl font-bold mt-16 mb-10">Input pins</h3>
      <div className="relative overflow-x-auto shadow-md w-full sm:rounded-lg mb-24">
        <table className="table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                PIN
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                STATE
              </th>
            </tr>
          </thead>
          <tbody>
            {inputPinStates.length > 0 ? (
              inputPinStates.map((state, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-center">{`Digital Input ${index}`}</td>
                  <td className="px-6 py-3 text-center">
                    {state === 1 ? (
                      <State type="pos" prop="Enabled" />
                    ) : (
                      <State type="neg" prop="Disabled" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-3 text-center">PIN1</td>
                <td className="px-6 py-3 text-center">
                  <State type="neg" prop="Disabled" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DigitalInput;
