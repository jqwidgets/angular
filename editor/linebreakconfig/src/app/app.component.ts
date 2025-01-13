import { Component } from '@angular/core';

import { jqxEditorModule, jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
@Component({
	selector: 'app-root',
	imports: [jqxEditorModule],
	standalone: true,
	templateUrl: './app.component.html'
})

export class AppComponent {

	getWidth(): any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}

		return 850;
	}

}