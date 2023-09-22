import React, { useEffect, useState } from "react";
import '../../Styling/AllHotels.css'

export function AllHotels() {
    const [hotels, setHotels] = useState([])

    const fetchData = () => {
        fetch("http://api-praktikanten-assessment.chili.ch/Hotel/GetHotels")
            .then(response => response.json())
            .then(data => {
                setHotels(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="AllHotelsContainer">
            <div className="HotelList">
                {hotels.map((hotel) => (
                    <div className="SingleHotelContainer" key={hotel.id}>
                        <div className="SingleHotelImageContainer">
                        <img src={hotel.imageUrl} alt="" className="SingleHotelImage" />
                        </div>
                        <div className="SingleHotelPlace">{hotel.ortschaft}</div>
                        <div className="SingleHotelName">{hotel.name}</div>
                        <div className="SingleHotelPrice">Ab CHF {hotel.preis} Pro Nacht</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
