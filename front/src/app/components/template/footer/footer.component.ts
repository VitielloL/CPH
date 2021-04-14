import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faInstagramSquare,
  faDiscord,
  faFacebook,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faInstagramSquare = faInstagramSquare;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faFacebook = faFacebook;
  faTwitch = faTwitch;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor() {}

  ngOnInit(): void {}
}
