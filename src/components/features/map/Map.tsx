import { useEffect, useState } from "react";
import { loadKakaoMap } from "../../../services/MapService";
import { useLocation } from "../../../hooks/useLocation";

const Map = () => {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    loadKakaoMap("map")
      .then((map) => {
        setMapInstance(map);
      })
      .catch((error) => {
        console.error("KakaoMap load Error", error);
      });
  }, []);

  // 현재 위치로 지도 focus
  useEffect(() => {
    if (mapInstance && location) {
      const center = new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude
      );
      mapInstance.setCenter(center);
    }
  }, [mapInstance, location]);

  return (
    <div id="map" className="w-full h-screen">
      {!mapInstance && <p>Loading Map...</p>}
    </div>
  );
};

export default Map;
