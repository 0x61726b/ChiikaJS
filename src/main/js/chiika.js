/*global ApiFuncCaller */
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
var Chiika = function()
{
    var self = this,isInitialized = false,settings;

    self.getInitialized = function()
    {
      return isInitialized;
    };
    self.getSettings = function()
    {
        return settings;
    };
    self.callApi = function(name,args,callback)
    {
        ApiFuncCaller.callApi(name,args,callback);
    };
},chiika;

chiika = new Chiika();

