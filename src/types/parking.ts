export interface Parking {
  PKLT_CD: string; // 주차장 코드
  PKLT_NM: string; // 주차장 이름
  ADDR: string; // 주소
  PKLT_TYPE: string; // 노상/노외 주차장 종류
  TPKCT: number; // 총 주차 면수
  NOW_PRK_VHCL_CNT: number; // 현재 주차 차량 수
  PAY_YN_NM: string; // 유료/무료 여부
  WD_OPER_BGNG_TM: string; // 평일 운영 시작 시간
  WD_OPER_END_TM: string; // 평일 운영 종료 시간
  WE_OPER_BGNG_TM: string; // 주말 운영 시작 시간
  WE_OPER_END_TM: string; // 주말 운영 종료 시간
  DAY_MAX_CRG: number; // 일 최대 요금
  BSC_PRK_CRG: number; // 기본 요금
  ADD_PRK_CRG: number; // 추가 요금
  PRD_AMT: number; // 정기권 금액
  NGHT_PAY_YN_NM: string; // 야간 개방 여부
  TELNO: string; // 전화번호
  LAT: number; // 위도
  LOT: number; // 경도
}

// Parking 타입에서 일부 속성만 선택적으로 사용
export type SideNavigationParking = Pick<
  Parking,
  "PKLT_CD" | "PKLT_NM" | "ADDR" | "PKLT_TYPE" | "PAY_YN_NM" | "BSC_PRK_CRG"
>;

export interface GroupedParking {
  PKLT_CD: string;
  PKLT_NM: string;
  ADDR: string;
  PKLT_TYPE: string;
  PAY_YN_NM: string;
  BSC_PRK_CRG: number;
  items: Parking[]; // 그룹 내 주차장 데이터
  TOTAL_CNT: number; // 총 자리 수
  AVAILABLE_CNT: number; // 사용 가능한 자리 수
}
