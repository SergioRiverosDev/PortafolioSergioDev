import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { InformationModel } from '../models/information.model';
import { catchError, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformationService {

  private url = `${environment.urlServer}/information`;
  private http = inject(HttpClient);
  private fallbackUrl = 'database/db.json';

  getInformation() {
    return this.http.get<InformationModel>(this.url).pipe(
      first(),
      catchError(() => {
        // Si Railway falla, lee el db.json local
        return this.http.get<{ information: InformationModel }>(this.fallbackUrl).pipe(
          map(db => db.information)
        );
      })
    );
  }

}
