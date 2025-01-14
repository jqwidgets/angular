import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { map } from 'rxjs/operators';
import {
  jqxExpanderModule,
  jqxExpanderComponent,
} from 'jqwidgets-ng/jqxexpander';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxListBoxModule, jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxTreeModule, jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

import {
  jqxSplitterModule,
  jqxSplitterComponent,
} from 'jqwidgets-ng/jqxsplitter';
@Component({
  selector: 'app-root',
  imports: [
    jqxSplitterModule,
    jqxTreeModule,
    jqxListBoxModule,
    jqxPanelModule,
    jqxExpanderModule,
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('feedContentExpander') feedContentExpander: jqxExpanderComponent;
  @ViewChild('feedListExpander') feedListExpander: jqxExpanderComponent;
  @ViewChild('listBoxReference') myListBox: jqxListBoxComponent;
  @ViewChild('panelReference') myPanel: jqxPanelComponent;
  @ViewChild('treeReference') myTree: jqxTreeComponent;
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }
  constructor() {}
  ngAfterViewInit(): void {
    this.getFeed('sciencedaily');
  }

  onTreeSelect(event: any): void {
    let item = this.myTree.getItem(event.args.element);
    this.getFeed(this.config['feeds'][item.label]);
  }

  onListBoxSelect(event: any): void {
    this.loadContent(event.args.index);
  }

  selectFirst(): void {
    this.myListBox.selectIndex(0);
    this.loadContent(0);
  }

  getFeed(feed: any): void {
    this.config['currentFeed'] = feed;
    if (feed !== undefined) {
      feed = this.config['dataDir'] + '/' + feed + '.' + this.config['format'];
      this.loadFeed(feed);
    }
  }

  loadFeed(feed: any, callback?: any): void {}

  displayFeedHeader(header: string): void {
    this.feedListExpander.setHeaderContent(header);
  }

  displayFeedList(items: any): void {
    let headers = this.getHeaders(items);
    this.myListBox.source(headers);
  }

  getHeaders(items: any): any {
    let headers = [],
      header;
    for (let i = 0; i < items.length; i += 1) {
      header = items[i].title;
      headers.push(header);
    }
    return headers;
  }

  loadContent(index: number): void {
    let item = this.config['currentFeedContent'][index];
    if (item != null) {
      this.myPanel.clearcontent();
      this.myPanel.prepend(
        '<div style="padding: 1px;"><span>' + item.description + '</span></div>'
      );
      this.addContentHeaderData(item);
      this.config['selectedIndex'] = index;
    }
  }

  addContentHeaderData(item: any): void {
    let link = document.createElement('a');
    link.style.whiteSpace = 'nowrap';
    link.style.marginLeft = '15px';
    link.target = '_blank';
    let text = document.createTextNode('Source');
    link.appendChild(text);
    let date = document.createElement('div');
    date.style.whiteSpace = 'nowrap';
    date.style.marginLeft = '30px';
    date.appendChild(document.createTextNode(item.pubDate));
    let container = <HTMLElement>document.createElement('table');
    container.style.height = '100%';
    let element1 = <HTMLElement>document.createElement('tr');
    container.appendChild(element1);
    container.appendChild(document.createElement('td'));
    container.appendChild(document.createElement('td'));
    link.href = item.link;
    (<HTMLElement>document.getElementById('feedItemHeader')).innerHTML = null;
    (<HTMLElement>document.getElementById('feedItemHeader')).appendChild(
      container
    );
    container.getElementsByTagName('td')[0].appendChild(link);
    container.querySelector('td:last-child').appendChild(date);
    this.feedContentExpander.setHeaderContent(container.outerHTML);
  }

  config: any = {
    feeds: {
      'CNN.com': 'cnn',
      'Geek.com': 'geek',
      ScienceDaily: 'sciencedaily',
    },
    format: 'txt',
    dataDir: '../assets',
    feedTree: <HTMLElement>document.getElementsByTagName('angularTree')[0],
    feedItemHeader: <HTMLElement>document.getElementById('feedItemHeader'),
    feedUpperPanel: <HTMLElement>document.getElementById('feedUpperPanel'),
    feedHeader: <HTMLElement>document.getElementById('feedHeader'),
    feedContentArea: <HTMLElement>document.getElementById('feedContentArea'),
    selectedIndex: -1,
    currentFeed: '',
    currentFeedContent: {},
  };
}
