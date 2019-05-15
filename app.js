window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").style.display = "block"
    }else{
        document.getElementById("top").style.display = "none";
    }
}

function jumpTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myFunction(imgs) {
    var selectImg = document.getElementById("selectImg");
    var imgText = document.getElementById("imgText");
    selectImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    selectImg.parentElement.style.display = "block";
}

function addData(){
 alert("adding data");
 var product_name = document.getElementById("pname").value;

 db.collection("products").add({
 productname: product_name,
 })
 .then(function(docRef) {
 console.log("Document written with ID: ", docRef.id);
 //update the products view
 getProducts();
 })
 .catch(function(error) {
 console.error("Error adding document: ", error);
 });
 }