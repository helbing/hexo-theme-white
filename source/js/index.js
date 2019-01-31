window.onload = () => {
  // hljs
  if (typeof hljs != "undefined") {
    hljs.configure({
      // 4 spaces
      tabReplace: "    "
    });
    hljs.initHighlighting();
    hljs.listLanguages().forEach(lang => {
      let elements = document.querySelectorAll(`pre code.${lang}`);
      elements.forEach(element => {
        element.insertAdjacentHTML(
          "beforebegin",
          `<span class="lang">${lang}</span>`
        );
      });
    });
  }

  const menuBtn = document.querySelector("#menu-btn");
  const menuCloseBtn = document.querySelector("aside#menu .close");
  const menuAside = document.querySelector("#menu");

  menuBtn.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    menuAside.style.left = 0;
  });

  menuCloseBtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    menuAside.style.left = "-100%";
  });

  const searchBtn = document.querySelector("#search-btn");
  const searchCloseBtn = document.querySelector("aside#search .close");
  const searchAside = document.querySelector("#search");

  searchBtn.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    searchAside.style.left = 0;
  });

  searchCloseBtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    searchAside.style.left = "100%";
  });

  const searchInput = document.querySelector("#search #search-input");
  const searchResult = document.querySelector("#search #search-result");
  const searchBackToTop = document.querySelector("#search .back-to-top");

  searchInput.addEventListener("keydown", event => {
    if (event.code == "Enter") {
      searchResult.innerHTML = "";

      let searchValue = searchInput.value.trim();

      if (searchValue == "") {
        searchBackToTop.style.display = "none";
        return;
      }

      fetch("/local-search.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          let searchResultHtml = "";

          let index = 0;

          for (let item of data) {
            if (
              item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
            ) {
              let coverClass = index % 2 == 0 ? "left-item" : "right-item";
              let contentClass = index % 2 == 0 ? "right-item" : "left-item";

              let tagsHtml = "";

              item.tags.forEach(tag => {
                tagsHtml += `<li><a href="${tag.path}">#${tag.name}</a></li>`;
              });

              searchResultHtml += `
                <article class="article">
                  <div class="cover ${coverClass}" style="background-image:url(${
                item.cover
              });">
                    <img src="${item.cover}">
                  </div>
                  <div class="content ${contentClass}">
                    <div class="wrapper">
                      <time>${item.date}</time>
                      <h2 class="title">
                        <a href="${item.path}">${item.title}</a>
                      </h2>
                      <div class="description">
                        ${item.description}
                      </div>
                      <ul class="tags">
                        ${tagsHtml}
                      </ul>
                    </div>
                  </div>
                </article>
              `;

              index++;
            }

            if (index > 5) {
              searchBackToTop.style.display = "block";
            } else {
              searchBackToTop.style.display = "none";
            }
          }

          searchResult.innerHTML = searchResultHtml;
        });
    }
  });

  const backToTopBtn = document.querySelector("main .back-to-top button");

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    });
  }

  const searchBackToTopBtn = document.querySelector(
    "#search .back-to-top button"
  );

  if (searchBackToTopBtn) {
    searchBackToTopBtn.addEventListener("click", () => {
      document.querySelector("#search").scrollTop = 0;
    });
  }
};
