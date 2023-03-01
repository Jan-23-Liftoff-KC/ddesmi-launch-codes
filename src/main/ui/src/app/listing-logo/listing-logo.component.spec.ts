import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingLogoComponent } from './listing-logo.component';

describe('ListingLogoComponent', () => {
  let component: ListingLogoComponent;
  let fixture: ComponentFixture<ListingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
