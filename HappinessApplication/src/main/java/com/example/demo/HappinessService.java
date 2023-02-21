package com.example.demo;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HappinessService {
	
	@Autowired
	private HappinessRepository happinessRepository;

	public SurveyForm saveDetails(SurveyForm surveyForm)
	{
		return happinessRepository.save(surveyForm);
	}

	public Map<Date, Integer> getDetails(String name) {
		List<SurveyForm> findAll = happinessRepository.findAll();
		List<SurveyForm> collect = findAll.stream().filter(t->t.getName().equals(name)).collect(Collectors.toList());
	
		Map<Date,Integer> tm=new TreeMap<Date,Integer>();
		for(SurveyForm surveyForm:collect)
		{
			System.out.println(surveyForm.toString());
			int happinessIndex=0;
			happinessIndex+=(surveyForm.getWorkout().equals("yes")?5:0);
			happinessIndex+=(surveyForm.getHobby().equals("yes")?5:0);
			happinessIndex+=surveyForm.getFitness();
			happinessIndex+=surveyForm.getFamilytime();
			happinessIndex+=surveyForm.getJobtime();			
			
			
			happinessIndex=happinessIndex/5;
					
			tm.put(surveyForm.getSelectedDate(),happinessIndex);
		}
		
		return tm;
	
	}

	
}
