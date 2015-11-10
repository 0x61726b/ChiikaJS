/*global */
/**
*
*
*
*
* @name User Model
* @namespace
*
*
* @version @{chiika.js.version}
*/
var User = function()
{
    var self = this,
            userName = "",
            animeInfo =
            {
                watching:0,
                completed:0,
                onHold:0,
                dropped:0,
                planToWatch:0,
                daysSpent:0
            },
            mangaInfo =
            {
                reading:0,
                read:0,
                onHold:0,
                dropped:0,
                planToRead:0,
                daysSpent:0
            };


    self.getUserAnimeInfo = function()
    {
        return animeInfo;
    };
    self.getUserMangaInfo = function()
    {
        return mangaInfo;
    };
};