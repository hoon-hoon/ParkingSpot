import { useEffect } from "react";
import { loadKakaoMap } from "../../../services/MapService";

const Map = () => {
  useEffect(() => {
    loadKakaoMap("map")
      .then(() => {
        console.log("kakaoMap load");
      })
      .catch((error) => {
        console.error("kakaoMap load Error", error);
      });
  }, []);
  return <div id="map" className="w-full h-screen"></div>;
};

export default Map;
