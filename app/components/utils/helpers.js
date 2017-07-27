var axios = require("axios");

var youtubeAPI = "AIzaSyDDisdE7IU5DjOyr75z8hDXP2ytiQc7aS4";

// Helper functions for making API Calls
var helper = {

    youtubeQuery: function(topic, subtopic) {
        var searchTerm = topic + ' ' + subtopic;

        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&key=" + youtubeAPI;

        return axios
            .get(queryURL)
            .then(function(response) {
                if (typeof response.data.items[0] !== "undefined") {
                    var linkArray = [];
                    for (var i = 0; i < response.data.items.length; i++) {
                        if (typeof response.data.items[i].id.videoId !== "undefined") {
                            linkArray.push(response.data.items[i].id.videoId);
                        }
                    }
                    console.log(linkArray);
                    return linkArray;
                } else {
                    queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + topic + "&key=" + youtubeAPI;
                    return axios.get(queryURL).then(function(response) {
                        var linkArray = [];
                        for (var i = 0; i < response.data.items.length; i++) {
                            if (typeof response.data.items[i].id.videoId !== "undefined") {
                                linkArray.push(response.data.items[i].id.videoId);
                            }
                        }
                        console.log(linkArray);
                        return linkArray;
                    });

                }

            });

    },

    stackoverflowQuery: function(topic, subtopic) {
        var term;

        subtopic = subtopic.replace('Introduction', '');
        term = topic + ' ' + subtopic;

        var queryURL = "https://api.stackexchange.com/2.2/search/advanced?sort=votes&q=" + term + "&accepted=True&title=" + topic + "&site=stackoverflow";

        return axios
            .get(queryURL)
            .then(function(response) {
                if (typeof response.data.items[0] !== "undefined") {
                    var linkArray = [];
                    for (var i = 0; i < response.data.items.length; i++) {
                        var overflowObject = {};
                        overflowObject.link = response.data.items[i].link;
                        overflowObject.title = response.data.items[i].title;
                        linkArray.push(overflowObject);
                    }
                    console.log(linkArray);
                    return linkArray;
                } else {
                    queryURL = "https://api.stackexchange.com/2.2/search/advanced?sort=votes&q=" + topic + "&accepted=True&title=" + topic + "&site=stackoverflow";
                    return axios.get(queryURL).then(function(response) {
                        var linkArray = [];
                        for (var i = 0; i < response.data.items.length; i++) {
                            var overflowObject = {};
                            overflowObject.link = response.data.items[i].link;
                            overflowObject.title = response.data.items[i].title;
                            linkArray.push(overflowObject);
                        }
                        console.log(linkArray);
                        return linkArray;
                    });

                }

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