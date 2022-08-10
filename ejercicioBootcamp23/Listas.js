//Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compra = ["Agua", "Carne", "Queso", "Pan", "Jamón"]
console.log(compra)

//Modifica la lista de la compra y añádele "Aceite de Girasol"

compra.push("Aceite de Girasol")
console.log(compra)

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compra.pop()
console.log(compra)

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [
    {
        titulo: "Rambo",
        director: "Ted Kotcheff",
        fecha: new Date(1982)
    },
    {
        titulo: "Mad Max",
        director: "George Miller",
        fecha: new Date(1979)
    },
    {
        titulo: "The Avengers",
        director: "Joss Whedon",
        fecha: new Date(2012,4,27)
    }
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(peliculasNuevas)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
console.log(directores)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(titulos)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop)

