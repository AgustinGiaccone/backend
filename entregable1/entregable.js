class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.name = nombre
        this.lastnName = apellido
        this.books = libros
        this.pets = mascotas
    }
    obtenerNombreCompleto(){
        return `${this.name} ${this.lastnName}`
    }
    agregaNuevoLibro(libro, autor){
        this.books.push({libro , autor})
    }
    mostrarLibro(){
        return this.books
    }
    nuevaMascota(animal, nombre){
        this.pets.push({animal,nombre})
    }
    mostrarMascota(){
        return this.pets
    }
    obtenerCantidadMascota(){
        return this.pets.length
    }
    contarMascotas(){
        this
    }
}

let books = [{libro:'pinocho', autor: 'carlo collodi' },{libro:'maze runner',autor:'james dashner'},{libro:'el gran gatsby',autor:'scott fitzgerald'}]

let mascotasagus = [{animal:'perro', nombre:'fido'},{animal:'gato', nombre:'tuczon'},{animal:'haster', nombre:'cherry'}]

let personita = new Usuario ("Agustin", "Giaccone", books, mascotasagus)

personita.agregaNuevoLibro('el libro de la selva', 'Rudyard Kipling')
personita.nuevaMascota('perro', 'capitan')
personita.nuevaMascota('gato', 'michi')


console.log(personita)
console.log(personita.obtenerNombreCompleto())
console.log(books[3]['libro'])
console.log(personita.obtenerCantidadMascota())