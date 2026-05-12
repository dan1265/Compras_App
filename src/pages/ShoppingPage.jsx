import { useEffect, useState } from "react"

import DashboardLayout from "@/layouts/DashboardLayout"

import { useAuthContext } from "@/contexts/AuthContext"

import { getUserHousehold } from "@/services/householdService"

import {
  createShoppingItem,
  getShoppingItems,
  toggleShoppingItem,
  deleteShoppingItem,
} from "@/services/shoppingService"


export default function ShoppingPage() {

  const { user } = useAuthContext()

  const [household, setHousehold] = useState(null)

  const [items, setItems] = useState([])

  const [text, setText] = useState("")

  const LIST_ID = "5bec1b74-fcdb-425f-995c-4f4f897581bb"

  useEffect(() => {

    async function loadData() {

      const { data: householdData } =
        await getUserHousehold(user.id)

      setHousehold(householdData)

      const { data: itemsData } =
        await getShoppingItems(LIST_ID)

      setItems(itemsData || [])
    }

    loadData()

  }, [])

  async function handleAdd() {

    if (!text.trim()) return

    const { error } = await createShoppingItem(
        LIST_ID,
        text
    )

    console.log(error)

    setText("")
  }

  console.log(items)

  return (
    <DashboardLayout>

      <div className="max-w-xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold text-white">
          Shopping List
        </h1>

        <div className="flex gap-2">

          <input
            className="flex-1 p-3 rounded bg-zinc-800 text-white"
            placeholder="Add product..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="px-4 bg-white text-black rounded"
          >
            Add
          </button>

        </div>

        <div className="space-y-2">

          {items.map((item) => (

            <div
                key={item.id}
                className={`
                    flex items-center gap-2 p-4 rounded
                    ${item.completed
                    ? "bg-green-900 opacity-60"
                    : "bg-zinc-900"}
                `}
                >

                <button
                    onClick={async () => {

                    await toggleShoppingItem(
                        item.id,
                        !item.completed
                    )

                    const { data } =
                        await getShoppingItems(LIST_ID)

                    setItems(data || [])
                    }}
                    className="flex-1 text-left"
                >
                    <span className={
                    item.completed
                        ? "line-through"
                        : ""
                    }>
                    {item.product_name}
                    </span>
                </button>

                <button
                    onClick={async () => {

                    await deleteShoppingItem(item.id)

                    const { data } =
                        await getShoppingItems(LIST_ID)

                    setItems(data || [])
                    }}
                    className="px-2 text-red-400"
                >
                    X
                </button>

                </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  )
}

