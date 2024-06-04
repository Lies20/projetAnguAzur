import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-current',
	standalone: true,
	imports: [],
	templateUrl: './current-tweet.component.html',
	styleUrl: './current-tweet.component.css'
})
export class CurrentTweetComponent {

	@Input()
	currentTweet: any;
}