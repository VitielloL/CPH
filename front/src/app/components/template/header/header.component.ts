import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faDiscord,
  faFacebook,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faFacebook = faFacebook;
  faTwitch = faTwitch;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor() {}

  ngOnInit(): void {}
}
