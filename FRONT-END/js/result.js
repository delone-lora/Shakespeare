var json = JSON.parse(localStorage.getItem("content"));

// testing
json = {
  data: {
    category: "food",
    text: "Want to try out our new chocolate fudge ice cream reciepe? Check it out at goo.gl/i3Rk9"
  },
  result:{
    score: 30,
    tweets: [
      {
        name: "Chris Turnbull",
        username: "@chefchris86",
        dateTime: "20h",
        text: "New week new lunch menu Rhubarb and whisky tart, rhubarb sorbet.",
        hashtags: "#food #chef #dessert #pastrychef",
        comments: 94,
        retweets: 185,
        likes: 203,
        image: "../public/img3.jpg"
      },
      {
        name: "Food Truck Fridays",
        username: "@lovefoodtruckfridays",
        dateTime: "2h",
        text: "Think you have the best food truck in the country? We are on the lookout for more food trucks for Food Truck Fridays from across the land. If you have what it takes, send an email with info and pics of your truck to welove@foodtruckfridays.co.za.",
        hashtags: "#welovefoodtruckfridays #food",
        comments: 80,
        retweets: 110,
        likes: 199,
        image: "../public/img1.jpg"
      },
      {
        name: "Food Pictures",
        username: "@foodpictures666",
        dateTime: "12h",
        text: "Think you have the best food truck in the country? We are on the lookout for more food trucks for Food Truck Fridays from across the land. If you have what it takes, send an email with info and pics of your truck to welove@foodtruckfridays.co.za.",
        hashtags: "#welovefoodtruckfridays #food",
        comments: 80,
        retweets: 110,
        likes: 199,
        image: "../public/img2.jpg"
      },
      {
        name: "The Whitby Guide",
        username: "@thewhitbyguide",
        dateTime: "1h",
        text: "What’s your favorite Whitby restaurant? Here are 16 of our favourite restaurants in Whitby - bit.ly/1esFDHf #whitby #Food #Foodies",
        hashtags: "#whitby #Food #Foodies",
        comments: 5,
        retweets: 300,
        likes: 555,
        image: "../public/img4.jpg"
      },
      {
        name: "Chris Turnball",
        username: "@chefchris86",
        dateTime: "20h",
        text: "New week new lunch menu Rhubarb and whisky tart, rhubarb sorbet. #food #chef #dessert #pastrychef",
        hashtags: "#food #chef #dessert #pastrychef",
        comments: 40,
        retweets: 50,
        likes: 90,
        image: "../public/img5.jpg"
      },
      {
        name: "Food Truck Fridays",
        username: "@lovefoodtruckfridays",
        dateTime: "2h",
        text: "Think you have the best food truck in the country? We are on the lookout for more food trucks for Food Truck Fridays from across the land. If you have what it takes, send an email with info and pics of your truck to welove@foodtruckfridays.co.za.",
        hashtags: "#welovefoodtruckfridays #food",
        comments: 80,
        retweets: 110,
        likes: 199,
        image: "../public/img6.jpg"
      },
      {
        name: "Chris Turnbull",
        username: "@chefchris86",
        dateTime: "20h",
        text: "New week new lunch menu Rhubarb and whisky tart, rhubarb sorbet.",
        hashtags: "#food #chef #dessert #pastrychef",
        comments: 94,
        retweets: 185,
        likes: 203,
        image: "../public/img7.jpg"
      },
      {
        name: "Food Truck Fridays",
        username: "@lovefoodtruckfridays",
        dateTime: "2h",
        text: "Think you have the best food truck in the country? We are on the lookout for more food trucks for Food Truck Fridays from across the land. If you have what it takes, send an email with info and pics of your truck to welove@foodtruckfridays.co.za.",
        hashtags: "#welovefoodtruckfridays #food",
        comments: 80,
        retweets: 110,
        likes: 199,
        image: "../public/img8.jpg"
      },
      {
        name: "Food Pictures",
        username: "@foodpictures666",
        dateTime: "12h",
        text: "Think you have the best food truck in the country? We are on the lookout for more food trucks for Food Truck Fridays from across the land. If you have what it takes, send an email with info and pics of your truck to welove@foodtruckfridays.co.za.",
        hashtags: "#welovefoodtruckfridays #food",
        comments: 80,
        retweets: 110,
        likes: 199,
        image: "../public/img9.jpg"
      },
      {
        name: "The Whitby Guide",
        username: "@thewhitbyguide",
        dateTime: "1h",
        text: "What’s your favorite Whitby restaurant? Here are 16 of our favourite restaurants in Whitby - bit.ly/1esFDHf #whitby #Food #Foodies",
        hashtags: "#whitby #Food #Foodies",
        comments: 5,
        retweets: 300,
        likes: 555,
        image: "../public/img10.jpg"
      }
    ]
  }
}

// var ProgressBar = require('progressbar.js');

$( document ).ready(function() {

  var bar = new window.ProgressBar.Line('#progress-bar', {
    easing: 'easeInOut',
    color: '#d82763',
    strokeWidth: 3,
    trailWidth: 1
  });
  bar.animate(json.result.score/100);

  $("#tw-name-js").html("Shakespeare");
  $("#tw-username-js").html("@Shakespeare");
  $("#tw-date-time-js").html("Now");
  $("#final-score-js").html(json.result.score);
  $("#tw-text-js").html(json.data.text);
  $("#tw-hashtags-js").html("#"+json.data.category);

  // other tweete
  json.result.tweets.forEach(function(tweet){
    $( "#simmilar-tweets-js" ).append(
      '<div class="tw-body row">'+
        '<img src="../public/'+ tweet.image +'" alt="default user picture" class="img-circle col-xs-2">' +
        '<div class="col-xs-10 tw-content">' +
          '<div class="tw-header row">' +
            '<h4 class="tw-name">'+ tweet.name +'</h4> <span class="tw-username">'+ tweet.username +'</span> <span>&#183;</span> <span class="tw-date-time">'+ tweet.dateTime +'</span>' +
          '</div>' +
          '<div class="tw-text row">'+ tweet.text +'</div>' +
          '<div class="tw-hashtags row">'+ tweet.hashtags +'</div>' +
          '<div class="tw-popularity row">' +
            '<i class="glyphicon glyphicon-comment"></i>' +
            '<span class="tw-comments">'+ tweet.comments +'</span>' +
            '<i class="glyphicon glyphicon-retweet"></i>' +
            '<span class="tw-retweets">'+ tweet.retweets +'</span>' +
            '<i class="glyphicon glyphicon-heart-empty"></i>' +
            '<span class="tw-likes">'+ tweet.likes +'</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  })
});
