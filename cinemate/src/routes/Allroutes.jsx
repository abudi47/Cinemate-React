import  { Routes ,  Route } from "react-router-dom";
import { MovieDetail , MovieList, Search , PageNotFound } from "../pages";

import React from 'react'

export const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList /> } /> 
            <Route path="movie/:id" element={<MovieDetail /> } /> 
            <Route path="movies/popular" element={<MovieList /> } /> 
            <Route path="movies/upcoming" element={<MovieList /> } /> 
            <Route path="movies/top" element={<MovieList /> } /> 
            <Route path="search" element={<Search /> } /> 
            <Route path="*" element={<PageNotFound /> } /> 

        </Routes>


    </>
  )
}
