import { useEffect, useState } from "react";
import { loadKakaoMap } from "@/services";
import MapMarkers from "./MapMarkers";
import { fetchParkingData } from "@/services";
import { filterParking, getDistrict, calDistance } from "@/utils";
// import { useLocation } from "@/hooks";
import { useParkingStore } from "@/stores";
import groupParking from "@/utils/groupParking";

const Map = () => {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const { parkingData, setParkingData, setSortedParking } = useParkingStore();
  const [filteredParking, setFilteredParking] = useState<any[]>([]); // 필터링된 주차장 데이터
  // const location = useLocation(); // 현재 위치 정보 (latitude, longitude)
  const [mapCenter, setMapCenter] = useState({
    latitude: 37.5665,
    longitude: 126.978,
  });

  const seoulLocation = {
    latitude: 37.5665,
    longitude: 126.978,
  };

  useEffect(() => {
    const initializeMapAndDistrict = async () => {
      try {
        const map = await loadKakaoMap("map");
        setMapInstance(map);

        // 자치구 정보 가져오기
        getDistrict(
          seoulLocation.latitude,
          seoulLocation.longitude,
          (districtName) => {
            if (districtName) {
              setDistrict(districtName);
              console.log("현재 자치구:", districtName);
            }
          }
        );
      } catch (error) {
        console.error("KakaoMap load Error", error);
      }
    };

    initializeMapAndDistrict();
  }, []);

  useEffect(() => {
    const fetchAllParkingData = async () => {
      try {
        let allParkingData: any[] = [];
        for (let i = 1; i <= 1900; i += 1000) {
          const data = await fetchParkingData(i, i + 999);
          allParkingData = allParkingData.concat(data);
        }

        const groupedParkingData = groupParking(allParkingData); // 코드 같은 주차장(노상) 그룹화
        setParkingData(groupedParkingData); // 상태에 저장
      } catch (error) {
        console.error("주차장 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (!parkingData.length) {
      fetchAllParkingData();
    }
  }, [setParkingData, parkingData]);

  // 자치구에 따라 주차장 필터링
  useEffect(() => {
    if (!district || parkingData.length === 0) return;
    const filteredParking = filterParking(parkingData, district);
    console.log("현재 위치:", mapCenter.latitude, mapCenter.longitude);
    console.log("필터링된 주차장:", filteredParking);

    // 현재 위치 기준으로 가까운 순서로 정렬
    const sortedParking = [...filteredParking].sort((a, b) => {
      const distanceA = calDistance(
        mapCenter.latitude,
        mapCenter.longitude,
        a.LAT,
        a.LOT
      );
      const distanceB = calDistance(
        mapCenter.latitude,
        mapCenter.longitude,
        b.LAT,
        b.LOT
      );
      return distanceA - distanceB;
    });
    console.log("정렬된 주차장 목록:", sortedParking);
    setSortedParking(sortedParking); // Zustand에 정렬된 데이터 저장
    setFilteredParking(filteredParking);
  }, [district, parkingData]);

  const ClickUpdateLocBtn = () => {
    if (mapInstance) {
      const center = mapInstance.getCenter();
      setMapCenter({ latitude: center.getLat(), longitude: center.getLng() }); // 지도 중심 좌표 업데이트

      getDistrict(center.getLat(), center.getLng(), (districtName) => {
        if (districtName) {
          setDistrict(districtName);
          console.log("새로운 자치구:", districtName);
        }
      });
    }
  };

  return (
    <div id="map" className="w-full h-screen relative">
      {!mapInstance && <p>Loading Map...</p>}
      <button
        onClick={ClickUpdateLocBtn}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-primary font-bold py-2 px-4 rounded-xl shadow-lg hover:bg-gray-50 flex items-center"
        style={{ zIndex: 9999 }}
      >
        <img src="/images/updateLoc.svg" className="w-5 h-5 mr-2" />현 지도에서
        검색
      </button>
      {mapInstance && filteredParking.length > 0 && (
        <MapMarkers parkingData={filteredParking} mapInstance={mapInstance} />
      )}
    </div>
  );
};

export default Map;
