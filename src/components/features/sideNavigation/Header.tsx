import { useFavoriteStore } from "@/stores";

const Header = () => {
  const { isFavoriteMode, toggleFavoriteMode } = useFavoriteStore();

  return (
    <header className="flex justify-between items-center p-1">
      <div className="flex items-center space-x-4">
        <img src="/images/logo.svg" alt="logo" className="w-50 h-50" />
        <h1 className="text-3xl font-medium">주차자리요</h1>
      </div>
      <button
        onClick={toggleFavoriteMode}
        className={`flex items-center p-2 rounded-lg space-x-2  ${
          isFavoriteMode
            ? "bg-yellow-300 hover:bg-yellow-300"
            : "hover:bg-gray-200"
        }`}
      >
        <div
          className="bg-no-repeat bg-center rounded-lg bg-[url('/images/bookmark.svg')]"
          style={{ width: "25px", height: "25px", backgroundSize: "25px 25px" }}
        ></div>
        <span className="text-base font-medium">즐겨찾기</span>
      </button>
    </header>
  );
};

export default Header;
