import { UserBasicProfileIcon } from "../../share";

const HeaderSliceMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="h-screen w-500 bg-black bg-opacity-75 z-50 flex justify-end items-center"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="h-screen w-400 bg-white"
      >
        <div className="p-5 h-screen flex justify-between flex-col">
          <div>
            {/* 닫기 버튼  */}
            <div className="flex justify-end">
              <button onClick={onClose}>
                <i
                  className="fa-solid fa-x fa-2xl"
                  style={{ color: "#969696" }}
                ></i>
              </button>
            </div>
            <div className="h-8 w-auto" />
            {/* 사용자 아이콘  */}
            <div className="flex justify-center">
              <UserBasicProfileIcon name={"OO"} />
            </div>
            {/* 메뉴 리스트 */}
            <div className="grid grid-cols-1 divide-y mt-2">
              <div className="flex items-center justify-start h-20 pl-5">
                채팅 기록
              </div>

              <div className="flex items-center justify-start h-20 pl-5">
                북마크
              </div>
              <div className="flex items-center justify-start h-20 pl-5">
                마이페이지
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => window.alert("로그아웃!")}>
              로그아웃
              <i
                className="fa-solid fa-chevron-right ml-2.5"
                style={{ color: "#1f3951" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSliceMenu;
