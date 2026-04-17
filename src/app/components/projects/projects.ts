import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { AsyncPipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-projects',
  imports: [AsyncPipe, NgxPaginationModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  private projectService = inject(ProjectsService);
  public currentPage = 1;
  public itemsPerPage = 3;

  public projects$ : Observable<ProjectModel[]> = this.projectService.getProjects()
  /* for del html |paginate:{itemsPerPage,currentPage} */

  ngOnInit(){
    console.log(this.projects$)
  }
  pageChange(page:number){
    this.currentPage=page;
  }

}
