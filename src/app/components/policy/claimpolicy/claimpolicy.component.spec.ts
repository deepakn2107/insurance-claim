import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimpolicyComponent } from './claimpolicy.component';

describe('ClaimpolicyComponent', () => {
  let component: ClaimpolicyComponent;
  let fixture: ComponentFixture<ClaimpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
