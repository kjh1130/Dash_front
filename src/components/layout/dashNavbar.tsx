import Link from "next/link";

export default function DashNavBar() {
  return (
    <div className="flex flex-row w-full shadow-sm p-2 items-center justify-between">
      <Link href="/" className="flex flex-row items-center">
        <img src="/main/dash.svg" alt="logo" className="w-12 mr-4" />
        <span className="text-3xl font-bold">Dash</span>
      </Link>
      <div className="flex flex-row gap-4">
        <Link href="/">
          <button className="flex w-24 h-12 bg-black text-white justify-center items-center rounded-4xl hover:cursor-pointer">
            로그아웃
          </button>
        </Link>
        <Link href="/mypage">
          <button className="flex w-12 h-12 bg-black rounded-4xl hover:cursor-pointer"></button>
        </Link>
      </div>
    </div>
  );
}
