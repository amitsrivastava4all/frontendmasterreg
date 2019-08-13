import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResComponent } from './res.component';

describe('ResComponent', () => {
  let component: ResComponent;
  let fixture: ComponentFixture<ResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
