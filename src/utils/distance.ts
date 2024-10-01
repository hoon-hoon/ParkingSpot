import { Parking } from "@/types";

// 위경도 떨어져있는 거리 계산
export const calDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const earthRadius = 6371; // 지구의 반지름 (단위: km)
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c; // 거리 (단위: km)
};

// 그룹 내 주차장들의 위경도 평균 계산
export const calCoorAve = (parkingItems: Parking[]) => {
  const total = parkingItems.reduce(
    (acc, item) => {
      acc.lat += item.LAT;
      acc.lon += item.LOT;
      return acc;
    },
    { lat: 0, lon: 0 }
  );

  const averageLat = total.lat / parkingItems.length;
  const averageLon = total.lon / parkingItems.length;

  return { LAT: averageLat, LOT: averageLon };
};
