import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from '../../../../environments/environment';

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
  UrlApi: string = environment.URL_PUBLIC

  ngOnInit(): void {
    this.Get()
  }
  async Get() {
    this.api.Get("curso/level1").then((a) => this.level1 = a)
    this.api.Get("curso/level2").then((a) => this.level2 = a)
    this.api.Get("curso/video").then((a) => this.video = a)
  }
  photoURL(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src.replace("share", "embed"));
  }
  canvaURL(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src.replaceAll("&#x2F;", "/"));
  }
  download(response: string) {
    const newBlob = new Blob([response], { type: "pdf" });
    const data = window.URL.createObjectURL(newBlob);
    const link = document.createElement("a");
    link.href = data;
    link.download = "fgdsgfsd.pdf"; // set a name for the file
    link.click();
  }

  CerrarSession() {
    localStorage.removeItem("jwt")
    this.router.navigate(["/login/"])
  }
}
