import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { BeneficiosComponent } from "./components/beneficios/beneficios.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { InscricaoComponent } from "./components/inscricao/inscricao.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroImageComponent, BeneficiosComponent, ContatoComponent, HeaderComponent, HomeComponent, InscricaoComponent, SobreComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subaAlto';
}
