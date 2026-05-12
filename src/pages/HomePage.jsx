import { useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function HomePage() {

  useEffect(() => {
    async function loadProducts() {

      const { data, error } = await supabase
        .from("products")
        .select("*")

      console.log("DATA:", data)
      console.log("ERROR:", error)
    }

    loadProducts()
  }, [])

  return (
    <div className="dark min-h-screen bg-background text-foreground flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Home Page
      </h1>
    </div>
  )
}