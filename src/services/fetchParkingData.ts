const districts = [
  "중구",
  "종로구",
  "용산구",
  "성동구",
  "광진구",
  "동대문구",
  "중랑구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "은평구",
  "서대문구",
  "마포구",
  "양천구",
  "강서구",
  "구로구",
  "금천구",
  "영등포구",
  "동작구",
  "관악구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
];

export const fetchParkingData = async (start: number, end: number) => {
  const API_KEY = import.meta.env.VITE_PARKING_LOT_API_KEY;
  const BASE_URL = `/api/${API_KEY}/json/GetParkingInfo`;

  let entireParking: any[] = [];

  for (const district of districts) {
    try {
      const response = await fetch(
        `${BASE_URL}/${start}/${end}/${encodeURIComponent(district)}`
      );
      const data = await response.json();

      if (data.GetParkingInfo && data.GetParkingInfo.row) {
        console.log(`${district}에서 주차장 데이터를 불러왔습니다.`);
        entireParking = entireParking.concat(data.GetParkingInfo.row);
      }
    } catch (error) {
      console.error(`${district}에서 데이터를 가져오는 중 오류 발생:`, error);
    }
  }

  return entireParking;
};
