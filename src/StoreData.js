export class StoreData {
    constructor() {
        // Set up initial state for categories and cart
        this.cartKey = 'shoppingCart';
        this.categories = [
            { id: 1, name: 'Men', image: 'men.jpg' },
  { id: 2, name: 'Women', image: 'women.jpg' },
  { id: 3, name: 'Kids', image: 'kid.jpg' },
        ];

        // Add your provided products here
        this.products = [
            {
                id: 1,
                categoryId: 2,
                name: "Ladies Modern Stretch Full Zip",
                price: 41.60,
                description: "With an updated fit and figure-flattering details, this full-zip combines ultra soft cotton with a dash of spandex to retain its shape all day long.",
                image: "/images/shirts/10-24102B.jpg",
                largeImage: "/images/shirts/10-24102A.jpg"
            },
            {
                id: 2,
                categoryId: 2,
                name: "Ladies Colorblock Wind Jacket",
                price: 45.90,
                description: "Brighten up your commute on gloomy days. This lightweight jacket features a subtle grid texture and a punch of bright pink at each side panel.",
                image: "/images/shirts/10-25058B.jpg",
                largeImage: "/images/shirts/10-25058A.jpg"
            },
            {
                id: 3,
                categoryId: 2,
                name: "Ladies Voyage Fleece Jacket",
                price: 48.00,
                description: "Perhaps the equivalent to that comfort blanket you had years ago is a cozy fleece. This full-zip is the perfect layering piece for those 'in-between' months.",
                image: "/images/shirts/10-24101B.jpg",
                largeImage: "/images/shirts/10-24101A.jpg"
            },
            {   id: 4,
                categoryId: 2,
                name:"YouTube+Organic+Cotton+T-Shirt+-+Grey",
                title:"YouTube Organic Cotton T-Shirt - Grey",
                "category":"mens_tshirts",
                price:14.75,
                description:"Stay casual and cool in this 100% organic pre-shrunk cotton T-shirt. Available in charcoal grey with full-color YouTube logo screened on front.",
                image:"/images/shirts/10-13058B.jpg",
                largeImage:"/images/shirts/10-13058A.jpg"
              },
              { id: 5,
                categoryId: 1,
                name:"Inbox+-+Subtle+Actions+T-Shirt",
                title:"Inbox - Subtle Actions T-Shirt",
                category:"mens_tshirts",
                price:17.05,
                description:"Sometimes even the subtlest of actions can make a big difference. This tee highlights all of the icons &amp;amp; features available in your Gmail inbox!&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;60% cotton, 40% polyester blend.&lt;/li&gt;&lt;li&gt;Available in charcoal heather with the inbox icons screenprinted at front chest and inbox tag sewn onto left sleeve.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
                image:"/images/shirts/10-13256B.jpg",
                largeImage:"/images/shirts/10-13256A.jpg"
              },
              { id: 6,
                categoryId: 1,
                name:"Adult+Android+Superhero+T-Shirt",
                title:"Adult Android Superhero T-Shirt",
                category:"mens_tshirts",
                price:14.95,
                description:"Mr. Kent has nothing on Super Droid, especially since this robot has only one weakness-a sweet tooth (considering all of its confectionery-themed versions)! This adorable Bella+Canvas tee features a unisex fit that is sure to please both male and female Android fans.&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Additional Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;100% combed, ringspun cotton.&lt;/li&gt;&lt;li&gt;Unisex fit.&lt;/li&gt;&lt;li&gt;Tag-free label for added comfort.&lt;/li&gt;&lt;li&gt;Available in royal blue with the Super Droid robot screen printed at center chest.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Sizes run smaller than normal. Reference men's sizing chart for additional details.&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
                image:"/images/shirts/10-13239B.jpg",
                largeImage:"/images/shirts/10-13239A.jpg"
              },
              { id: 7,
                categoryId: 1,
                name:"Men+s+Vintage+Heather+T-Shirt",
                title:"Men's Vintage Heather T-Shirt",
                category:"mens_tshirts",
                price:15.8,
                description:"&lt;div&gt;A casual-cool, vintage-inspired tee perfect for all. Just remember that the best part about any classic is that it only improves with age. The more you wash it, the softer it feels.&amp;nbsp;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;65% polyester, 35% cotton.&lt;/li&gt;&lt;li&gt;Available in heather navy, blue, purple or green with the white Google logo screened across center chest of each.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
                image:"/images/shirts/10-13264B.jpg",
                largeImage:"/images/shirts/10-13264A.jpg"
              },
              {
                id: 8,
                categoryId: 1,
                name: "Ladies Voyage Fleece Jacket",
                price: 48.00,
                description: "Perhaps the equivalent to that comfort blanket you had years ago is a cozy fleece. This full-zip is the perfect layering piece for those 'in-between' months.",
                image: "/images/shirts/10-24101B.jpg",
                largeImage: "/images/shirts/10-24101A.jpg"
            },
            {   id: 9,
                categoryId: 3,
                name:"YouTube+Organic+Cotton+T-Shirt+-+Grey",
                title:"YouTube Organic Cotton T-Shirt - Grey",
                "category":"mens_tshirts",
                price:14.75,
                description:"Stay casual and cool in this 100% organic pre-shrunk cotton T-shirt. Available in charcoal grey with full-color YouTube logo screened on front.",
                image:"/images/shirts/10-13058B.jpg",
                largeImage:"/images/shirts/10-13058A.jpg"
              },
              { id: 10,
                categoryId: 3,
                name:"Inbox+-+Subtle+Actions+T-Shirt",
                title:"Inbox - Subtle Actions T-Shirt",
                category:"mens_tshirts",
                price:17.05,
                description:"Sometimes even the subtlest of actions can make a big difference. This tee highlights all of the icons &amp;amp; features available in your Gmail inbox!&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;60% cotton, 40% polyester blend.&lt;/li&gt;&lt;li&gt;Available in charcoal heather with the inbox icons screenprinted at front chest and inbox tag sewn onto left sleeve.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
                image:"/images/shirts/10-13256B.jpg",
                largeImage:"/images/shirts/10-13256A.jpg"
              },
              { id: 11,
                categoryId: 3,
                name:"Adult+Android+Superhero+T-Shirt",
                title:"Adult Android Superhero T-Shirt",
                category:"mens_tshirts",
                price:14.95,
                description:"Mr. Kent has nothing on Super Droid, especially since this robot has only one weakness-a sweet tooth (considering all of its confectionery-themed versions)! This adorable Bella+Canvas tee features a unisex fit that is sure to please both male and female Android fans.&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Additional Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;100% combed, ringspun cotton.&lt;/li&gt;&lt;li&gt;Unisex fit.&lt;/li&gt;&lt;li&gt;Tag-free label for added comfort.&lt;/li&gt;&lt;li&gt;Available in royal blue with the Super Droid robot screen printed at center chest.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Sizes run smaller than normal. Reference men's sizing chart for additional details.&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
                image:"/images/shirts/10-13239B.jpg",
                largeImage:"/images/shirts/10-13239A.jpg"
              },
              { id: 12,
                categoryId: 3,
                name:"Men+s+Vintage+Heather+T-Shirt",
                title:"Men's Vintage Heather T-Shirt",
                category:"mens_tshirts",
                price:15.8,
                description:"&lt;div&gt;A casual-cool, vintage-inspired tee perfect for all. Just remember that the best part about any classic is that it only improves with age. The more you wash it, the softer it feels.&amp;nbsp;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;65% polyester, 35% cotton.&lt;/li&gt;&lt;li&gt;Available in heather navy, blue, purple or green with the white Google logo screened across center chest of each.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
                image:"/images/shirts/10-13264B.jpg",
                largeImage:"/images/shirts/10-13264A.jpg"
              },
            // Add the remaining products here...
        ];
    }

    // Fetch categories
    getCategories() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.categories);
            }, 500); // Simulate API call delay
        });
    }

    // Fetch products based on categoryId
    getProductsByCategory(categoryId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredProducts = this.products.filter(
                    (product) => product.categoryId === parseInt(categoryId, 10)
                );
                resolve(filteredProducts);
            }, 500); // Simulate API call delay
        });
    }

    // Fetch a specific product by productId
    getProductById(productId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = this.products.find(
                    (product) => product.id === parseInt(productId, 10)
                );
                resolve(product);
            }, 500); // Simulate API call delay
        });
    }

    // Get the shopping cart from localStorage
    getCart() {
        const cart = JSON.parse(localStorage.getItem(this.cartKey));
        return cart ? cart : [];
    }

    // Save the shopping cart to localStorage
    setCart(cart) {
        localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }

    // Add an item to the cart
    addToCart(product) {
        const cart = this.getCart();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        this.setCart(cart);
    }

    // Remove an item from the cart
    removeFromCart(productId) {
        let cart = this.getCart();
        cart = cart.filter((item) => item.id !== productId);
        this.setCart(cart);
    }

    // Clear the entire cart
    clearCart() {
        this.setCart([]);
    }
}

export default StoreData;