import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'dnt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  returnUrl: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  login() {
    // if (this.loginForm.get('userName').value === 'Admin'
    //   && this.loginForm.get('password').value === 'Admin'
    // ) {
    //   // redirect to employee
    //   const user = { id: 1, name: 'test' };
    //   this.router.navigate(['/employee', user]);
    //   // this.router.navigateByUrl('/employee');

    // }

    if (this.loginService.login(this.loginForm.get('userName').value,
      this.loginForm.get('password').value)) {
      this.route.queryParamMap.subscribe((res) => {
        const returnUrl = res.get('returnUrl') ? res.get('returnUrl') : '/employee';
        console.log(returnUrl);
        // const user = { id: 1, name: 'test' };
        this.router.navigate([returnUrl]);
      });

    }
  }

}
