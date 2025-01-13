import { Component } from '@angular/core';

import { jqxMenuModule, jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
@Component({
	selector: 'app-root',
	imports: [jqxMenuModule],
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