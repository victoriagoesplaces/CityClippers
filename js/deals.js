var userZip = 32835;

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

    // var deals = $("<img class='card-image' src='" + results[i].deal.image_url + "'>");
        // var deals = $("<div>" + "<img class='card-image' src='" + results[i].deal.image_url + 
        // "'>" + "<a target='_blank' href=' " + results[i].deal.url + "'>" + results[i].deal.title + "</a>" + "</div>");

            var deals = $("<img class='card-image' src='" +  results[i].deal.image_url + "'>");
            var link = $("<li>"+ "<a target='_blank' href=' " + results[i].deal.url + "'>" + results[i].deal.title + "</a>" + "</li>");
            // var dealsOne = $("<div class='card-image'>" + deals + "</div>")
            // var dealsTwo = $("<div class='card-action'>" + link + "</div>")

            // $("#display-deal").prepend(deals);
            $("#display-deal").prepend(link);
        
            }
        };
    }) 
}
showDeals();
