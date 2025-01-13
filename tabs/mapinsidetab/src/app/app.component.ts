import { Component, ViewChild, ElementRef } from '@angular/core';

declare const google: any;

import { jqxTabsModule, jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';
@Component({
  selector: 'app-root',
  imports: [jqxTabsModule],
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  @ViewChild('map') map: ElementRef;

  ngAfterViewInit(): void {
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(this.map.nativeElement, {
      zoom: 17,
      center: { lat: 29.979234, lng: 31.134202 },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsDisplay.setMap(map);
  }

  getWidth(): any {
    if (document.body.offsetWidth < 600) {
      return '90%';
    }

    return 600;
  }
}