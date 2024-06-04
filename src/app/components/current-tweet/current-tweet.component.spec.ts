import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTweetComponent } from './current-tweet.component';

describe('CurrentTweetComponent', () => {
  let component: CurrentTweetComponent;
  let fixture: ComponentFixture<CurrentTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTweetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
