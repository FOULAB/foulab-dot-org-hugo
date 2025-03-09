(function() {
    function a() {
        var a = document.createElement("script");
        a.async = !0, a.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a), a.onload = b
    }

    function b() {
        var a = ShopifyBuy.buildClient({
            domain: "laboratoires-foulab.myshopify.com",
            storefrontAccessToken: "8bc3e4ceaece959c33748c9c3e64a9fb"
        });
        ShopifyBuy.UI.onReady(a).then(function(a) {
            a.createComponent("product", {
                id: "7437879555",
                node: document.getElementById("foulab-shopify-button"),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            buttonWrapper: {
                                "margin-top": "5px"
                            },
                            button: {
                                "font-family": "Droid Sans, sans-serif",
                                "font-weight": "bold",
                                "font-size": "13px",
                                "padding-top": "5px",
                                "padding-bottom": "5px",
                                "border-radius": "3px",
                                "padding-left": "50px",
                                "padding-right": "50px"
                            },
                            quantityInput: {
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px"
                            }
                        },
                        contents: {
                            img: !1,
                            title: !1,
                            price: !1
                        },
                        text: {
                            button: "Donate!"
                        },
                        googleFonts: ["Droid Sans"]
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: !1,
                            imgWithCarousel: !0,
                            button: !1,
                            buttonWithQuantity: !0
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                "font-family": "Droid Sans, sans-serif",
                                "font-weight": "bold",
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px",
                                "border-radius": "0px",
                                "padding-left": "20px",
                                "padding-right": "20px"
                            },
                            quantityInput: {
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px"
                            }
                        },
                        googleFonts: ["Droid Sans"],
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {
                        styles: {
                            label: {
                                "font-family": "Droid Sans, sans-serif",
                                "font-weight": "bold"
                            },
                            select: {
                                "font-family": "Droid Sans, sans-serif",
                            }
                        },
                        googleFonts: ["Droid Sans"]
                    },
                    cart: {
                        styles: {
                            button: {
                                "font-family": "Droid Sans, sans-serif",
                                "font-weight": "bold",
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px",
                                "border-radius": "0px"
                            }
                        },
                        text: {
                            title: "Donations",
                            total: "Donation Total",
                            empty: "Nothing yet!",
                            notice: "All proceeds go to maintaining Foulab's infrastructure. Rent, repairs, etc. Thank you for making our resources accessible!",
                            button: "DONATE",
                            noteDescription: "Comments? Suggestions? We'd like to hear from you!"
                        },
                        contents: {
                            note: !0
                        },
                        popup: !1,
                        googleFonts: ["Droid Sans"]
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "font-family": "Droid Sans, sans-serif",
                                "font-weight": "bold"
                            },
                            count: {
                                "font-size": "13px"
                            }
                        },
                        googleFonts: ["Droid Sans"]
                    }
                }
            })
        })
    }
    window.ShopifyBuy ? window.ShopifyBuy.UI ? b() : a() : a()
})();
