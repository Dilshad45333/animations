import { Routes } from '@angular/router';
import { ScrollComponent } from './components/scroll/scroll.component';
import { BottleComponent } from './components/bottle/bottle.component';

export const routes: Routes = [
    {path:'scroll',component:ScrollComponent},
    {path:'bottle',component:BottleComponent}
];
