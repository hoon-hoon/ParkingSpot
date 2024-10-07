const Spinner = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-white bg-opacity-80 z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
