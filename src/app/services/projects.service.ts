import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from '../models/project.model';
import { first, pipe } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private url = `${environment.urlServer}/projects`
  private http = inject(HttpClient);

  getProjects(){
    return this.http.get<ProjectModel[]>(this.url).pipe(first());
  }
}