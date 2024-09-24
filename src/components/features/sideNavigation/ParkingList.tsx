import ParkingItem from "./ParkingItem";

const parkingData = [
  {
    id: 1,
    name: "효원빌딩주차장",
    address: "서울 송파구 가락동",
    type: "노상",
    price: "9000원",
  },
  {
    id: 2,
    name: "가락ID타워 주차장",
    address: "서울 송파구 가락동",
    type: "노상",
    price: "무료",
  },
];

const ParkingList = () => {
  return (
    <div>
      <p className="text-lg p-1 mb-2 font-medium">송파구 근처 주차장이에요.</p>
      {parkingData.map((parking) => (
        <ParkingItem key={parking.id} parking={parking} />
      ))}
    </div>
  );
};

export default ParkingList;
