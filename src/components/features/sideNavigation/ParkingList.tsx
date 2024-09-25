import { useEffect, useRef, useState } from "react";
import ParkingItem from "./ParkingItem";
import { SideNavigationParking } from "../../../types/parking";

// 더미 데이터 설정 (필요한 필드만 포함)
const parkingData: SideNavigationParking[] = [
  {
    id: "1",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "2",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "3",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "4",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "5",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "6",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "7",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "8",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "9",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "10",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "11",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "12",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "13",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "14",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "15",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "16",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "17",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
  },
  {
    id: "18",
    name: "테스트 주차장",
    address: "서울시 송파구 가락동",
    type: "노상",
    paymentType: "유료",
    baseCharge: 1000,
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
        <ParkingItem key={parking.id} parking={parking} />
      ))}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default ParkingList;
