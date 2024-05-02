import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentCardGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppMainComponent implements OnInit {
  ngOnInit(): void {
    document.title = "Link en biografía de IG de ensaladas"
  }
  card: { Name: string, Text: string, Star: number }[] = [
    {
      Name: "Leni N.",
      Text: "“Es una gran profesional que desde el principio abordó mi problema digestivo dando soluciones y consiguiendo que en poco tiempo mejorase de forma abismal.”",
      Star: 5
    },
    {
      Name: "Ariadna F.",
      Text: "“Es muy cercana. Sabe lo que necesitas y te anima en todo momento a alcanzar los objetivos. ¡Muy profesional! ¡La recomiendo 100%!”",
      Star: 5
    },
    {
      Name: "Carmen G.",
      Text: "“El trabajo de Clara conmigo ha sido excepcional. He aprendido a comer y ahora me siento mejor con mi cuerpo.”",
      Star: 5
    },
    {
      Name: "Lorena P.",
      Text: "“Clara me ha acompañado en mi proceso para conseguir mis objetivos personales enseñándome hábitos alimenticios con disciplina. ¡Super contenta con los resultados conseguidos!”",
      Star: 5
    },
    {
      Name: "Sara P.",
      Text: "“Una gran profesional que se preocupa mucho por tus necesidades. El trato es inmejorable. Atenta, respetuosa y dedicada. Estoy encantada desde visito con ella y sigo sus dietas y pautas”",
      Star: 5
    },
    {
      Name: "Joan N.",
      Text: "“El mejor método para mejorar la alimentación. Seguimiento constante y acompañamiento en todo el proceso”",
      Star: 5
    },
    {
      Name: "Oscar L.",
      Text: "“Clara es mi dietista desde hace unos años, puedo decir que mi experiencia con ella es inmejorable. He tenido un seguimiento exhaustivo de la evolución. La recomiendo 100%.”",
      Star: 5
    },
    {
      Name: "Vinyet P.",
      Text: "“Me ha ayudado con la dieta baja en FODMAPS para recuperarme del SIBO y otras intolerancias que sufro.Siempre dispuesta a despejar todo tipo de dudas, soy muy preguntona :). ¡La recomiendo sin lugar a dudas!”",
      Star: 5
    },
    {
      Name: "Joan N.",
      Text: "“¡Voy a estar eternamente agradecida a Clara! En todo momento me ayudó, me guió y lo más importante empatizó conmigo desde el minuto 1. Gracias por tu gran labor te voy a seguir recomendando siempre!”",
      Star: 5
    },
  ]
}
