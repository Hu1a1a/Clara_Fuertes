import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppRecursoComponent {
  constructor(public dialog: MatDialog) { }
  async openModal() {
    this.dialog.open(DialogRecursos, {});
  }
}

@Component({
  selector: 'dialog-component-recursos',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [AngularMaterialModule],
})
export class DialogRecursos {
}
