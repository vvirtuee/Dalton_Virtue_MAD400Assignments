import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [

  //Assignment 4. ~ 8.) If a user visits root, they are 
  //automatically redirected to the /content relative url.
  {
    path: "",
    redirectTo: "content",
    pathMatch: "full",
  },

  //Assignment 4. ~ 7.) If a user visites /content in the URL,
  //they are shown the ContentList as the current page.
  {
    path: "content",
    component: ContentListComponent,
  },

  //Assignment 4. ~ 8.) If a user visits /content/## they are
  //shown the new detail compoenent as the current page
  {
    path: "content/:id",
    component: ContentDetailComponent
  },

  //Assignment 4. ~ 9.)
  {
    path: "search",
    component: SearchComponent
  },

  //Assignment 4. ~ 15.)
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
