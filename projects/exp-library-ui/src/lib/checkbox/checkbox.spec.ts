import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpCheckbox } from './checkbox';

describe('ExpCheckbox', () => {
  let component: ExpCheckbox;
  let fixture: ComponentFixture<ExpCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
