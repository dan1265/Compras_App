import { useState } from "react"
import { useAuthContext } from "@/contexts/AuthContext"
import { createHousehold } from "@/services/householdService"

export default function CreateHouseholdPage() {

  const { user } = useAuthContext()

  const [name, setName] = useState("")

  async function handleCreate() {

    const { error } = await createHousehold(
      user.id,
      name
    )

    if (error) {
      alert(error.message)
      return
    }

    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">

      <div className="w-full max-w-sm space-y-4">

        <h1 className="text-3xl font-bold">
          Create Household
        </h1>

        <input
          className="w-full p-3 rounded bg-zinc-800"
          placeholder="Household Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="w-full p-3 bg-white text-black rounded"
        >
          Create
        </button>

      </div>

    </div>
  )
}