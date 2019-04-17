import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLsitComponent } from './question-lsit.component';

describe('QuestionLsitComponent', () => {
  let component: QuestionLsitComponent;
  let fixture: ComponentFixture<QuestionLsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionLsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
