import { Component, Input } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
 @Input() contentItem : any;
}
