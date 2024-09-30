import { Component } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API-Angular';
  constructor(private freeApiService:FreeapiService){}

  listComments: Comments[] = [];
  listPosts: Posts[] = [];
  postObject!: Posts;
  putObject!:Posts;
  patchObject!:Posts;
  message:string='';
  
  ngOnChanges(){
    console.log('this is onchange hook')
  }
  ngOnInit(){
    console.log('this is onit hook')
    this.freeApiService.getComments().subscribe(data=>{
     this.listComments=data;
    });

    this.freeApiService.getCommentsByParameter().subscribe(data=>{
      this.listPosts=data;
    });

// creating an object to be posted
var post=new Posts()
post.body='hello ,how are you guys??'
post.email='hello@io'
post.id=1
post.name='anant'
post.postId=67

this.freeApiService.post(post).subscribe(data=>
  { this.postObject=data;
  // this object will be filled when post api is called
// but in html we are accessing this before the object is filled so in html this object is null  so error will be there
// for removing that error we used nullable(?) operator in html 
});

var post2=new Posts()
post2.body='this is the updated body'
post2.email='updated email'
// post.id=100-->not to write as in url itself we are writing id 1
post2.name='new name'
post2.postId=89

this.freeApiService.put(post2).subscribe(data=>
  { this.putObject=data;
    // now bind the data above to html
 });

var post3=new Posts()
post3.body='this is the patched body'
post3.email='patched email'
// post.id=100-->not to write as in url itself we are writing id 1
post3.name='patched name'
post3.postId=1001


 this.freeApiService.patch(post3).subscribe(data=>
  { this.patchObject=data;
    // now bind the data above to html
 });


 this.freeApiService.delete().subscribe(data=>
  { this.message='Resource deleted successfully'
  // binded above msg to the html
  });


  }

  
  
}
