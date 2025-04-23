import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-white space-y-4">
      <div className="flex flex-row w-full justify-center items-center">
        <img src="/main/dash.svg" alt="icon" className="h-24 mr-4" />
        <span className="text-black text-5xl">Welcome to Dash</span>
      </div>
      <Link href="/login">
        <button className="w-40 h-14 bg-black text-white text-3xl rounded-4xl text-center items-center hover:cursor-pointer">
          Start
        </button>
      </Link>
    </div>
  );
}
