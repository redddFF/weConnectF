import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {
  contents: any;
  constructor(private contentservice:ContentsService,private routes:Router){}
  ngOnInit(): void {
    this.loadContent();
  }
  loadContent(){
    this.contentservice.listContent().subscribe((data:any)=>{
      console.log(data);
      this.contents=data;
    })
  }
  delContent(datas:any){
    this.contentservice.deleteContent(datas._id).subscribe(data=>{
      console.log(data);
      this.contents=this.contents.filter((u:any)=>u!==datas)
    })
  }
  url="";
 


}
