import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { InformationModel } from '../models/information.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  
  private url = `${environment.urlServer}/information`;
  private http = inject(HttpClient);

  getInformation(){
    return this.http.get<InformationModel>(this.url).pipe(first());
  }

}
