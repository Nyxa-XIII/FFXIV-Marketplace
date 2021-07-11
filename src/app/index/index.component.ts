import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private router:Router){}
  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {
  }

}
