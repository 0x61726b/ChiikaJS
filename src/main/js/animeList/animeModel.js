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
var AnimeModel = function ()
{
    var self = this,
            id = 0,
            title = "",
            english = "",
            episodeCount = "",
            type = "",
            status = "",
            startDate = "",
            endDate = "",
            synopsis = "",
            season = "",
            tags,
            premiered = "",
            producers = "",
            duration = 0,
            score = 0,
            ranked = 0,
            popularity = 0;
    self.getSeason = function()
    {
        var parts = this.startDate.split("-");
        var year = parts[0];
        var month = parts[1];

        var iMonth = parseInt(month);

        if(iMonth > 0 && iMonth <4)
        {
            return "Winter " +year;
        }
        if(iMonth > 3 && iMonth < 7)
        {
            return "Spring " + year;
        }
        if(iMonth > 6 && iMonth < 10)
        {
            return "Summer " + year;
        }
        if(iMonth > 9 && iMonth <= 12)
        {
            return "Fall " + year;
        }
        return "Unkown Season";
    };
    self.getStatus = function()
    {
        if(this.status === "1")
        {
            return "Watching";
        }
        if(this.status === "2")
        {
            return "Completed";
        }
        if(this.status === "3")
        {
            return "On Hold";
        }
        if(this.status === "4")
        {
            return "Dropped";
        }
        if(this.status === "6")
        {
            return "Plan to Watch";
        }
    };
    self.getType = function()
    {
        if(this.type === "1")
        {
            return "Tv";
        }
        if(this.type === "2")
        {
            return "Ova";
        }
        if(this.type === "3")
        {
            return "Movie";
        }
    };
};
var UserAnimeModel = function ()
{
    var self = this, anime = null,
            progress = {value: 0},
            progressString = "",
            score = {value: 0},
            scoreString = "";

    self.getProgressString = function ()
    {
        if(this.anime.episodeCount === "0")
        {
            return "-";
        }
        else
        {
           return this.progress.value + "/" + this.anime.episodeCount;
        }
    };
    self.getScoreString = function ()
    {
        if (this.score === 0)
        {
            return "-";
        }
        else
        {
            return this.score;
        }
    };
};
var AngularViewModel = function()
{
    var self = this,
            title = "",
            progress = { value: 0 },
            progressString = "",
            type = "",
            score = { value:0 },
            scoreString = "",
            season = "";
    self.setModel = function(model)
    {
        this.title = model.anime.title;
        this.progress = model.progress;
        this.progressString = model.getProgressString();
        this.type = model.anime.getType();
        this.score = model.score;
        this.scoreString = model.getScoreString();
        this.season = model.anime.getSeason();
    };
};