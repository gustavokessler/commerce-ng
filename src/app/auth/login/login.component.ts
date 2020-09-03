import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if(user){
        this.router.navigate(["/"]);
      }
    })
  }

  createAccount(): void{
    this.router.navigate(["/auth/cadastro"]);
  }

  loginSuccess(a): void{
    // todo dispatch action login success
    // this.auth.user$.of(a.providerData[0]);
  }

  loginError(event): void{
    console.log(event);
  }

}
