import { Parking } from "@/types";

const filterParking = (
  parkingData: Parking[],
  districtName: string,
  activeFilters: {
    paid: boolean;
    free: boolean;
    onStreet: boolean;
    offStreet: boolean;
    available: boolean;
  }
) => {
  // 자치구 이름으로 주차장 필터링
  let filteredParking = parkingData.filter((parking) =>
    parking.ADDR.includes(districtName)
  );

  // 플로팅 버튼으로 주차장 필터링
  if (activeFilters.paid) {
    filteredParking = filteredParking.filter(
      (parking) => parking.PAY_YN_NM === "유료"
    );
  }
  if (activeFilters.free) {
    filteredParking = filteredParking.filter(
      (parking) => parking.PAY_YN_NM === "무료"
    );
  }
  if (activeFilters.onStreet) {
    filteredParking = filteredParking.filter(
      (parking) => parking.PKLT_TYPE === "NS"
    );
  }
  if (activeFilters.offStreet) {
    filteredParking = filteredParking.filter(
      (parking) => parking.PKLT_TYPE === "NW"
    );
  }
  if (activeFilters.available) {
    filteredParking = filteredParking.filter(
      (parking) => parking.NOW_PRK_VHCL_CNT > 0
    );
  }

  return filteredParking;
};

export default filterParking;
