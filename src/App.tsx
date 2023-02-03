import AuthContextProvider from "./context/AuthContext"
import ThemeContextProvider from "./context/ThemeContext"
import TransactionContextProvider from "./context/TransactionContext"
import DashPage from "./pages/DashPage"

function App() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <TransactionContextProvider>
          <>
            <DashPage />
            <div className="lg:hidden flex items-center justify-center h-screen max-w-[500px] text-center mx-auto px-8">
              <span className="text-md semibold">You have to be on a larger screen of aleast <span className="font-bold">1024px</span> to view this dashboard</span>
            </div>
          </>
        </TransactionContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export default App
