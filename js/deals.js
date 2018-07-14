var userZip = 32835;
var title = $("<h4> Deals near you </h4>");

 document.getElementById("submit-button").addEventListener("click", showDeals);

 function showDeals(){

    var queryURL = "https://api.discountapi.com/v2/deals?api_key=BOXCrbvk&category_slugs=restaurants&location=" + userZip;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        $("#display-deal").empty();
        var results = response.deals;
        // console.log(response);

        for (var i = 0; i < results.length; i++){ 
            if (results[i].deal.category_name === "Restaurants") {
                // console.log(results[i])

            var deals = $("<img class='card-image' src='" +  results[i].deal.image_url + "'>");
            var link = $("<li>"+ "<a target='_blank' href=' " + results[i].deal.url + "'>" + results[i].deal.title + "</a>" + "</li>");
           
            // $("#display-deal").prepend(deals);
            $("#display-deal").prepend(title);
            $("#display-deal").append(link);
   
            }
        };
    });
 }
//  showDeals();

