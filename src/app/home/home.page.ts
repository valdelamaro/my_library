import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  books = [
    {
      title: "El Principito",
      img: "../../assets/img/book1.jpg",
      description: "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry.​",
      gender: 'literatura infantil'
    },
    {
      title: "Don Quijote",
      img: "../../assets/img/book2.jpg",
      description: "Don Quijote de la Mancha​ es una novela escrita por el español Miguel de Cervantes Saavedra",
      gender: 'Parodía, Satira'
    },
    {
      title: "El Arte de la guerra",
      img: "../../assets/img/book3.jpg",
      description: "Es un libro sobre tácticas y estrategias militares, escrito por Sun Tzu, un famoso estratega militar chino.",
      gender: 'Tratado, Biografia'
    },
    {
      title: "IT",
      img: "../../assets/img/book4.jpg",
      description: "It es una novela de terror publicada en 1986 por el escritor estadounidense Stephen King.",
      gender: 'Terror, Thriller, Fantasía oscura'
    },
    {
      title: "Harry Potter",
      img: "../../assets/img/book5.jpg",
      description: "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos",
      gender: 'literatura infantil, literatura fantastica'
    },
    
  ]
  
  constructor() {}

}
