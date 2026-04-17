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

}
