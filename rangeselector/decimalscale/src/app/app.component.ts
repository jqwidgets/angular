import { Component } from '@angular/core';

import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
@Component({
	selector: 'app-root',
	imports: [jqxRangeSelectorModule],
	standalone: true,
	templateUrl: './app.component.html'
})

export class AppComponent {
	formatFunction(value: number): string {
		return jqx.dataFormat.formatNumber(value, 'f1') + " mm";
	}

	getWidth(): any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}

		return 700;
	}

}