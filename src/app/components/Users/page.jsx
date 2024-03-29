import React from "react";
import UserInformation from "./UserInformation";

const user = {
  name: "サンプル ユーザー",
  age: 25,
  avatar: "/avatar.jpg", // 画像のパスを実際のデータに置き換えてください
  height: 160,
  weight: 50,
};

const Page = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-8">ユーザー情報</h1>
        <UserInformation user={user} />
      </div>

      <div className="flex justify-center">
        <a href="/" className="font-bold text-blue-700 mt-5">
          TOPへ戻る
        </a>
      </div>
    </>
  );
};

export default Page;
