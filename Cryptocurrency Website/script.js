var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var sol = document.getElementById("solana")
var doge = document.getElementById("dogecoin")

var settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin&vs_currencies=usd%2Cngn",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd
    eth.innerHTML = response.ethereum.usd
    sol.innerHTML = response.solana.usd
    //doge.innerHTML = response.doge.usd
});