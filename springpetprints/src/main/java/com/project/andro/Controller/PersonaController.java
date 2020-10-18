package com.project.andro.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.project.andro.Model.Persona;
import com.project.andro.Repository.PersonaRepository;
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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class PersonaController {
    @Autowired
    private PersonaRepository personaRepository;
  
    @GetMapping("/persona")
    public List<Persona>getAllPersonas(){
        return personaRepository.findAll();
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

    @GetMapping("/Persona/{id}")
    public ResponseEntity<Persona> getPersonaById(@PathVariable(value = "id") Long personaId)
            throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(personaId)
                .orElseThrow(() -> new ResourceNotFoundException("Persona no encontrada para este id :: " + personaId));
        return ResponseEntity.ok().body(persona);
    }

    @PostMapping("/persona")
    public Persona createPersona(@Valid @RequestBody Persona persona) {
        return personaRepository.save(persona);
    }

    @PutMapping("/persona/{id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable(value = "id") Long personaId,
            @Valid @RequestBody Persona personaDetails) throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(personaId)
                .orElseThrow(() -> new ResourceNotFoundException("Persona no encontrada para este id :: " + personaId));
        persona.setNombres(personaDetails.getNombres());
        persona.setApellidos(personaDetails.getApellidos());
        persona.setDireccion(personaDetails.getDireccion());
        persona.setCorreo(personaDetails.getCorreo());
        persona.setTelefono(personaDetails.getTelefono());
        final Persona updatedPersona = personaRepository.save(persona);
        return ResponseEntity.ok(updatedPersona);
    }

    @DeleteMapping("/persona/{id}")
    public Map<String, Boolean> deletePersona(@PathVariable(value = "id") Long personaId)
            throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(personaId)
                .orElseThrow(() -> new ResourceNotFoundException("Persona no encontrada para este id :: " + personaId));
        personaRepository.delete(persona);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
}
