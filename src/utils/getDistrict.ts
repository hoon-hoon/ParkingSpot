// 자치구 정보에서 구 이름만 추출하는 함수
const extractDistrict = (addressName: string): string | null => {
  const splitAddress = addressName.split(" ");
  // 자치구는 주소의 세 번째 부분이므로 이를 반환
  return splitAddress.length > 1 ? splitAddress[1] : null;
};

const getDistrict = (
  latitude: number,
  longitude: number,
  callback: (districtName: string | null) => void
) => {
  if (!window.kakao || !window.kakao.maps) {
    console.error("Kakao Maps services not loaded");
    callback(null);
    return;
  }

  const geocoder = new window.kakao.maps.services.Geocoder();

  // 좌표를 이용해 자치구 정보 가져오기
  geocoder.coord2RegionCode(longitude, latitude, (result: any, status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const region = result.find((r: any) => r.region_type === "H");
      if (region) {
        const districtOnly = extractDistrict(region.address_name); // 구 이름만 추출
        callback(districtOnly); // 구 이름을 콜백으로 전달
      } else {
        callback(null);
      }
    } else {
      console.error("Failed to fetch district information");
      callback(null);
    }
  });
};

export default getDistrict;
