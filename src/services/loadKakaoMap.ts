export const loadKakaoMap = (mapElementId: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById(mapElementId);
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 5,
        };
        const map = new window.kakao.maps.Map(mapContainer, options);
        resolve(map);
      });
    };

    script.onerror = () => reject("Kakao Map failed to load");
    document.head.appendChild(script);
  });
};
