import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Todo } from '../pages/Todo'
import { Cart } from '../pages/Cart'
import { Shopping } from '../pages/Shopping'

export const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/shopping' element={<Shopping/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contactus' element={<Contact/>}></Route>
    </Routes>
}