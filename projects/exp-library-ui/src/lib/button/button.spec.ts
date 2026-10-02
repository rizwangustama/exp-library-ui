import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpButton } from './button';

describe('Button', () => {
  let component: ExpButton;
  let fixture: ComponentFixture<ExpButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
