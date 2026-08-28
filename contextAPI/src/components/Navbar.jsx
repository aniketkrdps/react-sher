import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {
  let { toggle, setToggle } = useContext(MyStore)

  const tab = 'relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 '
  const on = 'bg-white text-slate-900 shadow-md'
  const off = 'text-slate-300 hover:bg-white/10 hover:text-white'

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2.5 shadow-xl shadow-indigo-900/30 backdrop-blur-xl">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 text-lg shadow-lg shadow-fuchsia-500/30 ring-1 ring-white/20">
            👤
          </span>
          <span className="hidden text-base font-semibold tracking-tight text-white sm:block">
            Shop<span className="text-fuchsia-400">ly</span>
          </span>
        </a>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setToggle(true)}
            className={tab + (toggle ? on : off)}>
            <span className="text-base leading-none">🏠</span>
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            onClick={() => setToggle(false)}
            className={tab + (toggle ? off : on)}>
            <span className="text-base leading-none">🛒</span>
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>

        <button className="group relative shrink-0 overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 hover:scale-105 active:scale-95">
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">Login</span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar