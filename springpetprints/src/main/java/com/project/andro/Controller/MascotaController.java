package com.project.andro.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.project.andro.Model.Mascota;
import com.project.andro.Repository.MascotaRepository;
import com.project.andro.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/v1")
public class MascotaController {
    @Autowired
    private MascotaRepository mascotaRepository;

    @GetMapping("/mascota")
    public List<Mascota> getAllMascotas() {
        return mascotaRepository.findAll();
    }
    // @GetMapping("/persona")
    // public RespuestaGenerica<Persona> get() {
    // int codigo = 0;
    // String mensaje = "datos obtenidos correctamente";
    // List<Employee> datos = employeeRepository.findAll();
    // RespuestaGenerica<Employee> respuesta = new
    // RespuestaGenerica<Employee>(codigo, mensaje, datos);
    // return respuesta;
    // }

    @GetMapping("/mascota/{id}")
    public ResponseEntity<Mascota> getMascotaById(@PathVariable(value = "id") Long mascotaId)
            throws ResourceNotFoundException {
        Mascota mascota = mascotaRepository.findById(mascotaId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrada para este id :: " + mascotaId));
        return ResponseEntity.ok().body(mascota);
    }

    @PostMapping("/mascota")
    public Mascota createMascota(@Valid @RequestBody Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    @PutMapping("/mascota/{id}")
    public ResponseEntity<Mascota> updateMascota(@PathVariable(value = "id") Long mascotaId,
            @Valid @RequestBody Mascota mascotaDetails) throws ResourceNotFoundException {
        Mascota mascota = mascotaRepository.findById(
                mascotaId)
                .orElseThrow(() -> new ResourceNotFoundException("Mascota no encontrada para este id :: " + mascotaId));
        mascota.setNombreM(mascotaDetails.getNombreM());
        mascota.setDescripcion(mascotaDetails.getDescripcion());
        mascota.setImagen(mascotaDetails.getImagen());
        final Mascota updatedMascota = mascotaRepository.save(mascota);
        return ResponseEntity.ok(updatedMascota);
    }

    @DeleteMapping("/mascota/{id}")
    public Map<String, Boolean> deleteUsuario(@PathVariable(value = "id") Long mascotaId)
            throws ResourceNotFoundException {
        Mascota mascota = mascotaRepository.findById(mascotaId)
                .orElseThrow(() -> new ResourceNotFoundException("Mascota no encontrada para este id :: " + mascotaId));
        mascotaRepository.delete(mascota);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    
}
