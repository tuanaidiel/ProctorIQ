import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementPageComponent } from './agreement-page.component';

describe('AgreementPageComponent', () => {
  let component: AgreementPageComponent;
  let fixture: ComponentFixture<AgreementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
