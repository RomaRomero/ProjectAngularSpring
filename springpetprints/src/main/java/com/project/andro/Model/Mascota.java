package com.project.andro.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mascota")
public class Mascota {
    private long Id_Mascota ;
    private String Nombre_Mascota;
    private String Descripcion;
    private String Imagen;

    public Mascota (String Nombre_Mascota,String Descripcion,String Imagen){
        this.Nombre_Mascota=Nombre_Mascota;
        this.Descripcion=Descripcion;
        this.Imagen=Imagen;
    }
    public Mascota(){

    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId(){
        return Id_Mascota;
    }
    public void setId(long Id_Mascota){
        this.Id_Mascota=Id_Mascota;
    }
    
    @Column(name = "Nombre_Mascota", nullable = false)
    public String getNombreM() {
        return Nombre_Mascota;
    }

    public void setNombreM(String Nombre_Mascota) {
        this.Nombre_Mascota = Nombre_Mascota;
    }

    @Column(name = "Descripcion", nullable = false)
    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }
    
    @Column(name = "Imagen", nullable = false)
    public String getImagen() {
        return Imagen;
    }

    public void setImagen(String Imagen) {
        this.Imagen = Imagen;
    }

    @Override
    public String toString() {
        return "Mascota [id=" + Id_Mascota + ", Nombre_Mascota=" + Nombre_Mascota 
        + ", Descripcion=" + Descripcion + ", Imagen=" + Imagen + "]";
    }
}
