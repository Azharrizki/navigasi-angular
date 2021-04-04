import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  data: any = [];

  ngOnInit(): void {
  }
  masuk(data)
  {
    if (data.username === 'manager')
    {
      this.router.navigate(['/manager']);
    }
    if (data.username === 'karyawan')
    {
      this.router.navigate(['/karyawan']);
    }
  }

}
