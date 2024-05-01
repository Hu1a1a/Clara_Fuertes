import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-curso-portal',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCursoPortalComponent implements OnInit {
  constructor(private api: ApiService, private router: Router, private sanitizer: DomSanitizer) { }
  level1!: any
  slevel1!: any
  level2!: any
  slevel2!: any
  video!: any
  svideo!: any

  ngOnInit(): void {
    document.title = "Portal de curso"
    this.Get()
  }
  async Get() {
    this.api.GetCurso("level1").then((a) => this.level1 = a)
    this.api.GetCurso("level2").then((a) => this.level2 = a)
    this.api.GetCurso("video").then((a) => this.video = a)
  }
  photoURL(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src.replace("share", "embed"));
  }
}
