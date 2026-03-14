const GAMEONIX_STORE_API = {
    // Simulated network delay
    delay: 800,

    // Mock Database
    db: {
        categories: [
            { id: 'cat1', name: 'Game Top-Ups', icon: 'ri-money-dollar-circle-fill' },
            { id: 'cat2', name: 'Premium Passes', icon: 'ri-ticket-2-fill' },
            { id: 'cat3', name: 'Exclusive Skins', icon: 'ri-t-shirt-fill' },
            { id: 'cat4', name: 'Gift Cards', icon: 'ri-gift-fill' }
        ],
        products: [
            {
                id: 'p1',
                categoryId: 'cat1',
                title: 'BGMI 600 UC',
                description: 'Get 600 Unknown Cash for Battlegrounds Mobile India.',
                price: 750,
                originalPrice: 800,
                image: 'https://gameonix.in/web/gameonix/images/bgmi.jpg',
                featured: true
            },
            {
                id: 'p2',
                categoryId: 'cat1',
                title: 'Free Fire 1080 Diamonds',
                description: 'Instant top-up of 1080 Diamonds for Free Fire.',
                price: 800,
                originalPrice: 950,
                image: 'https://gameonix.in/web/gameonix/images/freefire.jpg',
                featured: true
            },
            {
                id: 'p3',
                categoryId: 'cat2',
                title: 'Valorant Battlepass',
                description: 'Unlock premium rewards for the current act.',
                price: 1000,
                originalPrice: 1200,
                image: 'https://gameonix.in/web/gameonix/images/valo1.jpg',
                featured: false
            },
            {
                id: 'p4',
                categoryId: 'cat3',
                title: 'COD Mobile Mythic Drop',
                description: 'Exclusive Mythic weapon drop crate.',
                price: 450,
                originalPrice: 500,
                image: 'https://gameonix.in/web/gameonix/images/cod1.jpg',
                featured: false
            },
            {
                id: 'p5',
                categoryId: 'cat4',
                title: 'Google Play ₹500',
                description: 'Google Play recharge code.',
                price: 500,
                originalPrice: 500,
                image: 'https://gametosa.com/img/gcforstartup.png',
                featured: true
            }
        ]
    },

    // Demo API Endpoints
    async getCategories() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 200, data: this.db.categories });
            }, this.delay);
        });
    },

    async getProducts(categoryId = null) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const products = categoryId 
                    ? this.db.products.filter(p => p.categoryId === categoryId)
                    : this.db.products;
                resolve({ status: 200, data: products });
            }, this.delay);
        });
    },

    async getFeaturedProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ 
                    status: 200, 
                    data: this.db.products.filter(p => p.featured) 
                });
            }, this.delay);
        });
    },

    async purchaseItem(productId, userId = 'guest') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = this.db.products.find(p => p.id === productId);
                if (product) {
                    resolve({ 
                        status: 200, 
                        message: `Successfully purchased ${product.title}`,
                        transactionId: 'TXN' + Math.floor(Math.random() * 10000000)
                    });
                } else {
                    reject({ status: 404, message: 'Product not found' });
                }
            }, this.delay);
        });
    }
};

window.GAMEONIX_STORE_API = GAMEONIX_STORE_API;
