import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.fontSize') myFontSize:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    this.myFontSize = '35px';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.myFontSize = '15px';
  }
}
