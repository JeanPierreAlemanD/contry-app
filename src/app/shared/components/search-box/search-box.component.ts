import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {


  @Output()
  public onVale = new EventEmitter<string>()

  @Input()
  placeholder: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  emitValue(value: string) {
    this.onVale.emit(value)
  }

}
