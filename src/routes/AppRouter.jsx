import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import InventoryPage from "@/pages/InventoryPage"
import ShoppingPage from "@/pages/ShoppingPage"
import PricesPage from "@/pages/PricesPage"
import SettingsPage from "@/pages/SettingsPage"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inventory" element={<ProtectedRoute><InventoryPage /></ProtectedRoute>} />
        <Route path="/shopping" element={<ProtectedRoute><ShoppingPage /></ProtectedRoute>} />
        <Route path="/prices" element={<ProtectedRoute><PricesPage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}