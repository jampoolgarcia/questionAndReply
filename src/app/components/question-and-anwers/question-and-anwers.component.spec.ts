import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndAnwersComponent } from './question-and-anwers.component';

describe('QuestionAndAnwersComponent', () => {
  let component: QuestionAndAnwersComponent;
  let fixture: ComponentFixture<QuestionAndAnwersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAndAnwersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAndAnwersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
