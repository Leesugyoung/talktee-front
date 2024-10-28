interface UserBasicProfileIconProps {
  name: string;
}
/**
 * @title 사용자 > 기본 프로필 아이콘
 */
export const UserBasicProfileIcon: React.FC<UserBasicProfileIconProps> = ({
  name,
}) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div
        className="rounded-full"
        style={{ width: "8rem", height: "8rem", backgroundColor: "#c7c7c7" }}
      />

      <div className="flex flex-col justify-center gap-1">
        <div className="mx-auto text-lg font-medium">{name}님 </div>
        <div className="mx-auto text-lg font-medium">안녕하세요!</div>
      </div>
    </div>
  );
};
