import { useEffect, useRef, useState } from "react";
import ParkingItem from "./ParkingItem";
import { useFavoriteStore, useParkingStore } from "@/stores";

const ParkingList = () => {
  const { sortedParking, district, parkingData } = useParkingStore();
  const [visibleData, setVisibleData] = useState(sortedParking.slice(0, 10)); // 처음 10개
  const [page, setPage] = useState(1); // 현재 페이지
  const observerRef = useRef(null); // 무한 스크롤용 ref
  const { isFavoriteMode } = useFavoriteStore();
  const [favoriteParking, setFavoriteParking] = useState<any[]>([]);

  // 로컬스토리지에서 즐겨찾기 리스트를 가져옴
  const getFavoriteParking = () => {
    const favoriteIds = JSON.parse(
      localStorage.getItem("favoriteParkingLots") || "[]"
    );
    const filteredFavorites = parkingData.filter((parking) =>
      favoriteIds.includes(parking.PKLT_CD)
    );
    return filteredFavorites;
  };

  // 새로운 데이터를 로드
  const loadMoreData = () => {
    const nextPage = page + 1;
    const nextData = isFavoriteMode
      ? favoriteParking.slice(0, nextPage * 10)
      : sortedParking.slice(0, nextPage * 10);
    setVisibleData(nextData);
    setPage(nextPage);
  };

  useEffect(() => {
    if (isFavoriteMode) {
      const favorites = getFavoriteParking();
      setFavoriteParking(favorites);
      setVisibleData(favorites.slice(0, 10));
    } else {
      setVisibleData(sortedParking.slice(0, 10));
    }
    setPage(1);
  }, [isFavoriteMode, sortedParking, parkingData]);

  useEffect(() => {
    setVisibleData(sortedParking.slice(0, 10));
    setPage(1);
  }, [sortedParking]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [page, isFavoriteMode, favoriteParking]);

  return (
    <div className="overflow-y-auto" style={{ height: "calc(100vh - 160px)" }}>
      <p className="text-lg p-1 mb-2 font-medium">
        {isFavoriteMode ? "즐겨찾기" : `${district} 근처 주차장이에요.`}
      </p>
      {visibleData.map((parking) => (
        <ParkingItem key={parking.PKLT_CD} parking={parking} />
      ))}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default ParkingList;
