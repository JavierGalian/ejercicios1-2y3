import { useState } from "react";
import ComponenteB from "./componenteB";
function ComponenteA(){
    const [contact, setContact] = useState ({
        name:'Lio',
        lastName:'Messi',
        email:'LioMessi@gmail.com',
        connected:true,
    })
    return(
        <>
            <ComponenteB setContact={setContact} contact={contact} />
        </>
    )
}
export default ComponenteA;