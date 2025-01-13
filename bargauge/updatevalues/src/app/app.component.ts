import { Component, ViewChild } from '@angular/core';

import { jqxBarGaugeModule, jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';
import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    imports: [jqxSliderModule, jqxBarGaugeModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBarGauge') myBarGauge: jqxBarGaugeComponent;
    @ViewChild('redSlider') redSlider: jqxSliderComponent;
    @ViewChild('greenSlider') greenSlider: jqxSliderComponent;
    @ViewChild('blueSlider') blueSlider: jqxSliderComponent;

    customColorScheme: any = {
        name: 'rgb',
        colors: ['#307DD7', '#89A54E', '#AA4643']
    }

    title: any = {
        text: 'jqxBarGauge',
        font: {
            size: 40
        },
        verticalAlignment: 'top',
        margin: 0,
        subtitle: {
            text: '( visualization of "RGB" color proportions )',
            font: {
                size: 20
            }
        }
    }

    redSliderOnChange(): void {
        this.setColor();
    }

    greenSliderOnChange(): void {
        this.setColor();
    }

    blueSliderOnChange(): void {
        this.setColor();
    }

    setColor(): void {
        let red = this.redSlider.val();
        let green = this.greenSlider.val();
        let blue = this.blueSlider.val();
        this.myBarGauge.values(new Array(blue, green, red));
    }
}