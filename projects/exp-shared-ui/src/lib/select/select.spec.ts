import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpSelect } from './select';

describe('ExpSelect', () => {
  let component: ExpSelect;
  let fixture: ComponentFixture<ExpSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
