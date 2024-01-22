export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 py-1">
            &copy;
            <span id="year">2024</span>
            Pöhinä Group
          </div>
        </div>
      </div>
    </footer>
  );
}
