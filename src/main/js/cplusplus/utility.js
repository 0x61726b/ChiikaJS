/*global window,ApiList,chiika,eval,console */
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

var ApiFuncCaller = function ()
{
    var self = this;


    self.callApi = function (apiIndex, success, error, args, delayed)
    {
        var index;
        if (typeof ApiList[apiIndex] === "undefined")
        {
            console.log("Trying to call a API function that doesnt exist.");
            return;
        }
        console.log("Trying to execute" + ApiList[apiIndex].name + "... with arguments: ");
        console.log(args);

        if (typeof window[ApiList[apiIndex].name] === "function")
        {
            console.log("Executing call..." + apiIndex);
            window[ApiList[apiIndex].name](success, error, args);
        } else
        {
            console.log("You can't call this function outside of Chiika.");
        }
    };
}, apiFunctions;


apiFunctions = new ApiFuncCaller();