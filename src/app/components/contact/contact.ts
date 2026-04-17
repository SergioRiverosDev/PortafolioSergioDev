import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationModel } from '../../models/information.model';
import { InformationService } from '../../services/information.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [AsyncPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  private informationService= inject(InformationService)
  public information$: Observable<InformationModel> = this.informationService.getInformation();

}
