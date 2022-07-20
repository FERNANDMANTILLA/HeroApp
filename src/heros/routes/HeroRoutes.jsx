import { Navbar } from '../../ui/components/NavBar'
import {Home,DcPage,MarvelPage, SearchPage, HeroPage} from '../pages';

import { Routes, Route} from "react-router-dom";

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
