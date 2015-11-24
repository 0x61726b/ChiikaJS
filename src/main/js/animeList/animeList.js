/*global chiika,console,angular,$,apiFunctions */
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
            animeList;

    self.getUserAnimeList = function()
    {
        return animeList;
    };
    self.setUserAnimeList = function(a)
    {
        animeList = a;
        console.log("Setting user anime list..size: " + animeList.length);
        apiFunctions.updateAngularElement($("#watchingWrapper"),animeList);
        angular.element($("#watchingWrapper")).scope().$apply();

    };
},_userAnimeList;
_userAnimeList = new UserAnimeList();