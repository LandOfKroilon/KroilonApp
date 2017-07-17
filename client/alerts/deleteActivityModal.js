import { Academy } from '/imports/api/databasedriver.js';

Template.registerHelper('formatDate', function(date) {
  return date.toDateString();
});

Template.deleteActivityModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    let activity = this;
<<<<<<< HEAD

    if (activity.pointsType === "TP") {  
      //console.log("TEAM!");

      Meteor.call("deleteTeamScore", latestAcademy._id, activity, function(error, result) {
=======
    //console.log("name: " + activity.name);
    //console.log("player: " + activity.player);
    //console.log("nb: " + activity.nb);
    //console.log("date: " + activity.date);

    if (activity.player === "Team") {  
      //console.log("TEAM!");

      Meteor.call("deleteTeamScore", latestAcademy._id, activity.date, function(error, result) {
>>>>>>> cdd9b7c4adaf57c67523860365787fa884e50298
        if (error) {
          alert(error);
        } 
      });

    } else {
<<<<<<< HEAD

      let activityDate = activity.date;
      //console.log("Activity Date: " + activityDate);
      let activityType = activity.type;
      //console.log("Activity Type: " + activityType);
      let activityName = activity.name;
      //console.log("Activity Name: " + activityName);
      let activityPoints = activity.points;
      //console.log("Activity Points: " + activityPoints);
      let activityPointsType = activity.pointsType;
      //console.log("Activity Points Type: " + activityPointsType);

      let activityUser = getUserByNB(activity.nb);
      let userScores = activityUser.score;

      if (userScores != undefined)
      {
        $.each(userScores, function(idx_scores, val_scores)
        {
          console.log("SCORE NAME: " + val_scores.name);

          if ( (val_scores.name === activityName) && (val_scores.date === activityDate) && (val_scores.countType === activityType) && (val_scores.points === activityPoints) && (val_scores.pointsType === activityPointsType))  {

            //console.log("NAME CHECK!");
            //console.log("DATE CHECK!");
            //console.log("TYPE CHECK!");
            //console.log("POINTS CHECK!");
            //console.log("POINTS TYPE CHECK!");
            
            Meteor.call('deleteScore', latestAcademy._id, activity.nb, val_scores, function(error, result) {
              if (error) {
                alert(error);
              }
            });
            
          }
           
          //points.push({"player":val_players.name, "category":val_scores.countType, "name":val_scores.name, "points":val_scores.points, "type":val_scores.pointsType,  "date":val_scores.date});
        //  console.log(points_a);
        //  console.log(points[0]);
        });
      }

    
      
=======
    
      Meteor.call('deleteScore', latestAcademy._id, activity.nb, activity.date, function(error, result) {
        if (error) {
          alert(error);
        }
      });
>>>>>>> cdd9b7c4adaf57c67523860365787fa884e50298

    }

    Modal.hide('deleteChallengeModal');

  }
<<<<<<< HEAD
});

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}
=======
});
>>>>>>> cdd9b7c4adaf57c67523860365787fa884e50298
