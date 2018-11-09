import { NgModule } from '@angular/core';
import { CurrentUserComponent } from './current-user/current-user';
import { UserPostComponent } from './user-post/user-post';
import { PostCommentComponent } from './post-comment/post-comment';
import { AlbumsComponent } from './albums/albums';
import { PhotoPrewiewComponent } from './photo-prewiew/photo-prewiew';
import { UserAlbumComponent } from './user-album/user-album';
import { UserPhotosComponent } from './user-photos/user-photos';
@NgModule({
	declarations: [CurrentUserComponent,
    UserPostComponent,
    PostCommentComponent,
    AlbumsComponent,
    PhotoPrewiewComponent,
    UserAlbumComponent,
    UserPhotosComponent],
	imports: [],
	exports: [CurrentUserComponent,
    UserPostComponent,
    PostCommentComponent,
    AlbumsComponent,
    PhotoPrewiewComponent,
    UserAlbumComponent,
    UserPhotosComponent]
})
export class ComponentsModule {}
