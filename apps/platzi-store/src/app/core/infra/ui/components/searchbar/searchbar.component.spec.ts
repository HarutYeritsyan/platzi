import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchbarComponent]
    });
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.todo('should emit a search event on click on search button');

  it.todo('should emit a search event on click on enter key');

  it.todo('should have its value synced with ngModel binded value');
});
