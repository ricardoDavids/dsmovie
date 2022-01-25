package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}

//Este objecto MovieRepository ele vai ter operações basica de voçe buscar, salvar, deletar e etc 

// JpaRepository vamos parametrizar ele com o tiMovieRepository.javapo da entidade que será Movie e o tipo do ID do Movie que seria Long