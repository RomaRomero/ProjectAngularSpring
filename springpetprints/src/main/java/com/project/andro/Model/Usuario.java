package com.project.andro.Model;

// import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
// import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.OneToMany;
// import javax.persistence.OneToOne;
import javax.persistence.Table;
// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name ="usuario")

public class Usuario {
    private long iduser;
    private String  Nombre_usuario;
    private String Contrasenia;
   

    public Usuario(){

    }
    public Usuario(String Nombre_usuario,String Contrasenia){
     this.Nombre_usuario=Nombre_usuario;
     this.Contrasenia=Contrasenia;
    }
   
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return iduser;
    }

    public void setId(long iduser) {
        this.iduser = iduser;
    }

    @Column(name = "Nombre_usuario", nullable = false)
    public String getNombreUsuario(){
        return Nombre_usuario;
    }
    public void setNombreUsuario(String Nombre_usuario){
        this.Nombre_usuario=Nombre_usuario;
    }
    @Column(name="Contrasenia",nullable = false)
    public String getContrasenia(){
        return Contrasenia;
    }
    public void setContrasenia(String contrasenia) {
        this.Contrasenia = contrasenia;
    }
    
    @Override
    public String toString() {
        return "Usuario [id= " + iduser + ", Nombre_usuario=" + Nombre_usuario + ", Contrasenia=" + Contrasenia + "]";
    }
    // @JsonBackReference
    // @JoinColumn(name ="id")
    // @OneToOne(fetch = FetchType.LAZY)
    // private Persona persona;
    // @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "mascota")
    // private List<Mascota>mascota;

}

