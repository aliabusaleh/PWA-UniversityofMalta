var database = firebase.database();

// Writing to Database Functions

function writeUserData(phone, email, address1, address2, city, postcode, isDonator, ngonum) {
    firebase.database().ref('Users/' + phone).set({
    "Email": email,
    "Address 1": address1,
    "Address 2": address2,
    "City": city,
    "Post Code": postcode,
    "isDonator": isDonator,
    "ngonum": ngonum
    });
    alert("Changing User's Data");
}   

function writeBuysData(BuyId, loc, offerId, ppseller, ppbuyer, pptransid, price, timestamp, userid){
    firebase.database().ref('Buys/' + BuyId).set({
    "Location": loc,
    "Offer_id": offerId,
    "PayPal_Seller": ppseller,
    "PayPal_Buyer": ppbuyer,
    "Paypal_TrandId": pptransid,
    "Price": price,
    "Timestamp": timestamp,
    "User_id": userid
    });
    alert("Changing Buys Data");
}

function writeDonationsData(donation_id, date, recurrence, time){
    firebase.database().ref('Donations/' + donation_id).set({
    "Date": date,
    "Recurrence": recurrence,
    "Time": time
    });
    alert("Changing Donations Data");
}

function writeOffersData(offer_id, amount, desc, expirdate, name, ownid, position, price, prod_id, visibleto){
    firebase.database().ref('Offer/' + offer_id).set({
    "Amount": amount,
    "Description": desc,
    "ExpiryDate": expirdate,
    "Name": name,
    "Owner_id": ownid,
    "Price": price,
    "Product_id": prod_id,
    "VisibleTo": visibleto
    });
    alert("Changing Offers Data");
}

function writeProductsData(prod_id, name, barcode){
    firebase.database().ref('Product/' + prod_id).set({
    "Name": name,
    "Barcode": barcode
    });
    alert("Changing Products Data");
}

// TODO: Reading From Database

//Updating
function updateData(){

    firebase.database().ref().child('/UpdateTest/')
        .update({ Name: "New"});
}

// Deleting

//Deleting single child/value
function deleteData(){
    firebase.database().ref().child('/DeleteTest/Address/HouseNum').remove();
   // alert("Deleting single child/value");
}

//Deleting all of the data under specific parent
function deleteAllData(){
    firebase.database().ref().child('/DeleteTest').remove();
   // alert("Deleting all of the data under specific parent");
}

// Read data once
function readUsersOnce(phone){
    firebase.database().ref('/Users/' + phone).once('value').then(function(snapshot){
        var data = (snapshot.val());
        document.getElementById("field1").innerHTML = "City: " + data.City;
        document.getElementById("field2").innerHTML = "Email: "+ data.Email;
        document.getElementById("field3").innerHTML = "isDonator: " + data.isDonator;
        document.getElementById("field4").innerHTML = "NgNum: " + data.ngonum;
        document.getElementById("field5").innerHTML = "";
        document.getElementById("field6").innerHTML = "";
        document.getElementById("field7").innerHTML = "";
        document.getElementById("field8").innerHTML = "";
    });
}
function readBuysOnce(id){
    firebase.database().ref('/Buys/' + id).once('value').then(function(snapshot){
        var data = (snapshot.val());
        document.getElementById("field1").innerHTML = "Location: " + data.Location;
        document.getElementById("field2").innerHTML = "Offer ID: "+ data.Offer_id;
        document.getElementById("field3").innerHTML = "PayPal Seller: " + data.PayPal_Seller;
        document.getElementById("field4").innerHTML = "PayPal Buyer: " + data.PayPal_Buyer;
        document.getElementById("field5").innerHTML = "PayPal Transaction ID: " + data.Paypal_TrandId;
        document.getElementById("field6").innerHTML = "Price: " + data.Price;
        document.getElementById("field7").innerHTML = "TimeStamp: " + data.Timestamp;
        document.getElementById("field8").innerHTML = "User ID: " + data.User_id;
    });
}
function readDonationsOnce(id){
    firebase.database().ref('/Donations/' + id).once('value').then(function(snapshot){
        var data = (snapshot.val());
        document.getElementById("field1").innerHTML = "Date: " + data.Date;
        document.getElementById("field2").innerHTML = "Recurrence: "+ data.Recurrence;
        document.getElementById("field3").innerHTML = "Time: " + data.Time;
        document.getElementById("field4").innerHTML = "";
        document.getElementById("field5").innerHTML = "";
        document.getElementById("field6").innerHTML = "";
        document.getElementById("field7").innerHTML = "";
        document.getElementById("field8").innerHTML = "";
        
    });
}

function readOffersOnce(id){
    firebase.database().ref('/Offer/' + id).once('value').then(function(snapshot){
        var data = (snapshot.val());
        document.getElementById("field1").innerHTML = "Amount: " + data.Amount;
        document.getElementById("field2").innerHTML = "Description: "+ data.Description;
        document.getElementById("field3").innerHTML = "Expiry Date: " + data.ExpiryDate;
        document.getElementById("field4").innerHTML = "Name: " + data.Name;
        document.getElementById("field5").innerHTML = "Owner ID: " + data.Owner_id;
        document.getElementById("field6").innerHTML = "Price: " + data.Price;
        document.getElementById("field7").innerHTML = "Product ID: " + data.Product_id;
        document.getElementById("field8").innerHTML = "Visible To: " + data.VisibleTo;
    });
}

function readProductsOnce(id){
    firebase.database().ref('/Product/' + id).once('value').then(function(snapshot){
        var data = (snapshot.val());
        document.getElementById("field1").innerHTML = "Barcode: " + data.Barcode;
        document.getElementById("field2").innerHTML = "Name: "+ data.Name;
        document.getElementById("field3").innerHTML = "";
        document.getElementById("field4").innerHTML = "";
        document.getElementById("field5").innerHTML = "";
        document.getElementById("field6").innerHTML = "";
        document.getElementById("field7").innerHTML = "";
        document.getElementById("field8").innerHTML = "";
    });
}