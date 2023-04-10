import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsComponentComponent } from './ships-component.component';

describe('ShipsComponentComponent', () => {
  let component: ShipsComponentComponent;
  let fixture: ComponentFixture<ShipsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
