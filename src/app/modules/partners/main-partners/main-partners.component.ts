import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-partners',
  templateUrl: './main-partners.component.html',
  styleUrls: ['./main-partners.component.scss'],
})
export class MainPartnersComponent {
  isFocused: boolean = false;
  focusedItem: string = 'FOR_PARTNERS';
  focusedCss: string = '';

  public handleClick(item: string) {
    this.focusedItem = item;
    if (item === 'FOR_PARTNERS') {
      this.isFocused = false;
      this.focusedCss = '';
    } else {
      this.isFocused = true;
      this.focusedAnimation(item);
    }
  }

  public focusedAnimation(item: string) {
    switch (item) {
      case 'YOUR_VALEN':
        this.focusedCss = 'transform translate-x-1/3 translate-y-1/3 scale-150';
        break;
      case 'YOUR_REGISTRATION':
        this.focusedCss =
          'transform -translate-x-1/4 translate-y-[40%] scale-150';
        break;
      case 'NEEDSCOPING':
        this.focusedCss =
          'transform -translate-x-1/2 -translate-y-[20%] scale-150 px-60 py-40';
        break;
      case 'PARTNERSSPHERE':
        this.focusedCss =
          'transform -translate-x-[10%] -translate-y-[50%] scale-150';
        break;
      case 'NEEDSOLVE':
        this.focusedCss =
          'transform translate-x-[40%] -translate-y-[35%] scale-150';
        break;
      default:
        break;
    }
  }
}
