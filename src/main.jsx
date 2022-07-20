
import ReactDOM from 'react-dom/client'
import HeroApp from './HeroApp'

import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
    <HeroApp />
    </HashRouter>
)
