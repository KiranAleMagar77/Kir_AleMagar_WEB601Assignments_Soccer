import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentTypePipe } from '../content-type.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
  


showContentIdTitle(contentItem: Content): void {
  console.log(`ID: ${contentItem.id}, Title: ${contentItem.title}`);
}

@Input () contentList: Content[] = [];
  
  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  



  checkContentExists() {
    const foundItem = this.contentList.some(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    if(foundItem){
      this.message= `Content item with titke '${this.searchTitle}' exist. `;
    } else{
      this.message= `no content item found with title '${this.searchTitle}'.`;
    }
 

  }


  ngOnInit(): void {
    this.contentList= [
    {
      id: 1,
      title: "Champions League (2023)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1686432240/e263eecdfigx6flpx61f.jpg",
      type:"Soccer",
      tags: ["mancity", "intermilan"]
    },
    {
      
        id: 2,
        title: "Champions League (2022)",
        description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
        creator:"ESPN",
        imgUrl:"https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/pyqaawxxfwzeiib35hsm",
        type:"",
        tags: ["RealMadird", "LiverPool"]
    },
    {
      id: 3,
      title: "Champions League (2021)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://www.aljazeera.com/wp-content/uploads/2021/05/2021-05-29T211450Z_894872287_UP1EH5T1N0OMB_RTRMADP_3_SOCCER-CHAMPIONS-MCI-CHE-REPORT.jpg?resize=770%2C513&quality=80", 
      type:"",
      tags: ["Chealsea", "ManCity"]
    },
    {
      id: 4,
      title: "Champions League (2020)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/003/881/396/hi-res-0cb80318434a9af187c7761cb740c3e6_crop_north.jpg", 
      type:"Football",
      tags: ["PSG", "Bayern"]
    },
    {
      id: 5,
      title: "Champions League (2019)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/07/11/15628556340481.jpg", 
      type:"Soccer",
      tags: ["Liverpool", "Tottenhem"]
    },
    {
      id: 6,
      title: "Champions League (2018)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/e/eb/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018.jpg", 
      type:"Soccer",
      tags: ["RealMadrid", "Liverpool"]
    },
    {
      id: 7,
      title: "Champions League (2017)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"https://static01.nyt.com/images/2017/06/04/sports/champions-top/champions-top-superJumbo.jpg?quality=75&auto=webp", 
      type:"Football",
      tags: ["RealMadrid", "Juventus"]
    },
    {
      id:8,
      title: "Champions League (2016)",
      description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
      creator:"UEFA",
      imgUrl:"",
      type :"",
      tags: ["RealMadrid", "Atletico Madrid"]
    },
  ]

}
}
