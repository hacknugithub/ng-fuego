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

  constructor(private afs: AngularFirestore) { 
    this.postCollection = this.afs.collection("posts", ref => 
      ref.orderBy("claps", "desc").limit(10))
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
  
  create(data: Post) {
    return this.postCollection.add(data)
  }


}
