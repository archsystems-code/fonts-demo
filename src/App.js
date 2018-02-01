import React, { Component } from 'react';
import $ from 'jquery';
import logo from "./logo.png";
import './App.css';

class App extends Component {

  componentDidMount() {
    var cartCount = 0,
      buy = $(".btn"),
      span = $(".number"),
      cart = $(".cart"),
      quickview = $(".quickviewContainer"),
      quickViewBtn = $(".quickview"),
      close = $(".quickviewContainer .close"),
      minicart = [],
      totalPrice = [],
      miniCartPrice;

    buy.on("click", addToCart);
    quickViewBtn.on("click", quickView);
    cart.on("click", showMiniCart);
    close.on("click", function() {
      quickview.removeClass("active");
    });

    function quickView() {
      var description = $(this)
          .parent()
          .find(".description")
          .text(),
        header = $(this)
          .parent()
          .find(".header")
          .text(),
        price = $(this).find(".price"),
        quickViewHeader = $(".quickviewContainer .headline"),
        quickViewDescription = $(".quickviewContainer .description");
      clearTimeout(timeQuick);
      if (quickview.hasClass("active")) {
        quickview.removeClass("active");
        var timeQuick = setTimeout(function() {
          quickview.addClass("active");
        }, 300);
      } else {
        quickview.addClass("active");
      }

      quickViewHeader.text(header);
      quickViewDescription.text(description);
    }

    function showMiniCart() {
      $(".mini").toggleClass("visible");
    }

    function addToCart() {
      var self = $(this),
        productName = $(this)
          .parent()
          .find(".header")
          .text(),
        miniCartNames = $(".products"),
        names = $(".names"),
        price = $(this)
          .parent()
          .find(".price")
          .text(),
        priceInt = parseInt(price);

      totalPrice.push(priceInt);
      miniCartPrice = totalPrice.reduce(function(a, b) {
        return a + b;
      });
      $(".miniprice").text("Total amount: " + miniCartPrice + ",-");
      minicart.push(productName);
      let lastProduct = minicart[minicart.length - 1];
      miniCartNames.text("Your cart lines: ");
      names.append("<p>" + lastProduct + "</p>");

      cartCount++;
      span.text(cartCount);
      clearTimeout(time);
      if (span.hasClass("update")) {
        span.removeClass("update");
        span.addClass("updateQuantity");
        var time = setTimeout(function() {
          span.removeClass("updateQuantity");
          span.addClass("update");
        }, 700);
      } else {
        span.addClass("update");
      }
      if (cartCount == 1) {
        cart.toggleClass("icon-basket icon-basket-loaded");
      }

      $(this).addClass("ok");
      var timeOk = setTimeout(function() {
        self.removeClass("ok");
      }, 1000);
    }
  }
  render() {
    return <div className="App">
        <nav>
          <div className="mini">
            <p className="products">Empty</p>
            <p className="names" />
            <p className="miniprice" />
          </div>
          <ul>
            <li>
              <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li>Home</li>
            <li>Inspiration</li>
            <li>Materials</li>
          </ul>
          <div className="cart icon-basket">
            <span className="number">1</span>
          </div>
        </nav>
        <div className="container">
          <h1>Product Category</h1>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
        </div>
        <div className="container">
          <h1>Product Category</h1>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
        </div>
        <div className="container">
          <h1>Product Category</h1>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
        </div>
        <div className="container">
          <h1>Product Category</h1>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
          <div className="product">
            <img alt="" src="https://placeimg.com/200/100" />
            <h2 className="header">Product Name</h2>
            <p className="description">
              Nullam posuere turpis vel lacinia luctus. Donec in efficitur
              neque. Curabitur consectetur non ipsum in eleifend. Praesent
              id velit in nisi maximus porta nec vitae odio. Proin vitae
              magna a massa accumsan venenatis. Donec semper, sem in
              ullamcorper bibendum, mauris sem imperdiet lorem, tempor
              aliquet ligula lorem sit amet nibh. Suspendisse potenti.
            </p>
            <p className="price">231,-</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
          </div>
        </div>
        <div className="quickviewContainer">
          <div className="close" />
          <h2 className="headline" />
          <p className="description" />
          <img alt="" src="https://placeimg.com/100/100" />
          <img alt="" src="https://placeimg.com/100/100" />
          <img alt="" src="https://placeimg.com/100/100" />
        </div>
      </div>;
  }
}

export default App;
