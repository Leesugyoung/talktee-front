const HeaderSliceMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="h-screen w-500 bg-black bg-opacity-75 z-50 flex justify-end items-center"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="h-screen w-400 bg-white"
      ></div>
    </div>
  );
};

export default HeaderSliceMenu;
