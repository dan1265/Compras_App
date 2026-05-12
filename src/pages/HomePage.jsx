import { useEffect, useState } from "react"

import { useAuthContext } from "@/contexts/AuthContext"

import CreateHouseholdPage from "./CreateHouseholdPage"

import { getUserHousehold } from "@/services/householdService"

import DashboardLayout from "@/layouts/DashboardLayout"

export default function HomePage() {

  const { user } = useAuthContext()

  const [household, setHousehold] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadHousehold() {

      if (!user) return

      const { data } = await getUserHousehold(user.id)

      setHousehold(data)

      setLoading(false)
    }

    loadHousehold()

  }, [user])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    )
  }

  if (!household) {
    return <CreateHouseholdPage />
  }

  return (
  <DashboardLayout>

    <div className="space-y-4">

      <h1 className="text-4xl font-bold">
        {household.households.name}
      </h1>

      <p className="text-zinc-400">
        {user.email}
      </p>

    </div>

  </DashboardLayout>
)
}