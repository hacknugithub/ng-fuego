import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Post } from './post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  postCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) { 
    this.postCollection = this.afs.collection("posts", ref => 
      ref.orderBy("trending", "desc").limit(10))
  }

  getPosts(): Observable<Post[]> {
    return this.postCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;       
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`)
  }

  getPostData(id: string){
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges();
  }

  create(data: Post) {
    return this.postCollection.add(data)
  }

  delete(id: string) {
    return this.getPost(id).delete()
  }

  update(id: string, data){
    return this.getPost(id).update(data)
  }


}
