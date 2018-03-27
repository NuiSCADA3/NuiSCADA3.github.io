//current energy consumption update picture
function update_member_profit(status) {
    $("#member_profit").text(String(status));
}
function update_orders(number) {
    $("#orders").text(String(number));
}
function update_issue_report(number1) {
    $("#issue_report").text(String(number1));
}
function update_ipo_margin(number2) {
    $("#ipo_margin").text(String(number2));
}
function update_payments(number3) {
    $("#payments").text(String(number3));
}
function update_logistics(number4) {
    $("#logistics").text(String(number4));
}
function update_order(number5) {
    $("#order").text(String(number5));
}
function update_transactions(number6) {
    $("#transactions").text(String(number6));
}
function update_revenue(number7) {
    $("#revenue").text(String(number7));
}


$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBYDG-hgGTqHcXXxzP242o1yoZJmdL_-Lk",
        authDomain: "pea-python-39eeb.firebaseapp.com",
        databaseURL: "https://pea-python-39eeb.firebaseio.com",
        projectId: "pea-python-39eeb",
        storageBucket: "pea-python-39eeb.appspot.com",
        messagingSenderId: "103462922814"
    };
    firebase.initializeApp(config);


    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    total_load_activePower = 0;

    var Member_profitRef = firebase.database().ref("member");

    Member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if (data.key == "member_profit") {
            update_member_profit(parseInt(data.val()));
        }else if (data.key == "orders"){
            update_orders(parseInt(data.val()));
        }else if (data.key == "issue_report"){
            update_issue_report(parseInt(data.val()));
        }else if (data.key == "ipo_margin"){
            update_ipo_margin(parseInt(data.val()));
        }else if (data.key == "payments"){
            update_payments(parseInt(data.val()));
        }else if (data.key == "logistics"){
            update_logistics(parseInt(data.val()));
        }else if (data.key == "order"){
            update_order(parseInt(data.val()));
        }else if (data.key == "transactions"){
            update_transactions(parseInt(data.val()));
        }else if (data.key == "revenue"){
            update_revenue(parseInt(data.val()));
        }else {
             console.log("need to parse this key " + data.key)
         }
    });

});
