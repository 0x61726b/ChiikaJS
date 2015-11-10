/*global chiika */
/**
*
*
*
*
* @name Anime List
* @namespace
*
*
* @version @{chiika.js.version}
*/
var UserAnimeList = function()
{
    var self = this,
            userAnimeList;

    self.getUserAnimeList = function()
    {
        return userAnimeList;
    };
    self.setUserAnimeList = function(animeList)
    {
        userAnimeList = animeList;
    };
};