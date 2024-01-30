import { Component } from '@angular/core';
import {Contentlist} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: Contentlist = new Contentlist();

  

  constructor() {
    this.contentList.addContent({
      id: 1,
      title: "Champions League (2023)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1686432240/e263eecdfigx6flpx61f.jpg",
      type:"Soccer"
    });

    this.contentList.addContent({
      id: 2,
      title: "Champions League (2022)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"ESPN",
      imgUrl:"https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/pyqaawxxfwzeiib35hsm",
      type:"American football"
    });

    this.contentList.addContent({
      id: 3,
      title: "Champions League (2021)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://www.aljazeera.com/wp-content/uploads/2021/05/2021-05-29T211450Z_894872287_UP1EH5T1N0OMB_RTRMADP_3_SOCCER-CHAMPIONS-MCI-CHE-REPORT.jpg?resize=770%2C513&quality=80", 
      type:"American football"
    });


  }
}
