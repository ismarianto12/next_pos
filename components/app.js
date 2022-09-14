import { createContext, useEffect, useState } from "react"
 
function App() { 
    const [sess, setSess] = useState('')

    useEffect(() => {
        const session = typeof window != localStorage.getItem('session') ? localStorage.getItem('session') : null
        setSess(session)
        
        const app = createContext({
            session: session,
        });
    }, [])
}
export default App

