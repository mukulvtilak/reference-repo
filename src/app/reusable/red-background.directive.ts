import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mouseHover]'
})
export class RedBackgroundDirective {
  @Input() borderColor: string = "#999999";
  _element: ElementRef;

  constructor(el: ElementRef) {
    this._element = el;
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

   highlight(arg) {
     this._element.nativeElement.style.border = arg? "2px dashed " + this.borderColor : "none";
   }

}
