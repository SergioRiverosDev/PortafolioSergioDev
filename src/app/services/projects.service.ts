import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from '../models/project.model';
import { catchError, first, map, pipe } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private url = `${environment.urlServer}/projects`
  private http = inject(HttpClient);
  private fallbackUrl = 'database/db.json';

  getProjects(){
    return this.http.get<ProjectModel[]>(this.url).pipe(
      first(),
      catchError(() => {
        // Si Railway falla, lee el db.json local
        return this.http.get<{ projects: ProjectModel[] }>(this.fallbackUrl).pipe(
          map(db => db.projects)
        );
      })
    );
  }
}