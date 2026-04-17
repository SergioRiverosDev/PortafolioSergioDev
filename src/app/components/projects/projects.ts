import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [AsyncPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  private projectService = inject(ProjectsService);

  public projects$ : Observable<ProjectModel[]> = this.projectService.getProjects()

  ngOnInit(){
    console.log(this.projects$)
  }

}
