package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovie.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}

//Este objecto MovieRepository ele vai ter operações basica de voçe buscar, salvar, deletar e etc 

// JpaRepository vamos parametrizar ele com o tiMovieRepository.javapo da entidade que será Movie e o tipo do ID do Movie que seria Long