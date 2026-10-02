import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpSharedUi } from './exp-shared-ui';

describe('ExpSharedUi', () => {
  let component: ExpSharedUi;
  let fixture: ComponentFixture<ExpSharedUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSharedUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpSharedUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
