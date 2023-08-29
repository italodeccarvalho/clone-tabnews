import { useState } from "react";

function Home() {

    const [nome, setNome] = useState("")

    function nomear(event){
        event.preventDefault()
        setNome (event.target.value)

    }

    return (
        <>
            <h1> Você digitou a seguinte frase: </h1>
            <h2>{ nome }</h2>
            <input type="input" onChange={ nomear } placeholder="Digite seu nome"/>
        </>
    )
}

export default Home;