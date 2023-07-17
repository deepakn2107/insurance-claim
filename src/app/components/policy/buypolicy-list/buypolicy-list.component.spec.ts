import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypolicyListComponent } from './buypolicy-list.component';

describe('BuypolicyListComponent', () => {
  let component: BuypolicyListComponent;
  let fixture: ComponentFixture<BuypolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuypolicyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuypolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
