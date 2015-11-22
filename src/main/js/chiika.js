/*global apiFunctions,console */
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
        apiFunctions.callApi(1, success, error, "", true);
    };
    self.callApi = function (apiIndex, args, success, error)
    {
        apiFunctions.callApi(apiIndex, success, error, args, false);
    };
}, chiika;
function handleAnimelistCallback(args)
{
    console.log(args);
}
function handleAnimelistError(args)
{
    console.log(args);
}

chiika = new Chiika();
