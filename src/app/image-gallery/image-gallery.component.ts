import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {
  images: Image[] = [
    { id: 1, title: 'Image1', url: '../../assets/image1.jpeg' },
    { id: 2, title: 'Image2', url: '../../assets/image2.jpeg' },
    { id: 3, title: 'Image3', url: '../../assets/image3.jpeg' },
  ];

  currentImage!: Image | null;
  currentIndex!: number | null;

  openImage(image: Image) {
    this.currentImage = image;
    this.currentIndex = this.images.findIndex((i) => i.id === image.id);
  }

  closeImage(){
    this.currentImage =  null;
    this.currentIndex = null;
  }

  showPreviousImage() {
    if (this.hasPreviousImage() && this.currentIndex !== null) {
      this.currentIndex--;
      this.currentImage = this.images[this.currentIndex];
    }
  }
  
  showNextImage() {
    if (this.hasNextImage() && this.currentIndex !== null) {
      this.currentIndex++;
      this.currentImage = this.images[this.currentIndex];
    }
  }

  hasPreviousImage(): boolean {

    if (this.currentIndex !== null) {
      
      return this.currentIndex > 0;
    }
    return false;
  }

  hasNextImage(): boolean {
    if (this.currentIndex !== null) {
      
      return this.currentIndex < this.images.length - 1;
    }
    return false;
  }
}

interface Image {
  id: number;
  title: string;
  url: string;
}
