import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-count-down-timer',
  templateUrl: './app-count-down-timer.component.html',
  styleUrls: ['./app-count-down-timer.component.scss']
})
export class AppCountDownTimerComponent {
 //task 3
 
  @Input()
  duration!: number;

  countdown!: number;

  ngOnInit(){
    this.countdown =  this.duration;
    setInterval(()=>{
      this.countdown--;
    },1000)
  }
}
