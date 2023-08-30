import { Component } from '@angular/core';
import { IGaleria } from './galeria/IGaleria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  galerias: IGaleria[] = [
    {
      heroes: "Superman",
      enlaces: {
        href: 'https://logoblink.com/static/0b6d4ce5c7b9891df4d74d1f1d134cce/cf84a/superman-logo-logoblink.png'
      }

    },
    {
      heroes: "WonderWoman",
      enlaces: {
        href: 'https://assets.turbologo.com/blog/en/2019/12/19084757/Wonder-woman-first-logo.png'
      }

    },
    {
      heroes: "BatMan",
      enlaces: {
        href: 'https://i.pinimg.com/originals/fa/f8/a5/faf8a522bec53e283aaeef4235d275d9.jpg'
      }

    },
    {
      heroes: "The Flash",
      enlaces: {
        href: 'https://i.pinimg.com/736x/b8/92/79/b89279c75889ec0683f97cfc3f87b400.jpg'
      }

    },
    {
      heroes: "Aquaman",
      enlaces: {
        href: 'https://1000logos.net/wp-content/uploads/2018/12/Aquaman-2017-logo.jpg'
      }

    },
    {
      heroes: "Cyborg",
      enlaces: {
        href: 'https://www.supermanhomepage.com/images/justice-league-movie/170324-Logo-Cyborg.jpg'
      }

    }
  ]
  
  
}
