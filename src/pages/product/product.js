import { getPbImageURL } from "@/api/getPbImageURL";

async function render() {
  const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);
  const data = await response.json();

  const tag = `
 <div class="container">
      <ul>
        ${data.items
          .map(
            (item) => `
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
          )
          .join("")}
      </ul>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", tag);
}

render();
