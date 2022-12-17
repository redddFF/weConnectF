import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit{
  addContent:any;
  id:any;
  constructor(private fb:FormBuilder,private routes:Router,private contentservice:ContentsService,private url:ActivatedRoute){
    this.addContent = fb.group(
      {
        title:['',Validators.required],
        description:['',Validators.required],
      }
    )
  }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.contentservice.singleContent(this.id).subscribe(data=>{
      this.addContent.patchValue(data);
    })
  }
  onSubmit(){
    console.log(this.addContent.value);
    this.contentservice.updateContent(this.id,this.addContent.value).subscribe((data : any)=>{
        console.log(data);
        this.routes.navigate(['list-content']);
    })
  }

}
