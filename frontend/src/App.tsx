
import './App.css'
import SearchBar from './SearchBar'
import Map from './Map.tsx'

export default function App() {
  

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Map />
      </div>
      <div className = "absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000]">
        <SearchBar />
      </div>
    </div>
  )
}

 
