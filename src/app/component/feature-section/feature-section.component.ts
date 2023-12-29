import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent implements OnInit  {
   
   cardData : Data [] =[
   {cardImg:"/assets/stimulation.png",
     cardTitle:"Simulation",
     cardcontent:"The main idea behind this project was to create a smart device able to interact in any virtual world, where experiment a real sense of depth and a total immersion provided by body movement"
    }
   ,
   {cardImg:"/assets/Education.png",
    cardTitle:"Education",
    cardcontent:"The main idea behind this project was to create a smart device able to interact in any virtual world, where experiment a real sense of depth and a total immersion provided by body movement"
  }
  ,{cardImg:"/assets/selfcaqre.png",
    cardTitle:"Selfcare",
    cardcontent:"The main idea behind this project was to create a smart device able to interact in any virtual world, where experiment a real sense of depth and a total immersion provided by body movement"
  }
  ,{cardImg:"/assets/outdoor.png",
    cardTitle:"OutDoor",
    cardcontent:"The main idea behind this project was to create a smart device able to interact in any virtual world, where experiment a real sense of depth and a total immersion provided by body movement"
  }
   ]


   ngOnInit(): void {
    this.getData()
   }
   getData(){
    console.log(this.cardData)
   }

 
} 
