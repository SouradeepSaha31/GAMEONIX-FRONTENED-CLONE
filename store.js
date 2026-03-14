document.addEventListener('DOMContentLoaded', () => {

    // Simple Navbar Menu animation for Mobile (since we excluded script.js to avoid scroll triggers throwing errors)
    function responsiveNavbarAnimation() {
        let menuBar = document.querySelector("#responsive_navbar")
        let flag = false
        const icon = document.querySelector(".nav_menu_icon i");
        if (icon) {
            icon.addEventListener("click", () => {
                if (!flag) {
                    menuBar.style.transform = "translateX(0%)"
                    flag = true
                } else {
                    menuBar.style.transform = "translateX(110%)"
                    flag = false
                }
            })
        }
    }
    responsiveNavbarAnimation();

    // Store Logic
    const api = window.GAMEONIX_STORE_API;
    if (!api) {
        console.error("Store API not found!");
        return;
    }

    const categoryList = document.getElementById('category_list');
    const productGrid = document.getElementById('product_grid');
    const categoryTitle = document.getElementById('current_category_title');
    let currentCategoryId = null;

    async function initializeStore() {
        try {
            await loadCategories();
            await loadProducts();
            animateHero();
        } catch (error) {
            console.error("Error initializing store:", error);
        }
    }

    async function loadCategories() {
        const response = await api.getCategories();
        if (response.status === 200) {
            categoryList.innerHTML = `<div class="category_item active" data-id="all">
                <i class="ri-apps-2-fill"></i>
                <span>All Products</span>
            </div>`;

            response.data.forEach(cat => {
                categoryList.innerHTML += `
                    <div class="category_item" data-id="${cat.id}">
                        <i class="${cat.icon}"></i>
                        <span>${cat.name}</span>
                    </div>
                `;
            });

            // Add click events
            document.querySelectorAll('.category_item').forEach(item => {
                item.addEventListener('click', (e) => {
                    const id = e.currentTarget.getAttribute('data-id');
                    const name = e.currentTarget.querySelector('span').innerText;

                    document.querySelectorAll('.category_item').forEach(c => c.classList.remove('active'));
                    e.currentTarget.classList.add('active');

                    if (id === 'all') {
                        currentCategoryId = null;
                        categoryTitle.innerText = 'All Products';
                    } else {
                        currentCategoryId = id;
                        categoryTitle.innerText = name;
                    }

                    productGrid.innerHTML = '<div class="loading_text">Loading...</div>';
                    loadProducts();
                });
            });
        }
    }

    async function loadProducts() {
        const response = await api.getProducts(currentCategoryId);
        if (response.status === 200) {
            productGrid.innerHTML = '';

            if (response.data.length === 0) {
                productGrid.innerHTML = '<div class="loading_text">No products found in this category.</div>';
                return;
            }

            response.data.forEach(product => {
                let badgeHTML = product.featured ? `<div class="featured_badge">Featured</div>` : '';
                let originalPriceHTML = product.originalPrice > product.price
                    ? `<span class="original_price">₹${product.originalPrice}</span>`
                    : '';

                productGrid.innerHTML += `
                    <div class="product_card">
                        ${badgeHTML}
                        <div class="product_img_box">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="product_info">
                            <h4>${product.title}</h4>
                            <p>${product.description}</p>
                            <div class="product_price">
                                <div class="price_box">
                                    <span class="current_price">₹${product.price}</span>
                                    ${originalPriceHTML}
                                </div>
                                <button class="buy_btn" onclick="purchaseItem('${product.id}')">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            // Simple entrance animation for products
            gsap.from(".product_card", {
                y: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }

    function animateHero() {
        gsap.from(".store_hero_content h1", { y: -30, opacity: 0, duration: 1 });
        gsap.from(".store_hero_content p", { y: 30, opacity: 0, duration: 1, delay: 0.2 });

        let bubbles = document.querySelectorAll('.bubble1, .bubble2, .bubble3');
        bubbles.forEach((b, i) => {
            gsap.to(b, {
                y: -300,
                duration: 5 + (i % 5),
                repeat: -1,
                ease: "linear",
                delay: i * 0.2
            });
        });
    }

    // Expose to window for inline onclick in injected HTML
    window.purchaseItem = async function (id) {
        alert("Processing purchase...");
        try {
            const res = await api.purchaseItem(id);
            if (res.status === 200) {
                alert(`Success: ${res.message}\nTransaction ID: ${res.transactionId}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    // Run
    initializeStore();
});
