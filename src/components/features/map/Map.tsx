import { useEffect, useState } from "react";
import { loadKakaoMap } from "../../../services/MapService";
import { useLocation } from "../../../hooks/useLocation";
import { getDistrict } from "../../../utils/getDistrict";
import { fetchParkingData } from "../../../services/parkingService";
import { useParkingStore } from "../../../stores/parkingStore";
import { filterParking } from "../../../utils/filterParking";

const Map = () => {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [district, setDistrict] = useState<string | null>(null); // 자치구 정보
  const { parkingData, setParkingData } = useParkingStore();
  const location = useLocation(); // 현재 위치 정보 (latitude, longitude)

  const seoulLocation = {
    latitude: 37.5665,
    longitude: 126.978,
  };

  // 지도 및 자치구 정보 초기화
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

    initializeMapAndDistrict(); // 처음 한 번만 실행
  }, []);

  // 주차장 데이터 불러오기 (한 번만 실행)
  useEffect(() => {
    const fetchAllParkingData = async () => {
      try {
        let allParkingData: any[] = [];
        for (let i = 1; i <= 1900; i += 1000) {
          const data = await fetchParkingData(i, i + 999);
          allParkingData = allParkingData.concat(data);
        }
        setParkingData(allParkingData); // Zustand에 데이터 저장
        console.log("전체 주차장 데이터:", allParkingData);
      } catch (error) {
        console.error("주차장 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (!parkingData.length) {
      fetchAllParkingData(); // 처음 한 번만 호출
    }
  }, [setParkingData, parkingData]);

  // 자치구에 따라 주차장 필터링
  useEffect(() => {
    if (!district || parkingData.length === 0) return;
    const filteredParking = filterParking(parkingData, district); // 주차장 데이터 필터링
    console.log("필터링된 주차장:", filteredParking);
  }, [district, parkingData]);

  return (
    <div id="map" className="w-full h-screen">
      {!mapInstance && <p>Loading Map...</p>}
      {district && <p>현재 자치구: {district}</p>}
    </div>
  );
};

export default Map;
