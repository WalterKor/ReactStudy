import WellCome from "./WellCome";
import styles from "./Hello.module.css";


export default function Hello() {

    function showName() {
        console.log("Mike")
    }

    function showAge() {
        console.log('19');
    }

    
    return (
        <div>
            <button onClick={showName}>show name</button>
            <button onClick={showAge}>show age</button>
            <input type="text" onChange={(e)=>{
                console.log(e.target.value)
            }}></input>
        </div>
    )
}