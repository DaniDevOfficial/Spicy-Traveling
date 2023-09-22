import React, { useEffect, useState } from "react";
import '../Styling/Homepage.css'
import { LandingPage } from "./HomepageComps/LandingPage";

import { Navbar } from "./HomepageComps/Navbar";

export default function Homepage () {

    const [hotels, setHotels] = useState([])

    const fetchData = () => {
      fetch("http://api-praktikanten-assessment.chili.ch/Hotel/GetHotels    ")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setHotels(data)
        })
    }
  console.log(hotels)
    useEffect(() => {
        fetchData()
    }, [])
  
    return (
      <div>
        <Navbar/>
        <LandingPage />
      </div>
    );
  }