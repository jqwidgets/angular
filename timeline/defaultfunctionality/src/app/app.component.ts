import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxTimelineComponent } from 'jqwidgets-ng/jqxtimeline';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('myTimeline', { static: false }) myTimeline: jqxTimelineComponent;
	
	dataSource = [
	 { date: "May 15, 2024", description: "Flight: Reserving airline tickets", subtitle: "May 15, 2024", title: "Flight Reservation", icon: "material-icons flight", dotCSS: "" },
	 { date: "June 22, 2024", description: "Hotel: Booking for the trip", subtitle: "June 22, 2024", title: "Booking", icon: "material-icons hotel", dotCSS: "" },
	 { date: "July 12, 2024", description: "Flight: Take off", subtitle: "July 12, 2024", title: "Flight", icon: "material-icons flight-takeoff", dotCSS: "" },
   	 { date: "July 13, 2024", description: "Excursion Plans: Hiking", subtitle: "July 13, 2024", title: "Plans", icon: "material-icons hiking", dotCSS: "" }
	]
}
