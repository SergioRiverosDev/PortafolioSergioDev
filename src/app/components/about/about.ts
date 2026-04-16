import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  technologies = [
    {
      name: 'HTML',
      img: '/img/html5.svg',
      description: 'Creación de estructuras semánticas accesibles y optimizadas para SEO.'
    },
    {
      name: 'CSS',
      img: '/img/css_old.svg',
      description: 'Diseño de interfaces visuales atractivas y responsivas.'
    },
    {
      name: 'Angular',
      img: '/img/angular.svg',
      description: 'Construcción de aplicaciones web escalables con arquitectura modular.'
    },
    {
      name: 'Bootstrap',
      img: '/img/bootstrap.svg',
      description: 'Desarrollo ágil de interfaces responsivas con componentes reutilizables.'
    },
    {
      name: 'Git',
      img: '/img/git.svg',
      description: 'Gestión eficiente del código y seguimiento de cambios en proyectos.'
    },
    {
      name: 'GitHub',
      img: '/img/github_dark.svg',
      description: 'Plataforma de desarrollo colaborativo con control de versiones.'
    },
  ];

}
