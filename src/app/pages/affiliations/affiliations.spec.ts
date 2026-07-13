import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Affiliations } from './affiliations';

describe('Affiliations', () => {
  let component: Affiliations;
  let fixture: ComponentFixture<Affiliations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Affiliations],
    }).compileComponents();

    fixture = TestBed.createComponent(Affiliations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
