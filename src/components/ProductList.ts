import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import resetCSS from "../Layout/resetCSS";
import { Product } from "../@types/type";
import { getPbImageURL } from "../api/getPbImageURL";

@customElement("product-element")
class ProductList extends LitElement {
  @property({ type: Object }) data: Product = {
    items: [],
    page: 0,
    perPage: 0,
    totalItems: 0,
    totalPages: 0,
  };

  static styles?: CSSResultGroup = [
    resetCSS,
    css`
      .container {
        & ul {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
          margin: 2.5rem;

          & li {
            & a {
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
              max-inline-size: 450vw;
              color: #fff;

              img {
                inline-size: 100%;
              }
            }
          }
        }
      }
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);
    const data = await response.json();
    this.data = data;
  }

  render() {
    return html`
      <div class="container">
        <ul>
          ${this.data.items.map(
            (item) => html`
              <li class="product-item">
                <a href="/">
                  <figure>
                    <img src="${getPbImageURL(item)}" alt="" />
                    <figcaption class="a11y-hidden">${item.brand}</figcaption>
                  </figure>
                  <span class="brand">${item.brand}</span>
                  <span class="type">${item.type}</span>
                  <span class="description ">${item.description}</span>
                  <span class="price">${item.price.toLocaleString()}.원</span>
                </a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
