import Link from "next/link";
export default function Login() {
  return (
    <div className="flex flex-col space-y-6 w-full h-full justify-center items-center">
      <span className="text-4xl font-bold">Dash에 로그인하세요</span>
      <div className="grid grid-rows bg-white shadow-xl rounded-4xl p-4 w-120 space-y-4">
        <input
          className="w-full border-1 rounded-4xl h-14 text-2xl text-start pl-4"
          placeholder="아이디"
        />
        <input
          className="w-full border-1 rounded-4xl h-14 text-2xl text-start pl-4"
          placeholder="비밀번호"
        />
        <div className="flex flex-col w-full items-center space-y-4">
          <Link href="/dashboard">
            <button className="w-40 bg-black text-white rounded-4xl h-14 text-2xl hover:cursor-pointer">
              로그인
            </button>
          </Link>
          <div className="flex flex-row space-x-2">
            <span>계정이 없으신가요?</span>
            <Link href="/signup">
              <span className="text-blue-500">회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
