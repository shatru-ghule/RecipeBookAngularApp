import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  @HostListener('click') toggleShow(){
   this.isShow=!this.isShow;
  }

}
