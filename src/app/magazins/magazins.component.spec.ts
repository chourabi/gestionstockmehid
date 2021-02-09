import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinsComponent } from './magazins.component';

describe('MagazinsComponent', () => {
  let component: MagazinsComponent;
  let fixture: ComponentFixture<MagazinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
