(()=>{"use strict";const t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const r=new Uint8Array(16);function s(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(r)}const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));const n=function(e,r,n){if(t.randomUUID&&!r&&!e)return t.randomUUID();const i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,r){n=n||0;for(let t=0;t<16;++t)r[n+t]=i[t];return r}return function(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}(i)};class i{constructor(t,e,r){this.id=n(),this.name=t,this.price=e,this.description=r}getId(){return this.id}getName(){return this.name}getPrice(){return this.price}getDescription(){return this.description}setName(t){this.name=t}setPrice(t){this.price=t}setDescription(t){this.description=t}}const a=new class{constructor(){this.items=[];const t=new i("Apple",3,"Red Delicious"),e=new i("Ice Cream",8,"Mint Chocolate Chip"),r=new i("Flowers",6,"Sunflowers");this.items.push(t,e,r)}getItems(){return this.items}setItems(t){this.items=t}},c=new class{constructor(t,e){this.id=n(),this.name=t,this.age=e,this.cart=[]}getId(){return this.id}getName(){return this.name}getAge(){return this.age}getCart(){return this.cart}setId(t){this.id=t}setName(t){this.name=t}setAge(t){this.age=t}setCart(t){this.cart=t}addToCart(t){this.cart.push(t)}removeFromCart(t){this.cart=this.cart.filter((e=>e.getId()!==t.getId()))}addQuantity(t,e){for(let r=0;r<e;r++)this.cart.push(t)}removeQuantityFromCart(t,e){for(let r=0;r>e;r-1)this.cart.push(t)}cartTotal(){return this.cart.reduce(((t,e)=>t+e.getPrice()),0)}printCart(){console.log("\nItems in your cart:"),this.cart.forEach((t=>{console.log(`${t.getName()} - Price: ${t.getPrice()}`)}))}}("David Soto",25);c.addToCart(a.getItems()[0]),c.addToCart(a.getItems()[1]),c.addToCart(a.getItems()[2]),console.log("Original Cart:"),c.printCart(),c.addQuantity(a.getItems()[1],3),console.log("\nUpdated quantity:"),c.printCart(),c.removeFromCart(a.getItems()[0]),console.log("\nUpdated items (after removed):"),c.printCart(),c.removeQuantityFromCart(a.getItems()[1],1),console.log("\nRemoved quantity:"),c.printCart(),console.log("\nTotal cart value:",c.cartTotal()),c.setName("Thanos"),c.setAge(450),console.log("\nNew user:",c.getName(),c.getAge())})();