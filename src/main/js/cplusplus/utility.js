/*global window,ApiList,chiika,eval */
/**
*
*
*
*
* @name Utility classes
* @namespace
*
*
* @version @{chiika.js.version}
* @since 0.0.0
*/

var ApiFuncCaller = function()
{
    var self = this;


    self.callApi = function(funcName,args,callback)
    {
        var index;
        for(index;index < ApiList.length; index++)
        {
            if(funcName !== ApiList[index])
            {
                return;
            }
        }
        window[funcName].apply(args,callback);
    };
};