package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}

//Este objecto MovieRepository ele vai ter operações basica de voçe buscar, salvar, deletar e etc 

// JpaRepository vamos parametrizar ele com o tipo da entidade que será Movie e o tipo do ID do Movie que seria Long