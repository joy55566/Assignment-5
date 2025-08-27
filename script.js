// All functions 
function addHeart(id) {
    const heartIcon =parseInt(document.getElementById('hart-count').innerText);
    const newHeartIcon = heartIcon + 1;
    document.getElementById('hart-count').innerText = newHeartIcon;
    // return newHeartIcon;

}
function coinAlert(service,number){
    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    const newCoinBalance = coinBalance - 20;
    const callingId = document.getElementById(service).innerText;
    const callingNumber = document.getElementById(number).innerText;
    if(coinBalance >= 20){
        document.getElementById('coin-balance').innerText = newCoinBalance;
        alert('📞calling'+ callingId + callingNumber + '...');
    }else{
        alert('❌ Your balance is insufficient.You need at least 20 coins to make a call');
    }
};


// Heart Icons Event Listeners
document.getElementById('heart-1').addEventListener('click', addHeart);
document.getElementById('heart-2').addEventListener('click', addHeart);
document.getElementById('heart-3').addEventListener('click', addHeart);
document.getElementById('heart-4').addEventListener('click', addHeart);
document.getElementById('heart-5').addEventListener('click', addHeart);
document.getElementById('heart-6').addEventListener('click', addHeart);
document.getElementById('heart-7').addEventListener('click', addHeart);
document.getElementById('heart-8').addEventListener('click', addHeart);
document.getElementById('heart-9').addEventListener('click', addHeart);

// call icon event listeners
document.getElementById('call-1').addEventListener('click',function(){
    coinAlert('service-1','num-1')
});
document.getElementById('call-2').addEventListener('click',function(){
    coinAlert('service-2','num-2')
});
document.getElementById('call-3').addEventListener('click',function(){
    coinAlert('service-3','num-3')
});
document.getElementById('call-4').addEventListener('click',function(){
    coinAlert('service-4','num-4')
});
document.getElementById('call-5').addEventListener('click',function(){
    coinAlert('service-5','num-5')
});
document.getElementById('call-6').addEventListener('click',function(){
    coinAlert('service-6','num-6')
});
document.getElementById('call-7').addEventListener('click',function(){
    coinAlert('service-7','num-7')
});
document.getElementById('call-8').addEventListener('click',function(){
    coinAlert('service-8','num-8')
});
document.getElementById('call-9').addEventListener('click',function(){
    coinAlert('service-9','num-9')
});

// call history js