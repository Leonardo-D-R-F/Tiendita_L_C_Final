import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item_H_Component } from './item.component';
import { AuthService } from '../service/auth.service';

describe('ItemComponent', () => {
  let component: Item_H_Component;
  let fixture: ComponentFixture<Item_H_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_H_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_H_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
