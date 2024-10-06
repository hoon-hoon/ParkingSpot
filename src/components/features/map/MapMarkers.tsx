import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { Parking } from "@/types";
import { FavoriteBtn } from "@/components";
import { useParkingStore } from "@/stores";

interface Props {
  mapInstance: any;
  parkingData: Parking[];
}

const MapMarkers = ({ mapInstance, parkingData }: Props) => {
  const [activeOverlay, setActiveOverlay] = useState<any>(null);
  const { selectedParking } = useParkingStore(); // Zustand에서 클릭된 주차장 정보 가져오기
  const markers = useRef<{ marker: any; overlay: any; PKLT_CD: string }[]>([]);

  useEffect(() => {
    var imageSrc = "/images/parkingIcon.svg",
      imageSize = new window.kakao.maps.Size(20, 20),
      imageOption = { offset: new window.kakao.maps.Point(10, 20) };

    // 지도 클릭 시 활성화된 오버레이 닫기
    const handleMapClick = () => {
      if (activeOverlay) {
        activeOverlay.setMap(null);
        setActiveOverlay(null);
      }
    };

    window.kakao.maps.event.addListener(mapInstance, "click", handleMapClick);

    parkingData.forEach((parking) => {
      var markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
        markerPosition = new window.kakao.maps.LatLng(parking.LAT, parking.LOT);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: mapInstance,
        image: markerImage,
      });

      const overlayContent = document.createElement("div");
      overlayContent.className =
        "custom-overlay p-5 bg-white shadow-lg rounded-lg relative cursor-default";
      overlayContent.innerHTML = `
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold text-blue-600">${parking.PKLT_NM}</h3>
          <div id="favorite-btn-${parking.PKLT_CD}" class="ml-2"></div>
        </div>
        <div class="flex items-center mb-2">
          <p class="text-sm text-gray-600 mr-1">${parking.ADDR}</p>
          <img src="/images/kakaoMapIcon.svg" alt="카카오맵" class="w-4 h-4 mr-1" />
          <img src="/images/naverMapIcon.svg" alt="네이버맵" class="w-4 h-4 mr-1" />
        </div>
        <p class="text-sm text-gray-600 mb-2">기본요금: ${parking.BSC_PRK_CRG}원</p>
        <span class="text-base font-medium text-blue-500 mb-2">현재 주차 가능: ${parking.NOW_PRK_VHCL_CNT}/${parking.TPKCT}대</span>
        <a href="#" class="text-sm text-blue-400 hover:underline absolute right-0 bottom-0 p-4">상세보기</a>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: overlayContent,
        xAnchor: 0.5,
        yAnchor: 1.3,
        zIndex: 9999,
      });

      overlay.setMap(null);

      window.kakao.maps.event.addListener(marker, "click", () => {
        if (activeOverlay) {
          activeOverlay.setMap(null);
        }
        overlay.setMap(mapInstance);
        setActiveOverlay(overlay);

        const favoriteBtnElement = document.getElementById(
          `favorite-btn-${parking.PKLT_CD}`
        );
        if (favoriteBtnElement) {
          favoriteBtnElement.innerHTML = "";
          const favoriteBtn = document.createElement("div");
          favoriteBtnElement.appendChild(favoriteBtn);

          const root = createRoot(favoriteBtn);
          root.render(<FavoriteBtn parkingCode={parking.PKLT_CD} />);
        }

        var moveLatLon = new window.kakao.maps.LatLng(parking.LAT, parking.LOT);
        mapInstance.panTo(moveLatLon);
      });

      overlayContent.addEventListener("mousedown", (e) => {
        e.stopPropagation();
      });
      overlayContent.addEventListener("dblclick", (e) => {
        e.stopPropagation();
      });

      overlayContent.style.minWidth = "300px";
      overlayContent.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
      overlayContent.style.cursor = "default";
      overlayContent.style.borderRadius = "10px";
      overlayContent.style.padding = "16px";
      markers.current.push({ marker, overlay, PKLT_CD: parking.PKLT_CD });
    });

    return () => {
      markers.current.forEach(({ marker }) => marker.setMap(null));
      markers.current = [];
    };
  }, [mapInstance, parkingData, activeOverlay]);

  useEffect(() => {
    console.log("selectedParking:", selectedParking);

    if (selectedParking) {
      const targetMarker = markers.current.find(
        ({ PKLT_CD }) => PKLT_CD === selectedParking.PKLT_CD
      );
      if (targetMarker && targetMarker.overlay) {
        console.log(targetMarker);
        // 오버레이 열기
        if (activeOverlay) {
          activeOverlay.setMap(null);
        }
        targetMarker.overlay.setMap(mapInstance);
        setActiveOverlay(targetMarker.overlay);
        const moveLatLon = new window.kakao.maps.LatLng(
          selectedParking.LAT,
          selectedParking.LOT
        );
        mapInstance.panTo(moveLatLon);
      }
    }
  }, [selectedParking]);

  return null;
};

export default MapMarkers;
