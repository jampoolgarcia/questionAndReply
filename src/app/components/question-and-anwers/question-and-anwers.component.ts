import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-and-anwers',
  templateUrl: './question-and-anwers.component.html',
  styleUrls: ['./question-and-anwers.component.css']
})
export class QuestionAndAnwersComponent implements OnInit {

  question: string;
  answers: any[];
  corret: boolean;
  isSelect: boolean;

  constructor() { 
    this.question = "¿Cuál es la capital de Venezuela?";
    this.answers = [
      {
        answer: "Carabobo",
        corret: false
      },{
        answer: "Caracas",
        corret: true
      },{
        answer: "San Cristobal",
        corret: false
      },{
        answer: "Bolivar",
        corret: false
      }
    ];

    this.corret = false;
    this.isSelect = false;
  }

  ngOnInit(): void {
  }

  checkAnswer(obj){
    this.corret = obj.corret;
    this.isSelect = true;
  }

}
