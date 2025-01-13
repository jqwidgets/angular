import { Component } from '@angular/core';

import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
@Component({
	selector: 'app-root',
	imports: [jqxRangeSelectorModule],
	standalone: true,
	templateUrl: './app.component.html'
})

export class AppComponent {
	min: Date = new Date(2024, 0, 1);
	max: Date = new Date(2024, 11, 31);
	range: any = { from: new Date(2024, 3, 15), to: new Date(2024, 7, 29) };
	getWidth(): any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}

		return 700;
	}

}