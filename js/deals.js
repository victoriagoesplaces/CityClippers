function showDeals(){
    var queryURL = "https://api.discountapi.com/v2/deals/?api_key=BOXCrbvk";
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
    $("#display-deal").empty();
    var results = response.data;

    console.log(response)
    console.log(response.query);
    

    // for (var i = 0; i < results.length; i++){
    //     var deals = $("<div class='dealOptions'>");
    //     console.log();
        // $("#display-deal").prepend(response[i]);

        // .deals[1].deal.title
        // $("#display-deal").prepend("<div>" + categories[62] + "</div>");
        // )
    // };
})
}
showDeals();