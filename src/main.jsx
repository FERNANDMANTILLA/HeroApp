
import ReactDOM from 'react-dom/client'
import HeroApp from './HeroApp'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
    <HeroApp />
    </AuthProvider>
    </BrowserRouter>
)
