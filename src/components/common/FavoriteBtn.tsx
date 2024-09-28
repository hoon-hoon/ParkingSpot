import { useState, useEffect } from "react";

interface FavoriteButtonProps {
  parkingCode: string;
}

const FavoriteBtn = ({ parkingCode }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // 로컬스토리지에서 즐겨찾기확인
    const storedFavorites = localStorage.getItem("favoriteParkingLots");
    if (storedFavorites) {
      const favoritesArray = JSON.parse(storedFavorites);
      setIsFavorite(favoritesArray.includes(parkingCode));
    }
  }, [parkingCode]);

  const toggleFavorite = () => {
    const storedFavorites = localStorage.getItem("favoriteParkingLots");
    let favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      favoritesArray = favoritesArray.filter(
        (code: string) => code !== parkingCode
      );
    } else {
      favoritesArray.push(parkingCode);
    }
    localStorage.setItem("favoriteParkingLots", JSON.stringify(favoritesArray));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className="flex items-center justify-center w-10 h-10 rounded-full border-2 hover:bg-gray-50 transition duration-200 ease-in-out"
    >
      <img
        src={isFavorite ? "/images/activeStar.svg" : "/images/defaultStar.svg"}
        className="w-6 h-6"
      />
    </button>
  );
};

export default FavoriteBtn;
