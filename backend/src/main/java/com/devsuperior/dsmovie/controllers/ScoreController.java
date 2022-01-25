package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores") 
//No lombock @RequiredArgsConstructor - esta anotattion iria contruir o que está na linha 22
//Vamos criar agora um metodo para retornar uma pagina de filmes 
public class ScoreController {
	
	
	private final ScoreService service;
	
	@Autowired
	public ScoreController(ScoreService service) {
		this.service= service;
	}
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto )//Para eu configurar que esse corpo de requesição vai ser capturado lá do JSON e convertido para o objecto ScoreDTO eu vou ter que colocar uma annotation  
	{
		MovieDTO movieDTO = service.saveScore(dto);		
		return movieDTO;
	}
}
