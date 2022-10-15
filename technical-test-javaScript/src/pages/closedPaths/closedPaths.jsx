import "./styles.css"
import Swal from 'sweetalert2';
import { useState } from "react"
import closePaths from "../../assets/scripts/test"

const ClosedPaths = ()=>{

    let result= 0;
    const [number, setnumber] = useState("")
    const [alert, setAlert] = useState(false)
    const controlNumber = (e)=>{
        
        if(isNaN(e.target.value)){
            return 
        }
        setnumber(e.target.value);
    }

    const confirm = (e)=>{
        e.preventDefault();

       Swal.fire({
        title: 'Closed Paths',
        text: ""+closePaths(number),
      })

    }

    return (
    <>
    <div id="section">

    <h1>Welcome to Technical Test of JavaScript</h1>
    <label id="subtitle" htmlFor="number">Type the number you wish to evaluate </label>

    <form onSubmit={confirm}>
    <input type="text" value={number} id="number" required onChange = {controlNumber} maxLength="16" className="form-control"></input>
    <br></br>
    <button id="calculate" className="btn btn-info">calculate</button>
    </form>



    </div>

    </>
    )

}

export default ClosedPaths