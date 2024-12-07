import { LitElement, html, css, CSSResultGroup } from "lit";
import resetCSS from "./resetCSS";
import { customElement } from "lit/decorators.js";

@customElement("c-header")
class Header extends LitElement {
  static styles?: CSSResultGroup = [
    resetCSS,
    css`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 1rem;
        color: #000;

        & h1 {
          a {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            img {
              width: 30px;
            }
          }
        }

        & nav {
          & ul {
            display: flex;
            align-items: center;
            gap: 0.8rem;
          }
        }
      }
    `,
  ];

  render() {
    return html` <header class="header">
      <h1>
        <a href="/">
          <img src="/logo.png" alt="" width="30" />
          <span>범 공인중개사</span>
        </a>
      </h1>
      <nav>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/src/pages/product/">Product</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </nav>
    </header>`;
  }
}
