package com.project.andro.Model;

// import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
// import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "persona")
public class Persona {

    private long id;
    private String Nombres;
    private String Apellidos;
    private String Direccion;
    private String Correo;
    private String Telefono;

    public Persona(){

    }
    public Persona(String Nombres , String Apellidos , String Direccion , String Correo ,String Telefono){
        this.Nombres=Nombres;
        this.Apellidos=Apellidos;
        this.Direccion=Direccion;
        this.Correo=Correo;
        this.Telefono=Telefono;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId(){
        return id;
    }
    public void setId(long id){
        this.id=id;
    }
// @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY ,mappedBy = "Usuario")

    @Column(name ="Nombres",nullable =false)
    public String getNombres(){
        return Nombres;
    }
    public void setNombres(String Nombres){
        this.Nombres=Nombres;
    }

    @Column(name = "Apellidos", nullable = false)
    public String getApellidos() {
        return Apellidos;
    }

    public void setApellidos(String Apellidos) {
        this.Apellidos = Apellidos;
    }
    
    @Column(name = "Direccion", nullable = false)
    public String getDireccion() {
        return Direccion;
    }

    public void setDireccion(String Direccion) {
        this.Direccion = Direccion;
    }
    
    @Column(name = "Correo", nullable = false)
    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String Correo) {
        this.Correo = Correo;
    }
    
    @Column(name = "Telefono", nullable = false)
    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String Telefono) {
        this.Telefono = Telefono;
    }
@Override
public String toString(){
    return "Persona [id ="+id+", Nombres="+Nombres+", Apellidos="+ Apellidos+ ", Direccion="+Direccion+", Correo="+ Correo+", Telefono="+Telefono+"]";
}
}
