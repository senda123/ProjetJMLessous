import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationListClientComponent } from './operation-list-client.component';

describe('OperationListClientComponent', () => {
  let component: OperationListClientComponent;
  let fixture: ComponentFixture<OperationListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationListClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
