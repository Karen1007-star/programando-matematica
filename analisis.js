// const personaBusqueda = "Juanita"

function encontrarPer(personaBusqueda){
    return salarios.find((persona)=>persona.name == personaBusqueda);
    
}

function medianaPersona(nombre){
    const trabajos = encontrarPer(nombre).trabajos
    const salarios = trabajos.map((elemento)=> elemento.salario)
    return salarios
}

