export let nombre = "Nasus";

let x = ((parametroNombre) => {
    console.log(parametroNombre);
});

export default x;


export function rangos(rank) {
    if (rank !== "plata" && rank !== "bronce")
    {
        console.log("Tu rango es: ", rank)
    }
    else
    {
        console.log("Tu rango es plata o inferior")
    }
}
