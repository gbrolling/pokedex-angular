import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent implements OnInit {
  options: AnimationOptions = {
    path: './assets/LottieAnimation/squirtle.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };

  constructor() { }

  ngOnInit(): void {
  }

}
