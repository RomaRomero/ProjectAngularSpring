package com.project.andro.Repository;

import com.project.andro.Model.Mascota;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota,Long> {
    
}
