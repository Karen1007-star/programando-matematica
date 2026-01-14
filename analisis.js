// const personaBusqueda = "Juanita"
import { mathSalarios } from "./mathSalarios.js";
import { salarios } from "./salarios.js";

function encontrarPer(personaBusqueda){
    if (!personaBusqueda) return "no existe"
    const persona1= salarios.find((persona)=>persona.name == personaBusqueda);
    return persona1 ? persona1 : "No existe"
}

function salariosPersona(nombre) {
    const persona = encontrarPer(nombre)
    if (!persona) return null
    return persona.trabajos.map(trabajo => trabajo.salario)
}

function medianaPersona(nombre) {
    const persona = encontrarPer(nombre)
    if (!persona) return null
    const salariosPersona = persona.trabajos.map(
        trabajo => trabajo.salario
    )
    return mathSalarios.mediana(salariosPersona)
}

function promedioPersona(nombre) {
    const salarios = salariosPersona(nombre)
    if (!salarios) return null

    return mathSalarios.promedio(salarios)
}

function modaPersona(nombre){
    const salarios = salariosPersona(nombre)
    if(!salarios) return null
    return mathSalarios.moda(salarios)
}

function proyeccionSalarial(nombre){
    const trabajos = encontrarPer(nombre).trabajos;
    const porcentajesCrecimiento = []
    if(!salarios) return null
    for(let i=1; i<trabajos.length - 1; i++){
        const salarioActual = trabajos[i].salario
        const salariopasado = trabajos[i-1].salario
        const crecimiento = salarioActual- salariopasado
        const porceCrecimiento = crecimiento / salariopasado
        porcentajesCrecimiento.push(porceCrecimiento)
    }
        const crecioPromedio = mathSalarios.mediana(porcentajesCrecimiento)
        return trabajos[trabajos.length-1].salario + trabajos[trabajos.length-1].salario*crecioPromedio
}


function empresasOrdenadas(lista){
    const empresas = {}
    const nombres = []
    lista.forEach(persona => {
        persona.trabajos.forEach((trabajo)=>{
            // const nombreEmpresa = trabajo.empresa;
            // empresas[nombreEmpresa] ? empresas[nombreEmpresa] += 1 : empresas[nombreEmpresa] = 1
            if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
            }
            if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
            }
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        })    
    });

    return Object.entries(empresas);
}
