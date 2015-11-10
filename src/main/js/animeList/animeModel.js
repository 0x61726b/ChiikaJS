/*global */
/**
*
*
*
*
* @name Anime Model
* @namespace
*
*
* @version @{chiika.js.version}
*/
var AnimeModel = function()
{
    var self = this,
            id = 0,
            title = "",
            english = "",
            episodeCount = "",
            type = "",
            status = "",
            startDate = "",
            endDate = "" ,
            synopsis = "",
            tags,
            premiered = "",
            producers = "",
            duration = 0,
            score = 0,
            ranked = 0,
            popularity = 0;
    self.getId = function()
    {
        return id;
    };
    self.getTitle = function()
    {
        return title;
    };
    self.getEnglish = function()
    {
        return english;
    };
    self.getEpisodeCount = function()
    {
        return episodeCount;
    };
    self.getType = function()
    {
        return type;
    };
    self.getStatus = function()
    {
        return status;
    };
    self.getStartDate = function()
    {
        return startDate;
    };
    self.getEndDate = function()
    {
        return endDate;
    };
    self.getSynopsis = function()
    {
        return synopsis;
    };
    self.getTags = function()
    {
        return tags;
    };
    self.getPremiered = function()
    {
        return premiered;
    };
    self.getProducers = function()
    {
        return producers;
    };
    self.getDuration = function()
    {
        return duration;
    };
    self.getScore = function()
    {
        return score;
    };
    self.getRanked = function()
    {
        return ranked;
    };
    self.getPopularity = function()
    {
        return popularity;
    };
};