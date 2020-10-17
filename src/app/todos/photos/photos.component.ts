import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'dnt-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loaded: number = 0;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Your request is sent!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          if (event.status === 200) {
            console.log('Your request is in progress');
          }
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.loaded += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });
  }

}
