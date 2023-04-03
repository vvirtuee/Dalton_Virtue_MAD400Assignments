import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarComponentComponent } from './top-nav-bar-component.component';

describe('TopNavBarComponentComponent', () => {
  let component: TopNavBarComponentComponent;
  let fixture: ComponentFixture<TopNavBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
