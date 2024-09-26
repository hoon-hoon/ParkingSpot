import { create } from "zustand";

interface ParkingStore {
  parkingData: any[]; // 전체 주차장 데이터
  setParkingData: (data: any[]) => void;
}

export const useParkingStore = create<ParkingStore>((set) => ({
  parkingData: [],
  setParkingData: (data) => set({ parkingData: data }),
}));
