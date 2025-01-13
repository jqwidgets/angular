import { Component, ViewEncapsulation } from '@angular/core';

import { jqxSplitterModule, jqxSplitterComponent } from 'jqwidgets-ng/jqxsplitter';
@Component({
	selector: 'app-root',
	imports: [jqxSplitterModule],
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {

	getWidth(): any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}

		return 850;
	}


}