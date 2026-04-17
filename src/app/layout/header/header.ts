import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public to = '';

  go(to: string) {
    const content = document.querySelector(to) as HTMLElement;
    const yOffset = -70;
    const y = content!.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });


    const menu = document.getElementById('menu-input') as HTMLInputElement;
    if (menu) {
      menu.checked = false;
    }
  }

  goHome() {
    this.go('app-hero')
  }
  goProjects() {
    this.go('app-projects')
  }
  goAbout() {
    this.go('app-about')
  }
  goContact() {
    this.go('app-contact')
  }

}
