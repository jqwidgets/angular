import { Component } from '@angular/core';

import { jqxTabsModule, jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';
@Component({
	selector: 'app-root',
	imports: [jqxTabsModule],
	standalone: true,
	templateUrl: './app.component.html'
})

export class AppComponent {
	getWidth(): any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}

		return 600;
	}

}