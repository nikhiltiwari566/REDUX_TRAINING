import { useState } from 'react'
import './App.css'
import { CakeView } from "../src/features/cake/cakeView"
import { IcecreamView } from "../src/features/icecream/icecreamView"
import { Userview } from "../src/features/user/userView"

function App() {

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <Userview />
    </div>
  )
}

export default App
