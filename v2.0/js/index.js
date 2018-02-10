var app = angular.module("app", []);
app.controller("myCtrl", function($scope) {
  $scope.products = [
    {
      image:'https://rukminim1.flixcart.com/image/312/312/j9d3bm80/mobile/g/x/j/apple-iphone-x-mqa62hn-a-original-imaeyzyfdzhfckef.jpeg?q=70',
      name: "iPhone X",
      brand: "Apple",
      category: "Mobile",
      categoryicon: "",
      featured:"yes",
      price: 89000},
    {
      image:"https://rukminim1.flixcart.com/image/312/312/j7ksia80/mobile/u/z/b/apple-iphone-8-plus-mq8j2hn-a-original-imaexsfmnxjcfc8t.jpeg?q=70",
      name: "iPhone 8",
     brand: "Apple",
     category: "Mobile",
     featured:"yes",
     price: 59999},
     {image:'https://rukminim1.flixcart.com/image/312/312/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70',
     "name": "iPhone 7",
     "brand": "Apple",
     "category": "Mobile",
     "price": 49999},
    {image:'https://rukminim1.flixcart.com/image/312/312/j4irlow0/mobile/7/5/y/samsung-galaxy-s8-na-original-imaevev23ayqjc45.jpeg?q=70',
    "name": "Galaxy S8",
     "brand": "Samsung",
     "category": "Mobile",
     featured:"yes",
     "price": 41450},
    {image:'https://rukminim1.flixcart.com/image/312/312/j1nvwcw0/mobile/q/w/v/samsung-galaxy-s8-plus-sm-g955f-original-imaet6mkffszygpy.jpeg?q=70',
    "name": "Galaxy Note8",
     "brand": "Samsung",
     "category": "Mobile",
     "price": 59999},
    {image:'https://rukminim1.flixcart.com/image/312/312/j1nvwcw0/mobile/q/w/v/samsung-galaxy-s8-plus-sm-g955f-original-imaet6mkffszygpy.jpeg?q=70',
    "name": "Galaxy S8 Edge",
     "brand": "Samsung",
     "category": "Mobile",
     featured:"yes",
     "price": 49999},
    {image:'https://rukminim1.flixcart.com/image/312/312/mobile/j/f/a/samsung-galaxy-s7-na-original-imaegmjsn8z7qqaf.jpeg?q=70',
    "name": "Galaxy S7",
     "brand": "Samsung",
     "category": "Mobile",
     "price": 33499},
    {image:'https://rukminim1.flixcart.com/image/312/312/mobile/z/9/t/samsung-galaxy-s4-i9500-original-imadkbmh5keesfm2.jpeg?q=70',
    "name": "Galaxy S4 Mini",
     "brand": "Samsung",
     "category": "Mobile",
     "price": 19500},
     {image:'https://rukminim1.flixcart.com/image/312/312/mobile/b/u/e/apple-iphone-6s-plus-na-original-imaeby7yqedxtcwv.jpeg?q=70',
      "name": "iPhone 6+",
     "brand": "Apple",
      "category": "Mobile",
     "price":45500},
     {image:'https://rukminim1.flixcart.com/image/312/312/mobile/2/j/5/apple-iphone-6-original-imaeyny5fy253xy4.jpeg?q=70',
      "name": "iPhone 6",
     "brand": "Apple",
      "category": "Mobile",
     "price":40500},
    {image:'https://rukminim1.flixcart.com/image/312/312/tablet/g/c/a/apple-128-gb-ipad-mini-with-retina-display-and-wi-fi-cellular-original-imadr69cspskbzhq.jpeg?q=70',
      "name": "iPad Mini",
     "brand": "Apple",
      "category": "Tablet",
     "price":29999},
    {image:'https://rukminim1.flixcart.com/image/312/312/j3nbwy80/tablet/f/v/y/apple-mpgh2hn-a-original-imaeuqfmng7qb3ey.jpeg?q=70',
      "name": "iPad Pro",
     "brand": "Apple",
      "category": "Tablet",
      featured:"yes",
     "price":49999},
    {image:'https://rukminim1.flixcart.com/image/312/312/j15b6a80/tablet/j/b/w/samsung-sm-t355yzaains-original-imaessj2rvxnj3cy.jpeg?q=70',
      "name": "Galaxy Tab",
     "brand": "Samsung",
      "category": "Tablet",
     "price":29999},
    {image:'https://rukminim1.flixcart.com/image/312/312/tablet/n/g/s/apple-ipad-air-2-wi-f-cellular-64-gb-original-imaepgpgvfbjkq29.jpeg?q=70',
      "name": "iPad Air",
     "brand": "Apple",
      "category": "Tablet",
     "price":25000},
    {image:'https://rukminim1.flixcart.com/image/312/312/j1b0xow0/tablet/t/e/w/samsung-sm-t355yzwains-original-imaeswxenwwyh9pa.jpeg?q=70',
      "name": "Galaxy Tab+",
     "brand": "Samsung",
      "category": "Tablet",
     "price":20000},
    {image:'https://rukminim1.flixcart.com/image/312/312/tablet/j/v/2/lenovo-a710f-original-imaejbe5u2emkgys.jpeg?q=70',
      "name": "Fire HD",
     "brand": "Amazon",
      "category": "Tablet",
     "price":15000},
    {image:'https://rukminim1.flixcart.com/image/312/312/tablet/j/v/2/lenovo-a710f-original-imaejbe5u2emkgys.jpeg?q=70',
      "name": "Fire Kids",
     "brand": "Amazon",
      "category": "Tablet",
     "price":11999},
    {image:'https://rukminim1.flixcart.com/image/312/312/computer/v/f/z/apple-macbook-pro-notebook-original-imae9weh8guxs8uk.jpeg?q=70',
      "name": "MacBook Pro",
     "brand": "Apple",
      "category": "Laptop",
     "price":199200},
    {image:'https://rukminim1.flixcart.com/image/312/312/computer/g/p/z/apple-macbook-air-ultrabook-original-imaej85fzwdh4etq.jpeg?q=70',
      "name": "MacBook Air",
     "brand": "Apple",
      "category": "Laptop",
     "price":75950},
    {image:'https://rukminim1.flixcart.com/image/312/312/j1nvwcw0/computer/f/j/n/hp-notebook-original-imaesy6eztud46ew.jpeg?q=70',
      "name": "Chromebook",
     "brand": "HP",
      "category": "Laptop",
     "price":29100},
    {image:'https://rukminim1.flixcart.com/image/312/312/computer/c/q/6/asus-notebook-original-imaesaz5wadnkhx3.jpeg?q=70',
      "name": "ROG X6",
     "brand": "ASUS",
      "category": "Laptop",
      featured:"yes",
     "price":150000},
    {image:'https://rukminim1.flixcart.com/image/312/312/computer/z/z/z/dell-xps-ultrabook-original-imaemgggvasfj2zy.jpeg?q=70',
      "name": "XPS 13",
     "brand": "Dell",
      "category": "Laptop",
     "price":90500},
  ];
  //function sortOrder definitation
     $scope.sortOrder = function(newSortingOrder)
     {
               $scope.sortingOrder = newSortingOrder;
     };
     //this is for default sort as
     $scope.orderList = "featured";

});
