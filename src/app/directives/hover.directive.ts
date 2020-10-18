import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dntHover]'
})
export class HoverDirective implements OnInit {

  @Input() color = 'green';

  // @Input('dntHover') color = 'green';

  constructor(private el: ElementRef,
    private render: Renderer2) {
    console.log(el.nativeElement);
  }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = 'red';
    this.render.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseover') onmouseover() {
    console.log('hover event called');
    this.render.setStyle(this.el.nativeElement, 'background-color', 'steelblue');
    // this.render.addClass(this.el.nativeElement, '.hover')
  }

  @HostListener('mouseout') onmouseout() {
    console.log('hover event called');
    this.render.setStyle(this.el.nativeElement, 'background-color', 'white');
    // this.render.addClass(this.el.nativeElement, '.hover')
  }

}
