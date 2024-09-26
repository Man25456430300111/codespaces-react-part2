// import { useRef, useState } from "react";

// const BmiText = ({ bmi }) => {
//     if (bmi < 18.5) {
//         return <h1>Underweight</h1>;
//     } 
//     else if (bmi >= 18.5 && bmi < 24.9) {
//         return <h1>Normal weight</h1>;
//     } 
//     else if (bmi >= 25 && bmi < 29.9) {
//         return <h1>Overweight</h1>;
//     } 
//     else {
//         return <h1>Obesity</h1>;
//     }
// };

// export default function Bmi() {
//     const W_inputRef = useRef(null);
//     const h_inputRef= useRef(null);
//     const[Bmi,setBmi]=useState(0);
//     const calBmi=() =>{
//         let w=W_inputRef.current.value;
//         let h=h_inputRef.current.value;
//         setBmi(w/ Math.pow(h,2));
//     }

//     return (
//         <>
//         <h3>BMI Caluculator</h3>
//         Weight:<input
//         type="text"
//         ref={W_inputRef}/> kg.<br/>

//         Height:<input
//         type="text"
//         ref={h_inputRef}/> cm.<br/>
//         <button onClick={()=>calBmi()}>Calculate</button><br/>
//         Bmi value: {Bmi.toFixed(2)}
//         <BmiText bmi={Bmi}/>
//         </>
//     );
// }


import { useRef, useState } from "react";

const BmiText = ({ bmi }) => {
    if (bmi < 18.5) {
        return <h1>Underweight</h1>;
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        return <h1>Normal weight</h1>;
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        return <h1>Overweight</h1>;
    }
    else {
        return <h1>Obesity</h1>;
    }
};

export default function Bmi() {
    const W_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [Bmi, setBmi] = useState(0);

    const calBmi = () => {
        const w = parseFloat(W_inputRef.current.value);
        const h = parseFloat(h_inputRef.current.value) / 100; // เปลี่ยนความสูงจาก cm เป็น m
        if (w && h) {
            setBmi(w / Math.pow(h, 2));
        } else {
            alert("Please enter valid weight and height.");
        }
    };

    return (
        <>
            <h3>BMI Calculator</h3>
            Weight: <input type="text" ref={W_inputRef} /> kg.<br />
            Height: <input type="text" ref={h_inputRef} /> cm.<br />
            <button onClick={calBmi}>Calculate</button><br />
            BMI value: {Bmi.toFixed(2)}
            <BmiText bmi={Bmi} />
        </>
    );
}
