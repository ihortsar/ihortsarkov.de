import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['skyscrapers.jpg', 'comp.jpg', 'code.jpg']
  headlines = [
    'Bring engineering to a new level',
    'Think out of a box',
    'Creative solutions'
  ]
  currentImage = 0
  showImage = true

  ngOnInit() {
    this.updateImages()
  }


  updateImages() {
    setInterval(() => {
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length
      this.showImage = false
      setTimeout(() => {
        this.showImage = true
      }, 15);

    }, 8000)

  }
}


