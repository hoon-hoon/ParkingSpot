import { useEffect, useRef, useState } from "react";
import ParkingItem from "./ParkingItem";
import { SideNavigationParking } from "../../../types/parking";

const parkingData: SideNavigationParking[] = [
  {
    PKLT_CD: "1",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "2",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "3",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "4",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "5",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "6",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "7",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "8",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "9",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "10",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "11",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "12",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "13",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "14",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "15",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "16",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "17",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
  {
    PKLT_CD: "18",
    PKLT_NM: "테스트 주차장",
    ADDR: "서울시 송파구 가락동",
    PKLT_TYPE: "노상",
    PAY_YN_NM: "유료",
    BSC_PRK_CRG: 1000,
  },
];

const ParkingList = () => {
  const [visibleData, setVisibleData] = useState(parkingData.slice(0, 10)); // 처음 10개
  const [page, setPage] = useState(1); // 현재 페이지
  const observerRef = useRef(null); // 무한 스크롤용 ref

  // 새로운 데이터를 로드하는 함수
  const loadMoreData = () => {
    const nextPage = page + 1;
    const nextData = parkingData.slice(0, nextPage * 10); // 추가로 10개씩 로드
    setVisibleData(nextData);
    setPage(nextPage);
  };

  // Intersection Observer를 사용한 무한 스크롤 감지
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
  }, [page]);

  return (
    <div className="overflow-y-auto" style={{ height: "calc(100vh - 160px)" }}>
      <p className="text-lg p-1 mb-2 font-medium">송파구 근처 주차장이에요.</p>
      {visibleData.map((parking) => (
        <ParkingItem key={parking.PKLT_CD} parking={parking} />
      ))}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default ParkingList;
