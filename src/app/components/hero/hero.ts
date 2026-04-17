import { Component, inject } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { InformationModel } from '../../models/information.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [AsyncPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  private informationService = inject(InformationService);
  public information$ : Observable<InformationModel> = this.informationService.getInformation();

  goProjects() {
    const content = document.querySelector('app-projects') as HTMLElement;
    const yOffset = -70;
    const y = content!.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }


}
