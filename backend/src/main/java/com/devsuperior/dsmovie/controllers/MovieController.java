package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;

@RestController
@RequestMapping(value = "/movies") 
//Vamos criar agora um metodo para retornar uma pagina de filmes 
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@GetMapping//Agora estou configurando que este metodo vai responder no caminho /movies pelo verbo get lá do HTTP 
	public Page<MovieDTO> findAll(Pageable pageable){
		return service.findAll(pageable);		
	}
	
	@GetMapping(value = "/{id}")//Agora estou configurando que este metodo vai responder no caminho /movies pelo verbo get lá do HTTP 
	public MovieDTO findById(@PathVariable Long id){
		return service.findById(id);		
	}
}
