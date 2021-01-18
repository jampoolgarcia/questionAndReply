import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-and-anwers',
  templateUrl: './question-and-anwers.component.html',
  styleUrls: ['./question-and-anwers.component.css']
})
export class QuestionAndAnwersComponent implements OnInit {

  question: string;
  answers: any[];

  constructor() { 
    this.question = "¿Cuál es la capital de Venezuela?"
  }

  ngOnInit(): void {
  }

}
