import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarPage } from './menu-bar.page';

describe('MenuBarPage', () => {
  let component: MenuBarPage;
  let fixture: ComponentFixture<MenuBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
