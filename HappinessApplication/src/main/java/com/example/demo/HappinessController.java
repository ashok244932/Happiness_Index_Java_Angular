package com.example.demo;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HappinessController {
	
@Autowired
	private HappinessService happinessService;
	
	@PostMapping("happinessdetail")
	public ResponseEntity<SurveyForm> saveData(@RequestBody SurveyForm surveyForm )
	{
		SurveyForm saveDetails = happinessService.saveDetails(surveyForm);		 
		 return ResponseEntity.ok(saveDetails);		
	}
	
	
	@GetMapping("happinessdetail")
	public ResponseEntity<Map<Date, Integer>> getData(@RequestParam String name)
	{
		Map<Date, Integer> detailsMap = happinessService.getDetails(name);		 
		 return ResponseEntity.ok(detailsMap);		
	}
	

}
