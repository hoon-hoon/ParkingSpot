import { SideNavigationParking } from "../../../types/parking";

const ParkingItem = ({ parking }: { parking: SideNavigationParking }) => {
  return (
    <div className=" border-t pt-4 pb-4 p-1 hover:bg-gray-100 transition-colors duration-200">
      <h3 className="text-primary-light text-lg font-medium mb-1">
        {parking.name}
      </h3>
      <p className="text-gray-500 text-sm">
        {parking.address} / {parking.type} / {parking.paymentType} /{" "}
        {parking.baseCharge}
      </p>
      <a href="#" className="text-primary-light text-sm mt-1">
        상세보기
      </a>
    </div>
  );
};

export default ParkingItem;
