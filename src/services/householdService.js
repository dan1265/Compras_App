import { supabase } from "@/lib/supabase"

export async function createHousehold(userId, householdName) {

  const { data: household, error: householdError } = await supabase
    .from("households")
    .insert({
      name: householdName,
    })
    .select()
    .single()

  if (householdError) {
    return { error: householdError }
  }

  const { error: memberError } = await supabase
    .from("household_members")
    .insert({
      household_id: household.id,
      user_id: userId,
      role: "owner",
    })

  if (memberError) {
    return { error: memberError }
  }

  return {
    data: household,
    error: null,
  }
}

export async function getUserHousehold(userId) {

  const { data, error } = await supabase
    .from("household_members")
    .select(`
      household_id,
      households (
        id,
        name
      )
    `)
    .eq("user_id", userId)
    .single()

  if (error) {
    return { data: null, error }
  }

  return {
    data,
    error: null,
  }
}