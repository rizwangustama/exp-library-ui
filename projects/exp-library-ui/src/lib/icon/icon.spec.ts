import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpIcon } from './icon';

describe('ExpIcon', () => {
  let component: ExpIcon;
  let fixture: ComponentFixture<ExpIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
