import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit{
  show=true;
  addContent:any;
  constructor(private fb:FormBuilder,private routes:Router,private contentservice:ContentsService){
    this.addContent = fb.group(
      {
        title:['',Validators.required],
        description:['',Validators.required],
        file:['',Validators.required],
        
      }
    )
  }
  ngOnInit(): void {
    
  }
  url="";
  onselectFile(e:any){
    if(e.target.files){
      var reader=new FileReader();
      var x=reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  onSubmit(){
    console.log(this.addContent.value);
    this.contentservice.addContent(this.addContent.value).subscribe((data : any)=>{
        console.log(data);
        this.routes.navigate(['list-content']);
    })
  }
}
