export const fetchParkingData = async (start: number, end: number) => {
  const API_KEY = import.meta.env.VITE_PARKING_LOT_API_KEY;
  // const BASE_URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/GetParkingInfo`;
  const BASE_URL = `/api/${API_KEY}/json/GetParkingInfo`;

  try {
    const response = await fetch(
      `${BASE_URL}/${start}/${end}/${encodeURIComponent("중구")}`
    );
    const data = await response.json();

    if (data.GetParkingInfo) {
      console.log("주차장 api 호출됨");

      return data.GetParkingInfo.row;
    } else {
      throw new Error("API 응답에 데이터가 없습니다.");
    }
  } catch (error) {
    console.error("주차장 데이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
};
