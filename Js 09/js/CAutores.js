class CAutores {
    constructor(nombre,apellido,nacionalidad,mejorObra,anioPublicacion,edadPublicacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.mejorObra = mejorObra;
        this.anioPublicacion = anioPublicacion;
        this.edadPublicacion = edadPublicacion;
    }
}
const vector = [
    new CAutores("Gabriel","García Márquez","Colombiano","Cien años de soledad",1967,40),
    new CAutores("Julio","Cortázar","Argentino","Rayuela",1963,48),
    new CAutores("Isabel","Allende","Chilena","La casa de los espíritus",1982,40),
    new CAutores("Jorge Luis","Borges","Argentino","Ficciones",1944,45),
    new CAutores("Clarice","Lispector","Brasileña","La hora de la estrella",1966,56),
    new CAutores("Juan","Rulfo","Mexicano","Pedro Páramo",1955,38),
    new CAutores("Carlos","Fuentes","Mexicano","La región más transparente",1958,29),
    new CAutores("Eduardo","Galeano","Uruguayo","Las venas abiertas de América Latina",1971,31)
];
function listarAutores(){
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 6> Todos los autores </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Apellido </th>");
    document.write("<th> Nacionalidad </th>");
    document.write("<th> Mejor Obra </th>");
    document.write("<th> Año de Publicacion </th>");
    document.write("<th> Edad en Publicacion </th> </tr>");
    for(let i = 0 ; i < vector.length ; i++){
        document.write("<tr>");
        document.write("<td>" + vector[i].nombre + "</td>");
        document.write("<td>" + vector[i].apellido + "</td>");
        document.write("<td>" + vector[i].nacionalidad + "</td>");
        document.write("<td>" + vector[i].mejorObra + "</td>");
        document.write("<td>" + vector[i].anioPublicacion + "</td>");
        document.write("<td>" + vector[i].edadPublicacion + "</td>");
        document.write("</tr>")
    }
    document.write("</table>");
}
function listarAutoresArgentinos(){
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 3> Autores Argentinos </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Apellido </th>");
    document.write("<th> Mejor Obra </th> </tr>");
    for(let i = 0 ; i < vector.length ; i++){
        if(vector[i].nacionalidad == "Argentino"){
            document.write("<tr>");
            document.write("<td>" + vector[i].nombre + "</td>");
            document.write("<td>" + vector[i].apellido + "</td>");
            document.write("<td>" + vector[i].mejorObra + "</td>");
            document.write("</tr>");
        }
    }
document.write("</table>")
}
function promedioEdad(){
    let promedio = 0;
    for(let i = 0 ; i < vector.length ; i++){
        promedio += vector[i].edadPublicacion;
    }
    document.write("Edad promedio: " + promedio/vector.length);
}
function listarSegunAnio(){
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 4> Autores que publicaron libros entre 1960 y 1980 </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Apellido </th>");
    document.write("<th> Mejor Obra </th>");
    document.write("<th> Año de publicacion </th> </tr>");
    for(let i = 0 ; i < vector.length ; i++){
        if(vector[i].anioPublicacion >= 1960 && vector[i].anioPublicacion <= 1980){
            document.write("<tr>");
            document.write("<td>" + vector[i].nombre + "</td>");
            document.write("<td>" + vector[i].apellido + "</td>");
            document.write("<td>" + vector[i].mejorObra + "</td>");
            document.write("<td>" + vector[i].anioPublicacion + "</td>");
            document.write("</tr>");
        }
    }
}
listarAutores();
listarAutoresArgentinos();
listarSegunAnio();
promedioEdad();