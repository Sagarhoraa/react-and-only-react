import { AuthProvider } from "./Contexts/AuthContext";
import Dashboard from "./Components/Dashboard";  
  function App(){
  return (
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
  )
}
export default App;