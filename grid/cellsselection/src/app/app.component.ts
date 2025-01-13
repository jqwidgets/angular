import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxDropDownListComponent, jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputComponent, jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { generatedata } from '../assets/generatedata';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@Component({
    selector: 'app-root',
    imports: [jqxGridModule, jqxDropDownListModule, jqxInputModule, jqxCheckBoxModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;
    @ViewChild('myInput1') myInput1: jqxInputComponent;
    @ViewChild('myInput2') myInput2: jqxInputComponent;
    @ViewChild('selectedCell') selectedCell: ElementRef;
    @ViewChild('unselectedCell') unselectedCell: ElementRef;

    ngAfterViewInit(): void {
        this.myGrid.selectcell(2, 'lastname');
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            localdata: generatedata(200, false),
            datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
            datatype: 'array'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'First Name', datafield: 'firstname', width: 200 },
            { text: 'Last Name', datafield: 'lastname', width: 200 },
            { text: 'Product', datafield: 'productname', width: 180 },
            { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
            { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
        ];

    dropDownSource1: string[] = ['none', 'single cell', 'multiple cells', 'multiple cells extended', 'multiple cells advanced'];

    dropDownSource2: string[] = ['First Name', 'Last Name', 'Product Name', 'Quantity', 'Unit Price', 'Total'];

    scrollToBtnOnClick(): void {
        let index = parseInt(this.myInput1.val());
        if (!isNaN(index)) {
            this.myGrid.ensurerowvisible(index);
        }
    };

    clearBtnOnClick(): void {
        this.myGrid.clearselection();
    };

    selectBtnOnClick(): void {
        let index = parseInt(this.myInput2.val());
        let columnindex = this.myDropDownList.getSelectedIndex();
        let columndatafield = this.myGrid.getcolumnat(columnindex).datafield;
        if (!isNaN(index)) {
            this.myGrid.selectcell(index, columndatafield);
        }
    };

    // enable or disable the selection.
    myDropDownListOnSelect(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myGrid.selectionmode('none');
                break;
            case 1:
                this.myGrid.selectionmode('singlecell');
                break;
            case 2:
                this.myGrid.selectionmode('multiplecells');
                break;
            case 3:
                this.myGrid.selectionmode('multiplecellsextended');
                break;
            case 4:
                this.myGrid.selectionmode('multiplecellsadvanced');
                break;
        }
    };

    // enable or disable the hover state.
    myCheckBoxOnChange(event: any): void {
        this.myGrid.enablehover(event.args.checked);
    };

    // display selected row index.
    myGridOnCellSelect(event: any): void {
        let columnheader = this.myGrid.getcolumn(event.args.datafield).text;
        this.selectedCell.nativeElement.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
    };

    // display unselected row index.
    myGridOnCellUnselect(event: any): void {
        let columnheader = this.myGrid.getcolumn(event.args.datafield).text;
        this.unselectedCell.nativeElement.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
    };
}