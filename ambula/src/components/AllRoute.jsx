import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

export const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contactus' element={<Contact/>}></Route>
    </Routes>
}