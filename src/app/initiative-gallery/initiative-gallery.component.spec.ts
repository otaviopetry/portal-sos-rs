import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeGalleryComponent } from './initiative-gallery.component';

describe('InitiativeGalleryComponent', () => {
  let component: InitiativeGalleryComponent;
  let fixture: ComponentFixture<InitiativeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativeGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitiativeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
