import React, { useState } from "react";

let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const WeatherData = () => {

    let [lett, setLett] = useState("");
    let [long, setLong] = useState("");
    let [hemis, setHemis] = useState("");
    let [month, setMonth] = useState("");

    function get_data() {
        if (navigator.geolocation) {
            // console.log(navigator)

            // console.log(navigator.geolocation)

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // console.log(position.coords.latitude)
                    // console.log(position.coords.longitude)
                    setLett(position.coords.latitude)

                    setLong(position.coords.longitude)

                    if (position.coords.latitude > 0) {
                        setHemis("Northen Hemisphere")
                    } else if (position.coords.latitude < 0) {
                        setHemis("Southeren Hemisphere")
                    } else {
                        setHemis("Equator")
                    }

                    // let month=new Date().getMonth();//0 - 11
                    setMonth(new Date().getMonth())
                })
        }else {
            alert("something went wrong!")
        }
    }

    useState(()=>{
        get_data()
    },[lett,long])
    return (
        <div className="weatherdata">
            {/* <button onClick={get_data}>click</button> */}
            <div><strong>Lattitude:</strong> <span>{lett}</span></div>
            <div><strong>Longnitude:</strong><span>{long}</span></div>
            <div><strong>Hemisphere:</strong><span>{hemis}</span></div>
            <div><strong>Month:</strong><span>{arr[month]}</span></div>

            {
              (hemis!==""&& month!=="")&&

              (
                ((hemis==="Northen Hemisphere"&& month>=3 && month<=9) || (hemis==="Southeren Hemisphere"&& month<3 && month>9))?
                
                (
                        <div>
                            <div>Summer Season</div>
                            <img src="https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg" alt="summer-img"/>
                        </div>
                ):(
                    <div>
                        <div>Winter Season</div>
                        <img src="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=" alt="winter-img"/>
                    </div>
                    

                )
                
              )  
            }
        </div>

    )
}

export default WeatherData;