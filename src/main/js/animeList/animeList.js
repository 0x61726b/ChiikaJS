/*global chiika,console,angular,$,apiFunctions,AnimeModel,UserAnimeModel,AngularViewModel */
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
var UserAnimeList = function ()
{
    var self = this,
            animeList;

    self.getUserAnimeList = function ()
    {
        return animeList;
    };
    self.setUserAnimeList = function (a)
    {
        animeList = a;
        console.log("Setting user anime list..size: " + animeList.length);
        console.log(animeList[0]);
        var angularWatchingModelList = [];
        var angularCompletedModelList = [];
        var index = 0;
        for (index; index < animeList.length; index++)
        {
            var listIdentifier = animeList[index].my_status;


            var animeModel = new AnimeModel();
            animeModel.title = animeList[index].anime.series_title;
            animeModel.type = animeList[index].anime.series_type;
            animeModel.status = animeList[index].series_status;
            animeModel.startDate = animeList[index].anime.series_start;
            animeModel.endDate = animeList[index].anime.series_end;
            animeModel.episodeCount = animeList[index].anime.series_episodes;
            var userAnimeModel = new UserAnimeModel();
            userAnimeModel.anime = animeModel;
            userAnimeModel.progress = {value: animeList[index].my_watched_episodes};
            userAnimeModel.score = {value: animeList[index].my_score};

            var angularModel = new AngularViewModel();
            angularModel.setModel(userAnimeModel);

            if( listIdentifier === "1")
            {
               angularWatchingModelList.push(angularModel);
            }
            if( listIdentifier === "2")
            {
               angularCompletedModelList.push(angularModel);
            }
        }
        console.log(angularWatchingModelList);


        apiFunctions.updateAngularElement($("#watchingWrapper"), angularWatchingModelList,1);

        apiFunctions.updateAngularElement($("#completedWrapper"), angularCompletedModelList,2);

    };
}, _userAnimeList;
_userAnimeList = new UserAnimeList();