import React from 'react'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'
import { FullPageHome } from "./pages/FullPageHome"


export const RouterApp = ()=>{

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={ <FullPageHome /> }  />

            </Routes>
        </>
    )
}