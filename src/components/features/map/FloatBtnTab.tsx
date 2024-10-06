import { FloatingBtn } from "@/components";
import { FloatingBtnTabProps } from "@/types";

const FloatingBtnTab = ({
  activeFilters,
  setActiveFilters,
}: FloatingBtnTabProps) => {
  const toggleFilter = (filterKey: keyof typeof activeFilters) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  return (
    <div className="relative top-5 left-5 flex space-x-2 z-[9999]">
      <FloatingBtn
        label="유료"
        icon={
          activeFilters.paid
            ? "/floatBtn/paid_active.svg"
            : "/floatBtn/paid.svg"
        }
        isActive={activeFilters.paid}
        onClick={() => toggleFilter("paid")}
        bgColor={activeFilters.paid ? "bg-[#FFBC3B]" : "bg-white"}
      />

      <FloatingBtn
        label="무료"
        icon={
          activeFilters.free
            ? "/floatBtn/free_active.svg"
            : "/floatBtn/free.svg"
        }
        isActive={activeFilters.free}
        onClick={() => toggleFilter("free")}
        bgColor={activeFilters.free ? "bg-[#3BA1FF]" : "bg-white"}
      />

      <FloatingBtn
        label="노상"
        icon={
          activeFilters.onStreet
            ? "/floatBtn/onStreet_active.svg"
            : "/floatBtn/onStreet.svg"
        }
        isActive={activeFilters.onStreet}
        onClick={() => toggleFilter("onStreet")}
        bgColor={activeFilters.onStreet ? "bg-[#22C8AA]" : "bg-white"}
      />

      <FloatingBtn
        label="노외"
        icon={
          activeFilters.offStreet
            ? "/floatBtn/offStreet_active.svg"
            : "/floatBtn/offStreet.svg"
        }
        isActive={activeFilters.offStreet}
        onClick={() => toggleFilter("offStreet")}
        bgColor={activeFilters.offStreet ? "bg-[#2F8B6F]" : "bg-white"}
      />

      <FloatingBtn
        label="현재 주차 가능"
        icon={
          activeFilters.available
            ? "/floatBtn/available_active.svg"
            : "/floatBtn/available.svg"
        }
        isActive={activeFilters.available}
        onClick={() => toggleFilter("available")}
        bgColor={activeFilters.available ? "bg-cyan-500" : "bg-white"}
      />
    </div>
  );
};

export default FloatingBtnTab;
