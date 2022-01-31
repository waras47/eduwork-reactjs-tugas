import { useState } from "react";

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);
    const handlePlus = () => {
        setValue(value + 1);
        
    }
    const handleMin = () => {
        if (value > 0){
            setValue(value - 1);
    }
}
    return (

        <div>
            <h1>Membuat Functional Component</h1>
            <h2>Hallo {nama}, Selamat Belajar</h2>
            <button onClick={handleMin}>-</button>
            <span>{value}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
} 

FunctionalComponent.defaultProps = {
    nama : 'nadila larasati '
}
export default FunctionalComponent ;