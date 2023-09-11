import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?: Subscription;


  @Input()
  placeholder: string = ''

  @Input()
  initialValueHijo: string = ''

  @Output()
  public onVale = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onDebounce.emit(value)
      console.log('debounceValues --> ', value);
    })
  }

  emitValue(value: string) {
    this.onVale.emit(value)
  }


  onKeypress(searchTerm: string) {
    this.debouncer.next(searchTerm);
    console.log(searchTerm);

  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


}
