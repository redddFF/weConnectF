import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private http:HttpClient) { }
  addContent(content:any){
    return this.http.post('http://localhost:5000/postes',content);
  }

  listContent(){
    return this.http.get('http://localhost:5000/postes/');
  }
  
  deleteContent(id:any){
    return this.http.delete('http://localhost:5000/postes/'+id);
  }

  singleContent(id:any){
    return this.http.get('http://localhost:5000/postes/'+id);
  }

  updateContent(id:any,content:any){
    return this.http.patch('http://localhost:5000/postes/'+id,content);
  }

}
