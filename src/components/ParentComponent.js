import React , {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent(){
const [firstName , setFirstName] = useState("John");
const[lastName, setLastName] = useState("Henry")
const [newsLetter , setNewsLetter] = useState(false);
function handleFirstNameChange(event){
    setFirstName(event.target.value)
}
function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleNewsLetterChange(event){
    setNewsLetter(event.target.checked)
   }
 
return(
    <div><Form
    firstName={firstName}
    lastName={lastName}
    newsLetter={newsLetter}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}
    handleNewsLetterChange={handleNewsLetterChange}
/>
<DisplayData firstName={firstName} lastName={lastName} newsLetter={newsLetter}/>
</div>
    
)
}
export default ParentComponent