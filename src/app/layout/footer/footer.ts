import { Component, inject } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Observable } from 'rxjs';
import { InformationModel } from '../../models/information.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [AsyncPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  private informatioService = inject(InformationService);
  public information$: Observable<InformationModel> = this.informatioService.getInformation()

}
