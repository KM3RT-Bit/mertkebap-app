import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Details } from '../details/details';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Header, Details],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class HomepageComponent {}
