import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import InventoryPage from "@/pages/InventoryPage"
import ShoppingPage from "@/pages/ShoppingPage"
import PricesPage from "@/pages/PricesPage"
import SettingsPage from "@/pages/SettingsPage"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}