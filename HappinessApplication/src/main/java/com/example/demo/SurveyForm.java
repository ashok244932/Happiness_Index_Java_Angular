package com.example.demo;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SurveyForm {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String age;
	private String gender;
	private Date selectedDate;
	private Integer familytime;
	private Integer fitness;
	private String hobby;
	private Integer jobtime;
	private String workout;	

	@Override
	public String toString() {
		return "SurveyForm [id=" + id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", selectedDate="
				+ selectedDate + ", familytime=" + familytime + ", fitness=" + fitness + ", hobby=" + hobby
				+ ", jobtime=" + jobtime + ", workout=" + workout + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getSelectedDate() {
		return selectedDate;
	}

	public void setSelectedDate(Date selectedDate) {
		this.selectedDate = selectedDate;
	}

	public Integer getFamilytime() {
		return familytime;
	}

	public void setFamilytime(Integer familytime) {
		this.familytime = familytime;
	}

	public Integer getFitness() {
		return fitness;
	}

	public void setFitness(Integer fitness) {
		this.fitness = fitness;
	}

	public String getHobby() {
		return hobby;
	}

	public void setHobby(String hobby) {
		this.hobby = hobby;
	}

	public Integer getJobtime() {
		return jobtime;
	}

	public void setJobtime(Integer jobtime) {
		this.jobtime = jobtime;
	}

	public String getWorkout() {
		return workout;
	}

	public void setWorkout(String workout) {
		this.workout = workout;
	}
}
