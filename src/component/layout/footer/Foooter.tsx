const Footer = () => {
  return (
    <footer className="p-2 pl-10 pr-10 h-70 text-white flex items-center justify-between">
      {/* --- 홈 --- */}
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center">
          <i className="fa-solid fa-house fa-xl" style={{ color: "#d6d8e0" }} />
        </div>
        <div>
          <p className="font-semibold text-gray-300 text-sm">홈</p>
        </div>
      </div>

      {/* --- 톡톡 --- */}
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center">
          <i className="fa-solid fa-robot fa-xl" style={{ color: "#d6d8e0" }} />
        </div>
        <div>
          <p className="font-semibold text-gray-300 text-sm">톡톡</p>
        </div>
      </div>

      {/* --- 채팅기록 --- */}
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center">
          <i
            className="fa-solid fa-comment fa-xl"
            style={{ color: "#d6d8e0" }}
          />
        </div>
        <div>
          <p className="font-semibold text-gray-300 text-sm">채팅기록</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
