import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images: Image[] = [
    { id: 1, title: 'image1', url: '../../assets/image1.jpeg' },
    { id: 2, title: 'image2', url: '../../assets/image2.jpeg' },
    { id: 3, title: 'image3', url: '../../assets/image3.jpeg' },
  ];

  currentIndex!: number | any;
  currentImage!: Image | null;

  hasPreviousImage(): boolean {
    return this.currentIndex > 0;
  }

  hasNextImage(): boolean {
    return this.currentIndex < this.images.length - 1;
  }

  openImage(image: Image) {
    this.currentImage = image;
    this.currentIndex =  this.images.findIndex((i)  => i.id === image.id);
  }


  closeImage(){
    this.currentImage = null;
    this.currentIndex = null;
  }

  showPreviousImage(){
    if (this.hasPreviousImage()) {
      this.currentIndex--;

      this.currentImage =  this.images[this.currentIndex];
      
    }
  }

  showNextImage(){
    if (this.hasNextImage()) {
      this.currentIndex++;
      this.currentImage = this.images[this.currentIndex];
      
    }
  }
}
interface Image {
  id: number;
  title: string;
  url: string;
}
