import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpRadio } from './radio';

describe('ExpRadio', () => {
  let component: ExpRadio;
  let fixture: ComponentFixture<ExpRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpRadio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
