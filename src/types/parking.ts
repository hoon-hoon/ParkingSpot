export interface Parking {
  id: string; // 주차장 코드 (PKLT_CD)
  name: string; // 주차장 이름 (PKLT_NM)
  address: string; // 주소 (ADDR)
  type: string; // 노상/노외 (PKLT_TYPE)
  totalSpaces: number; // 총 주차 면수 (TPKCT)
  currentVehicles: number; // 현재 주차 차량 수 (NOW_PRK_VHCL_CNT)
  paymentType: string; // 유료/무료 여부 명칭 (PAY_YN_NM)
  weekdayOpen: string; // 평일 운영 시작 시각 (WD_OPER_BGNG_TM)
  weekdayClose: string; // 평일 운영 종료 시각 (WD_OPER_END_TM)
  weekendOpen: string; // 주말 운영 시작 시각 (WE_OPER_BGNG_TM)
  weekendClose: string; // 주말 운영 종료 시각 (WE_OPER_END_TM)
  maxCharge: number; // 일 최대 요금 (DAY_MAX_CRG)
  baseCharge: number; // 기본 금액 (BSC_PRK_CRG)
  additionalCharge: number; // 추가 금액 (ADD_PRK_CRG)
  subscriptionFee: number; // 정기권 금액 (PRD_AMT)
  nightOpen: string; // 야간 개방 여부 (NGHT_PAY_YN_NM)
  phone: string; // 전화번호 (TELNO)
  lat: number; // 위도 (LAT)
  lon: number; // 경도 (LOT)
}

// Parking 타입에서 일부 속성만 선택적으로 사용
export type SideNavigationParking = Pick<
  Parking,
  "id" | "name" | "address" | "type" | "paymentType" | "baseCharge"
>;
