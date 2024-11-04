import React from "react";
import { UserBasicProfileIcon } from "../../share";
import { MenuItem, menuList } from "./tools";
import { v4 } from "uuid";

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
                  className="fa-solid fa-x fa-xl"
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
              {menuList?.map(i => (
                <React.Fragment key={v4()}>
                  <MenuItem title={i?.title} link={i.link} />
                </React.Fragment>
              ))}
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
