var axios = require("axios");

var youtubeAPI = "AIzaSyDDisdE7IU5DjOyr75z8hDXP2ytiQc7aS4";

// Helper functions for making API Calls
var helper = {

    youtubeQuery: function(searchTerm) {

        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&key=" + youtubeAPI;

        return axios
            .get(queryURL)
            .then(response => response.data.items.filter(i => i.id.videoId).map(i => i.id.videoId));

    },

    stackoverflowQuery: function(searchTerm) {

        var queryURL = "https://api.stackexchange.com/2.2/search/advanced?fromdate=1420070400&order=desc&max=10&sort=votes&q=" + searchTerm + "&accepted=True&title=" + searchTerm + "&site=stackoverflow";

        return axios
            .get(queryURL)
            .then(response => response.data.items.filter(i => i.link).map(i => i.link));

    }


};

// We export the API helper
module.exports = helper;