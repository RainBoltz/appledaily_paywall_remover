
console.log( "Script properly injected into page" );

let paywall = document.querySelector( '.ndPaywall' );
let article = document.querySelector( '.ndArticle_content > div' );

paywall.style.display = "none";
article.style.display = "block";

console.log( "DONE!" );
