/*global apiFunctions,console,document,$,_userAnimeList */
/**
 *
 *
 *
 *
 * @name Chiika JS
 * @namespace
 *
 *
 * @version @{chiika.js.version}
 * @since 0.0.0
 */
var Chiika = function ()
{
    var self = this, isInitialized = false, settings;

    self.getInitialized = function ()
    {
        return isInitialized;
    };
    self.getSettings = function ()
    {
        return settings;
    };
    self.getUserSettings = function (callback)
    {
        self.callApi("getUserSettings", callback);
    };
    self.setUserSettings = function (args, callback)
    {
        self.callApi("setUserSettings", args, callback);
    };
    self.getAnimeList = function (success, error)
    {
        apiFunctions.callApi(1, this.handleAnimelistCallback, this.handleAnimelistError, "", true);
    };
    self.callApi = function (apiIndex, args, success, error)
    {
        apiFunctions.callApi(apiIndex, success, error, args, false);
    };
    self.handleAnimelistCallback = function(args)
    {
        _userAnimeList.setUserAnimeList(args[0]);
    };
    self.handleAnimelistError = function(args)
    {
        console.log(args);
    };
}, chiika;
chiika = new Chiika();
$(document).ready(function()
{
    chiika.getAnimeList();
});
