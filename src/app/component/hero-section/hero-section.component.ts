import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Addressdata } from './addressdata';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit  {

  

   data: Addressdata[]=[
    {
      icon:"/assets/Location-Icon.svg",
      title:"Pay Us a Visit",
      content:"1600 Amphitheatre Parkway Mountain View"
    },
    {
      icon:"/assets/phone-call.svg",
      title:"Give Us a Call",
      content:"+91 7620015581"
    },
    {
      icon:"/assets/mail.png",
      title:"Send Us a Message",
      content:"Contact@HydraVTech.com"
    },

   ]
   
  
  ngOnInit(): void {
    this.getdata();
  }
  getdata(){

    console.log(this.data)
  }
  
}


