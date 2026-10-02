import { TestBed } from '@angular/core/testing';
import { ExpButton } from './button/button';

describe('ExpButton', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpButton],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExpButton);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
