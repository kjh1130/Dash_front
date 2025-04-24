export default function DashSidebar() {
  return (
    <aside className="group sidebar flex flex-col border-r items-start h-full bg-white text-black transition-all duration-300 ease-in-out hover:w-60 w-16 overflow-hidden">
      <nav className="flex flex-col space-y-2">
        <a
          href="/dashboard"
          className="flex flex-row px-2 py-2 w-full hover:bg-[#75757D] hover:text-white rounded items-center gap-4 font-apple"
        >
          <img src="/main/note.svg" alt="notes" className="w-12" />
          Notes
        </a>
        <a
          href="/dashboard/environmental"
          className="flex flex-row px-2 py-2 hover:bg-[#75757D] hover:text-white rounded items-center gap-4 font-apple"
        >
          <img src="/main/calendar.svg" alt="calendar" className="w-12" />
          Calendar
        </a>
        <a
          href="/dashboard/social"
          className="flex flex-row px-2 py-2 hover:bg-[#75757D] hover:text-white rounded items-center gap-4 font-apple"
        >
          <img src="/main/list.svg" alt="list" className="w-12" />
          TodoList
        </a>
        <a
          href="/dashboard/governance"
          className="flex flex-row px-2 py-2 hover:bg-[#75757D] hover:text-white rounded items-center gap-4 font-apple"
        >
          <img src="/main/search.svg" alt="search" className="w-12" />
          Search
        </a>
      </nav>
    </aside>
  );
}
