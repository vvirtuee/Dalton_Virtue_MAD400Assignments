import { Component } from '@angular/core';
import { IContent } from '../models/icontent';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit{
  contentItem?: IContent;
  constructor(
    private router: Router,
    private contentService: ContentService,
    private route: ActivatedRoute) {
  }

  ngOnInit():void{

    //retrieve the IContent item from content service based on id passed into component
    //via routing rule created
    this.route.paramMap.subscribe(params => {
      let id: number = 0;
      
      //concat param from url
      id = +(params.get('id'));

      this.contentService.getContentItem(id).subscribe((singleDetailItem: IContent) => {

        if (singleDetailItem) {
          this.contentItem = singleDetailItem;
        }
        else {
          console.log("Item not found. Redirecting...");
          
          //angular redirect to 404
          this.router.navigate(["/404"]);
        }
      });
    });
  }
  
}
