import { useState } from "react"
import SearchForm from "./components/form/SearchForm"
import UserProfile from "./components/user/UserProfile"


function App() {
  const [userName, setUserName] = useState<string>("")

  return (
    <div className="App">
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </div>
  )

}

export default App
