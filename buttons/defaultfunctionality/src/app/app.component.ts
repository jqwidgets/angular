import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
@Component({
    selector: 'app-root',
    imports: [jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('textImageButton') myTextImageButton: jqxButtonComponent;
    @ViewChild('htmlButton') myHTMLButton: jqxButtonComponent;
    @ViewChild('events') events: ElementRef;

    buttonClicked(): void {
        this.events.nativeElement.innerHTML = '<span>Button Clicked</span>';
    }
    submitButtonClicked(): void {
        this.events.nativeElement.innerHTML = '<span>Submit Button Clicked</span>';
    }
    imageButtonClicked(): void {
        this.events.nativeElement.innerHTML = '<span>Image Button Clicked</span>';
    }
    textImageButtonClicked(): void {
        this.events.nativeElement.innerHTML = '<span>Text/Image Button Clicked</span>';
        this.myTextImageButton.setOptions({ textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center" });
    }
    hTMLButtonClicked(): void {
        this.events.nativeElement.innerHTML = '<span>HTML Button Clicked</span>';
        this.myHTMLButton.value("<span style='font-style: italic; position: relative; right: 8px'>Thanks for clicking me!</span>");
    }
}

