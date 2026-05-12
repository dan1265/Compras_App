import { Link } from "react-router-dom"

import { signOut } from "@/services/authService"

export default function DashboardLayout({ children }) {

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      <aside className="w-64 bg-zinc-900 p-4 flex flex-col gap-4">

        <h1 className="text-2xl font-bold mb-6">
          Compras App
        </h1>

        <Link to="/">
          Home
        </Link>

        <Link to="/inventory">
          Inventory
        </Link>

        <Link to="/shopping">
          Shopping
        </Link>

        <Link to="/prices">
          Prices
        </Link>

        <Link to="/settings">
          Settings
        </Link>

        <button
        onClick={signOut}
        className="mt-auto p-3 bg-red-500 rounded"
        >
        Logout
        </button>

      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  )
}