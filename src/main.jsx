
import ReactDOM from 'react-dom/client'
import HeroApp from './HeroApp'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <HeroApp />
    
    </BrowserRouter>
)
