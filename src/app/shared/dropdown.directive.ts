import { Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // It would be much easier with Bootstrap3
  /* 
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
      this.isOpen = !this.isOpen;
  }
  */
 
  constructor(private elRef: ElementRef){
  }

  @HostListener('click') toggleOpen(){
    const elem = this.elRef.nativeElement.querySelector('.dropdown-menu').classList;
    if(elem.contains('show')){
     elem.remove('show');
    } else{
      elem.add('show');
    }
  }
}
