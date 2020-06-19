import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './projects.service';
import {Project} from "./project";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
