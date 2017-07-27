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

        var queryURL = "https://api.stackexchange.com/2.2/search/advanced?sort=votes&q=" + searchTerm + "&accepted=True&title=" + searchTerm + "&site=stackoverflow";

        return axios
            .get(queryURL)
            .then(function(response) {
                var linkArray = [];
                for (var i = 0; i < response.data.items.length; i++) {
                    var overflowObject = {};
                    overflowObject.link = response.data.items[i].link;
                    overflowObject.title = response.data.items[i].title;
                    linkArray.push(overflowObject);
                }
                return linkArray;
            });

    },

    getSubtopics: function(clickedTopicId) {
        return axios.get(`/api/subtopics/${clickedTopicId}`);
    },

    getTopics: function(topicId) {
        return axios.get(`/api/topic/${topicId}`);
    },

    getComments: function(subtopicId) {
        return axios.get(`/api/comment/${subtopicId}`);
    },

    postComment: function(comment, subtopicId) {
        return axios.post(`/api/${comment}/${subtopicId}`);
    }


};

// We export the API helper
module.exports = helper;