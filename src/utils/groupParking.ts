import { calCoorAve } from "./distance";
import { Parking, GroupedParking } from "@/types/parking";

const groupParking = (parkingData: Parking[]): GroupedParking[] => {
  const groupedData = parkingData.reduce((acc: GroupedParking[], current: Parking) => {
    const existingGroup = acc.find(group => group.PKLT_CD === current.PKLT_CD);

    if (existingGroup) {
      // 기존 그룹에 주차장 추가
      existingGroup.items.push(current);
      if (current.PKLT_TYPE === "NS") {
        // 노상주차장(NS)의 경우, 총 자리 수는 증가시킴
        existingGroup.TOTAL_CNT += 1;
      }
    } else {
      const isOnStreet = current.PKLT_TYPE === "NS";
      acc.push({
        PKLT_CD: current.PKLT_CD,
        PKLT_NM: current.PKLT_NM,
        ADDR: current.ADDR,
        PKLT_TYPE: current.PKLT_TYPE,
        PAY_YN_NM: current.PAY_YN_NM,
        BSC_PRK_CRG: current.BSC_PRK_CRG,
        items: [current],
        TOTAL_CNT: isOnStreet ? 1 : current.TPKCT, // 노상주차장은 자리 수 1부터 시작
        AVAILABLE_CNT: isOnStreet ? current.NOW_PRK_VHCL_CNT : current.NOW_PRK_VHCL_CNT, // 노상주차장(NOW_PRK_VHCL_CNT)은 하나만 가져옴
      });
    }

    return acc;
  }, []);

  // 각 그룹의 평균 위경도 계산
  return groupedData.map(group => {
    const { LAT, LOT } = calCoorAve(group.items);

    // 노상 주차장(NS)의 경우 총 자리와 NOW_PRK_VHCL_CNT를 그룹화된 데이터에서 하나 가져옴
    if (group.PKLT_TYPE === "NS") {
      return {
        ...group,
        LAT,
        LOT,
        NOW_PRK_VHCL_CNT: group.AVAILABLE_CNT,
        TPKCT: group.TOTAL_CNT, // 그룹화된 총 자리 수
      };
    } else {
      // 노외 주차장(NW)은 기존 값 그대로 사용
      return {
        ...group,
        LAT,
        LOT,
        NOW_PRK_VHCL_CNT: group.AVAILABLE_CNT,
        TPKCT: group.TOTAL_CNT,
      };
    }
  });
};

export default groupParking;
