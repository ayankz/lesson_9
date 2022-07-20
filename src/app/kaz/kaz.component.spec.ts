import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazComponent } from './kaz.component';

describe('KazComponent', () => {
  let component: KazComponent;
  let fixture: ComponentFixture<KazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
