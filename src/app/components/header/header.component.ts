import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      <h1 class="app-title">Suba Alto</h1>
      <span class="spacer"></span>
      <nav>
        <ul class="nav-list">
          <li><button mat-button routerLink="/home">Home</button></li>
          <li><button mat-button routerLink="/sobre">Sobre a Escalada</button></li>
          <li><button mat-button routerLink="/beneficios">Benefícios</button></li>
          <li><button mat-button routerLink="/inscricao">Inscrição</button></li>
          <li><button mat-button routerLink="/contato">Contato</button></li>
        </ul>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .app-title {
      margin: 0;
      font-size: 24px; /* Ajuste o tamanho conforme necessário */
    }

    .spacer {
      flex: 1 1 auto;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      display: flex;
      margin: 0;
    }

    .nav-list li {
      margin: 0 10px; /* Espaçamento entre os itens */
    }

    /* Media Queries para Responsividade */
    @media (max-width: 450px) {
      .app-title {
        font-size: 20px; /* Ajuste o tamanho do título */
      }

      .nav-list li {
        margin: 0 5px; /* Menor espaçamento entre itens */
      }

      .nav-list {
        flex-direction: column; /* Alinha os itens em coluna */
        margin-top: 10px; /* Espaço acima da lista */
      }
    }

    @media (min-width: 451px) and (max-width: 767px) {
      .app-title {
        font-size: 22px; /* Tamanho intermediário do título */
      }

      .nav-list li {
        margin: 0 8px; /* Espaçamento moderado entre itens */
      }
    }

    @media (min-width: 768px) {
      .app-title {
        font-size: 24px; /* Tamanho padrão do título */
      }

      .nav-list {
        flex-direction: row; /* Mantém a disposição em linha */
      }
    }
  `],
  imports: [MatToolbarModule, MatButtonModule]
})
export class HeaderComponent {}
