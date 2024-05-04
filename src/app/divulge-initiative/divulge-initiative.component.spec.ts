import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivulgeInitiativeComponent } from './divulge-initiative.component';

describe('DivulgeInitiativeComponent', () => {
  let component: DivulgeInitiativeComponent;
  let fixture: ComponentFixture<DivulgeInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivulgeInitiativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivulgeInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
