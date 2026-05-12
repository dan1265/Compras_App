import { supabase } from "@/lib/supabase"

export async function createShoppingList(householdId, name) {

  return await supabase
    .from("shopping_lists")
    .insert({
      household_id: householdId,
      name,
    })
    .select()
    .single()
}

export async function getShoppingLists(householdId) {

  return await supabase
    .from("shopping_lists")
    .select("*")
    .eq("household_id", householdId)
}

export async function createShoppingItem(listId, productName) {

  return await supabase
    .from("shopping_items")
    .insert({
      shopping_list_id: listId,
      product_name: productName,
    })
}

export async function getShoppingItems(listId) {

  return await supabase
    .from("shopping_items")
    .select("*")
    .eq("shopping_list_id", listId)
    .order("completed")
    .order("created_at")
}

export async function toggleShoppingItem(id, completed) {

  return await supabase
    .from("shopping_items")
    .update({
      completed,
    })
    .eq("id", id)
}

export async function deleteShoppingItem(id) {

  return await supabase
    .from("shopping_items")
    .delete()
    .eq("id", id)
}