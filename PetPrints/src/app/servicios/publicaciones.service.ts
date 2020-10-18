import {Injectable}from "@angular/core";
@Injectable()
export class PublicacionesService{
    ListadoPublicaciones:any[]=[
        {
            nombrep: "Roberto Carlos",
            nombrem: "Pochi",
            descripcion: "se nos extravio en el parque Miraflores sector el vecino por favor si tiene informacion de nuestra mascota contactenos",
            imagen: "https://www.estrelladigital.es/media/estrelladigital/images/2017/01/20/2017012019124627295.jpg"

        }, {
            nombrep: "Christian Caguana",
            nombrem: "cheto",
            descripcion: " en el parque Miraflores sector el vecino por favor si tiene informacion de nuestra mascota contactenos",
            imagen: "https://e.rpp-noticias.io/normal/2019/04/16/414841_779115.jpg"

        },
        {
            nombrep: "Geovanny Arevalo",
            nombrem: "el macho",
            descripcion: "Nuestra mascota se perdio en el sector del valle , si la encuentran por favor contactenos esperamos informacion.",
            imagen: "https://okdiario.com/img/2020/01/01/el-reconocimiento-facial-para-mascotas-perdidas-655x368.jpg"

        },
        {
            nombrep: "Pablo Espinoza",
            nombrem: "coco",
            descripcion: "salio de nuestra casa un momento y no regresó por favor necesita sus medicamentos ayudanos a encontrarla",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKQtdksmGXnftAMLsfS2xrmaIFlTfV6jSv0A&usqp=CAU"

        },
        {
            nombrep: "Open Sessions",
            nombrem: "pool",
            descripcion: "es un ejemplar que se le lo sacó a pasear y no regreso , tiene un tatuaje de Open Sessions por favor ayudanos a encontrarlo",
            imagen: "https://noticiasambientales.com/wp-content/uploads/2020/06/PHOTO-2019-03-29-17-11-00-10-768x512.jpg"

        }
        ,
        {
            nombrep: "Carlos Robalino",
            nombrem: "raspado",
            descripcion: "Se nos extravio en el parque de la madre y mientras paseabamos ,es cariñosa y de confianza por favor ayudame a encontrarla",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFCkOCrPntZzvgV0ZxVa0MxuoXdVyQoww1Kg&usqp=CAU"

        },
        {
            nombrep: "Carlos Valenciaga",
            nombrem: "vicentico",
            descripcion: "La ultima vez que la vieron es en el parque calderon llevaba un collar azul con su nombre si la encuentran por favor contactenos",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYkjRxu0VzI52r_nZaXXkgD8Zv_nDr3ZJynA&usqp=CAU"

        },
        {
            nombrep: "Alex Zambrano",
            nombrem: "alle",
            descripcion: "Es un leon de 2 años de edad se escapó del zoologico es indispensable su localizacion por favor si lo vé mantengase alejado ",
            imagen: "https://s.yimg.com/ny/api/res/1.2/BFBEZ1rkRMKIC_YS2_aYRA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/es/reuters.com/1f17d4d85340ae69621533a5fb5c8a52"

        }
        ,
        {
            nombrep: "Valentina Corona",
            nombrem: "carito",
            descripcion: "Mascota casera totalmente inofensiva , si la encuentras por favor ayudanos ,necesita tomar sus medicamentos de forma frecuente",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKC34DvtAptpdth549ezLqcbE4_W4W6E8x5A&usqp=CAU"

        }
    
    ];
    //metodo publicacion devuelve todas las publicaciones
    getPublicaciones():Publicacion[]{
        return this.ListadoPublicaciones;
    }
    //metodo devuelve un solo valor por parametro
    getPublicacion(indice:number):Publicacion{
        return this.ListadoPublicaciones[indice];
    }
    //metodo buscarpublicacion devuelve un valor por parametro ingresado
    buscarpublicacion(termino:String):Publicacion[]{
        //definimos un array vacio
        let publicacionesArray:Publicacion[]=[]
        //tolowercase permite convertir mayusculas a minusculas pra que los caracteres coincidan
        termino=termino.toLowerCase();
        for(let i=0;i<this.ListadoPublicaciones.length;i++){
            let publicacion=this.ListadoPublicaciones[i];
            let nombre=publicacion.nombrep.toLowerCase();
            if(nombre.indexOf(termino)>=0){
                publicacion.id=1;
                publicacionesArray.push(publicacion);
            }
        }
        return publicacionesArray;
    }
    
}
export interface Publicacion {
nombrep:string,
nombrem:string,
descripcion:string,
imagen?:string,
id?:number
}