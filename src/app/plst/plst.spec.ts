import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plst } from './plst';

describe('Plst', () => {
  let component: Plst;
  let fixture: ComponentFixture<Plst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
