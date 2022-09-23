import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepatientComponent } from './createpatient.component';

describe('CreatepatientComponent', () => {
  let component: CreatepatientComponent;
  let fixture: ComponentFixture<CreatepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ CreatepatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
