Bmob.initialize("94a9ab4b917a187f0033aeef5fabb005", "20d029e92630c3e938235f6870475de2");
var GameScore = Bmob.Object.extend("GameScore");
    var gameScore = new GameScore();
    gameScore.set("score", 1337);
    gameScore.save(null, {
      success: function(object) {
        alert("create object success, object id:"+object.id);
      },
      error: function(model, error) {
        alert("create object fail");
      }
    });