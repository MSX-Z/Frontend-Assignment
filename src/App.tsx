import CartPage from "@/features/cart/components/pages/CartPage"
import UserPage from "@/features/user/components/pages/UserPage"

function App() {

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 divide-x">
      <CartPage/>
      <UserPage/>
    </div>
  )
}

export default App
