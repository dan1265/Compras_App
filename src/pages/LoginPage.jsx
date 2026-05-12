import { useState } from "react"
import { signIn, signUp } from "@/services/authService"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp() {

    const { error } = await signUp(email, password)

    if (error) {
      alert(error.message)
      return
    }

    alert("Cuenta creada")
  }

  async function handleSignIn() {

    const { error } = await signIn(email, password)

    if (error) {
      alert(error.message)
      return
    }

    alert("Sesión iniciada")
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground flex items-center justify-center">

      <div className="w-full max-w-sm space-y-4">

        <h1 className="text-3xl font-bold">
          Login
        </h1>

        <input
          className="w-full p-3 rounded bg-zinc-800"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-white text-black rounded"
        >
          Sign In
        </button>

        <button
          onClick={handleSignUp}
          className="w-full p-3 bg-zinc-700 rounded"
        >
          Sign Up
        </button>

      </div>

    </div>
  )
}