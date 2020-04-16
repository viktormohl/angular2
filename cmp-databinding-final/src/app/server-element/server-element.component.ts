import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';
import {ServerElementData} from '../model/server-element.data';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated(default), None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: ServerElementData;
  @Input() name: string;
  /** lifecycle hooks and template access */
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  /** Called after a bound input property changes */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  /** Called once the component is initialized */
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  /** Called during every change detection run */
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  /** Called after content (ng-content) has been projected into view */
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    // not available yet
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  /** Called every time the projected content has been checked */
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  /** Called after the component’s view (and child views) has been initialized */
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    // only available after view init
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  /** Called every time the view (and child views) have been checked */
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  /** Called once the component is about to be destroyed */
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
