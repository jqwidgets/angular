import { Component } from '@angular/core';

import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
@Component({
	selector: 'app-root',
	imports: [jqxRangeSelectorModule],
	standalone: true,
	templateUrl: './app.component.html'
})

export class AppComponent {
	getWidth(): any {
		if (document.body.offsetWidth < 750) {
			return '90%';
		}

		return 750;
	}
}