import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row w-full shadow-sm p-2 items-center">
      <Link href="/" className="flex flex-row items-center">
        <img src="/main/dash.svg" alt="logo" className="w-12 mr-4" />
        <span className="text-3xl font-bold">Dash</span>
      </Link>
    </div>
  );
}
