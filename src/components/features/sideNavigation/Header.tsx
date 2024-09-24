const Header = () => {
  return (
    <header className="flex justify-between items-center p-1">
      <div className="flex items-center space-x-4">
        <img src="/images/logo.svg" alt="logo" className="w-50 h-50" />
        <h1 className="text-3xl font-medium">주차자리요</h1>
      </div>
      <button
        className="p-2 hover:bg-gray-200 bg-[url('/images/bookmark.svg')] bg-no-repeat bg-center rounded-lg"
        style={{ width: "25px", height: "25px", backgroundSize: "25px 25px" }}
      ></button>
    </header>
  );
};

export default Header;
