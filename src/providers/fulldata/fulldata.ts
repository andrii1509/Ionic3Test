import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the FulldataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FulldataProvider {
  usersLink = 'https://jsonplaceholder.typicode.com/users';
  todosLink = 'https://jsonplaceholder.typicode.com/users/todos';
  postsLink = 'https://jsonplaceholder.typicode.com/posts';
  commentsLink = 'https://jsonplaceholder.typicode.com/comments';
  albumsLink = 'https://jsonplaceholder.typicode.com/albums';
  photosLink = 'https://jsonplaceholder.typicode.com/photos';

  constructor(public http: HttpClient) {
    console.log('Hello FulldataProvider Provider');
  }
  getAllUsers() : Observable<any[]>{
    return this.http.get<any[]>(this.usersLink)
  }
  getAllTodos() : Observable<any[]>{
    return this.http.get<any[]>(this.todosLink)
  }
  getAllPosts() : Observable<any[]>{
    return this.http.get<any[]>(this.postsLink)
  }
  getAllComments() : Observable<any[]>{
    return this.http.get<any[]>(this.commentsLink)
  }
  getAllAlbums() : Observable<any[]>{
    return this.http.get<any[]>(this.albumsLink)
  }
  getAllPhotos() : Observable<any[]>{
    return this.http.get<any[]>(this.photosLink)
  }
  getUserData(){

  }

}
