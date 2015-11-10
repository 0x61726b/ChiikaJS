/*global chiika */
/**
*
*
*
*
* @name settings
* @namespace
*
* @memberOf chiika
*
* @version @{chiika.js.version}
* @since 0.0.0
*/
var Settings = function()
{
    var self = this,
            libraryPath = "",
            syncInterval = 150,
            windowSettings =
            {
              startMinimized:false,
              startWithWin:false,
              rememberPos:false,
              rememberSize:false
            },
            globalColor;

    self.getLibraryPath = function()
    {
        return libraryPath;
    };

    self.getSyncInterval = function()
    {
        return syncInterval;
    };

    self.getWindowSettings = function()
    {
        return windowSettings;
    };

    self.getGlobalColor = function()
    {
        return globalColor;
    };
};