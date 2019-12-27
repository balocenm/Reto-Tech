import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProjectionComponent } from './client-projection.component';

describe('ClientProjectionComponent', () => {
  let component: ClientProjectionComponent;
  let fixture: ComponentFixture<ClientProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
