import { SideNavigation } from "@/components";
import { Map } from "@/components";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* 사이드 네비게이션 */}
      <div className="w-1/3 h-screen bg-white p-4">
        <SideNavigation />
      </div>
      {/* 메인 지도 영역 */}
      <main className="w-2/3 bg-blue-100">
        <Map />
      </main>
    </div>
  );
};

export default HomePage;
