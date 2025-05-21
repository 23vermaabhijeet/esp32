import Breadcrumbs from "./Breadcrumbs";
import Row from "./Row";
import RowDir from "./RowDir";
import { useState, useEffect } from "react";

export default function Table() {
  const [data, setData] = useState([]);
  const [dir, setDir] = useState([]);
  const [currentPath, setCurrentPath] = useState("/storage/");

  async function getData(path) {
    /*console.log("Fetching:", path);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Use a CORS proxy

    try {
      const response = await fetch(proxyUrl + path); // Prepend the proxy URL
      const message = await response.json();

      const listFiles = message.files.map((item) => (
        <Row key={item.name} prop={item} />
      ));

      const directories = message.dir.map((item) => (
        <RowDir key={item} prop={item} choosepath={choosepath} />
      ));

      setData(listFiles);
      setDir(directories);
    } catch (err) {
      console.error("Fetch error:", err);
      setData([]);
      setDir([]);
    }*/
  }

  function choosepath(path) {
    setCurrentPath(path);
  }

  useEffect(() => {
    getData(currentPath);
  }, [currentPath]);

  return (
    <>
      <Breadcrumbs
        fullpath={currentPath.substring(1)}
        choosepath={choosepath}
      />

      <h2 className="text-5xl font-bold mt-16 mb-10">Files & Folders</h2>

      <div className="ml-8 flex flex-wrap mb-8">
        <div className="flex flex-nowrap overflow-x-auto items-center">
          {dir.length > 0 ? <div className="mr-4">Folder(s): </div> : <h3></h3>}
          {dir.length > 0 ? dir : <h3></h3>}
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-24">
        <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Filename
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Filesize
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Download
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data
            ) : (
              <tr>
                <td className="px-6 py-3 text-center" colSpan={6}>
                  No file present
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
