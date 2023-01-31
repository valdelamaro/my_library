import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email: [
      {type: "required", message: "El Email es Obligatorio"},
      {type: "pattern", message: "Tu Email no es valido"}
    ], 
    password: [
      {type: "required", message: "La contraseña es Obligatoria"},
      {type: "pattern", message: "La contraseña es invailda"}
      
    ]
    
  }

  errorMessage: any;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthenticateService, 
    private navCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController
     ) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl( 
        "",
        Validators.compose([ 
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(data: any) {
    console.log(data);
    this.auth.loginUser(data).then( (res: any) => {
      this.storage.set("isUserLoggedIn", true);
      this.storage.set("user_id", res.user.id);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.presentAlert("Opps", "Hubo un error", err);
    });
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }
  
  Register(){}
}