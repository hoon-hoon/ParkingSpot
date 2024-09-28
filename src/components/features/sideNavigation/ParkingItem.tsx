import { SideNavigationParking } from "@/types";

const ParkingItem = ({ parking }: { parking: SideNavigationParking }) => {
  return (
    <div className=" border-t pt-4 pb-4 p-1 hover:bg-gray-100 transition-colors duration-200">
      <h3 className="text-primary-light text-lg font-medium mb-1">
        {parking.PKLT_NM}
      </h3>
      <p className="text-gray-500 text-sm">
        {parking.ADDR} / {parking.PKLT_TYPE} / {parking.PAY_YN_NM} /{" "}
        {parking.BSC_PRK_CRG}
      </p>
      <a href="#" className="text-primary-light text-sm mt-1">
        상세보기
      </a>
    </div>
  );
};

export default ParkingItem;
