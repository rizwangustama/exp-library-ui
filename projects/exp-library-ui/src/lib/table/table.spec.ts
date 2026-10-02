import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpTable } from './table';

describe('ExpTable', () => {
  let component: ExpTable;
  let fixture: ComponentFixture<ExpTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
