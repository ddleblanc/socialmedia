import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[hammertime]'
})
export class HammertimeDirective {

  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();

  constructor() { }



  @HostListener('tap', ['$event'])
  onTap(e) {
    if (e.tapCount === 2) {
      this.doubleTap.emit(e)
    }

    if (e.tapCount === 3) {
      this.tripleTap.emit(e)
    }
  }

}
