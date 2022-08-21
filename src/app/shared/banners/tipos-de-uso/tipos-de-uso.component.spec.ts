import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDeUsoComponent } from './tipos-de-uso.component';

describe('TiposDeUsoComponent', () => {
  let component: TiposDeUsoComponent;
  let fixture: ComponentFixture<TiposDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDeUsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
