function ComponenteB({contact,setContact}){
    
    const handleClick = () => {
        setContact(prevContact => ({
            ...prevContact,
            connected: !prevContact.connected
        }));
    };
    console.log(contact.connected)
    return(
        <>
        <h2>{contact.connected==true?'contacto esta en linea':'contacto no disponible'}</h2>
        <button onClick={handleClick}>{contact.connected==true?'desconectar':'conectar'}</button>
        </>
    )
}
export default ComponenteB;