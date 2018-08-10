import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification.ts';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('timerNotification') timerNotification: jqxNotificationComponent;
    @ViewChild('correctNotification') correctNotification: jqxNotificationComponent;
    @ViewChild('wrongNotification') wrongNotification: jqxNotificationComponent;
    @ViewChild('errorTimeOutNotification') errorTimeOutNotification: jqxNotificationComponent;
    @ViewChild('answerInput') answerInput: jqxInputComponent;
    @ViewChild('timerNotificationContent') timerNotificationContent: ElementRef;

    notificationWidth: number = 300;
    position: string = 'top-right';
    
    interval: any = null;
    seconds = 30;
    intervalStart() {
       let interval = setInterval(() => {
            if (this.seconds > 1) {
                this.seconds--;
                let innerSpan = this.timerNotificationContent.nativeElement.getElementsByTagName('SPAN')[0];
                innerSpan.innerText = this.seconds;



                // TODO: Try to create better solution



                this.timerNotification.closeLast();
                this.timerNotification.open();
            } else {
                clearInterval(interval);
                this.timerNotification.closeLast();
            }
        }, 1000);

       return interval;
    }

    ngAfterViewInit() {
        this.interval = this.intervalStart();
    }

    submitAnswerClick(): void {
        if (this.seconds > 1) {
            if (this.answerInput.val() == 8) {
                this.correctNotification.open()
                clearInterval(this.interval);
                this.timerNotification.closeLast();
            } else {
                this.wrongNotification.open();
            }
        } else {
            this.errorTimeOutNotification.open();
        }
    };
}