import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollComponent } from "./components/scroll/scroll.component";
import { ImageRotationComponent } from "./components/image-rotation/image-rotation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollComponent, ImageRotationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animations';
}
