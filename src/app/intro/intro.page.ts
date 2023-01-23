import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Librería Durans",
      subtitle: "todo en libros",
      img: "../../assets/img/book1.jpg",
      description: "Bienvenido"
    },
    {
      title: "Librería Durans",
      subtitle: "Don Quijote",
      img: "../../assets/img/book2.jpg",
    },
    {
      title: "Librería Durans",
      subtitle: "El Arte de la guerra",
      img: "../../assets/img/book3.jpg",
    },
    {
      title: "Librería Durans",
      subtitle: "IT",
      img: "../../assets/img/book4.jpg",
    },
    {
      title: "Librería Durans",
      subtitle: "Harry Potter",
      img: "../../assets/img/book5.jpg",
    },
    
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login");
  }
  ngOnInit() {
  }

}
