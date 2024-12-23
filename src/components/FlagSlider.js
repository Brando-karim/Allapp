import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function FlagSlider(){
    const [countries, setCountries] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);
    const slidesRef = useRef([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(response => setCountries(response.data.filter(data => data.name.common !== "Israel")))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        if (slidesRef.current.length === 0)
            return;

        for (let i = 0; i < slidesRef.current.length; i++) {
            slidesRef.current[i].style.display = "none";
        }
        slidesRef.current[slideIndex-1].style.display = "block";
    }, [slidesRef, slideIndex, countries]);
    
    // Next/previous controls
    function plusSlides(n) {
        if (slideIndex + n <= 0)
            setSlideIndex(countries.length);
        else if (slideIndex + n > countries.length)
            setSlideIndex(1);
        else
        setSlideIndex(slideIndex + n);
    }

    return(
        
<div className="slideshow-container">
    {countries.map((country, index) => (
        <div className="mySlides fade" ref={e1 => (slidesRef.current[index] = e1)}>
            <div className="numbertext">{index + 1 + " / " + countries.length}</div>
            <img src={country.flags.png}  alt='' style={{objectFit: 'contain', width: "800px", height: "400px"}} />
            <div className="text"> <b>{country.name.common}</b> 
                <br />
            <p> Region :{country.region} <br />
            Capital :{country.capital} <br />           
            Population :{country.population}</p>            
            
            </div>
           
        </div>
    ))}

  <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
  <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
</div>
    )    
}