import Heading from "./components/Heading";
function NoPage() {
  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <a href="/esp32/home">
          <button
            type="button"
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Home page
          </button>
        </a>
        <a href="/esp32/storage">
          <button
            type="button"
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Go to files
          </button>
        </a>
        <a href="/esp32/upload">
          <button
            type="button"
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Upload a new file
          </button>
        </a>
        <a href="/esp32/gpios">
          <button
            type="button"
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg bg-gray-100 text-blue-700 z-10 ring-2 ring-blue-700 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            GPIOS
          </button>
        </a>
      </div>
      <Heading prop="Sorry, no page found"></Heading>
      <p>Try checking the url</p>
    </>
  );
}

export default NoPage;
