
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('sendPush', function(req, res) {
    var query = new Parse.Query(Parse.Installation);
    query.exists("deviceToken");
    var payload = { alert: "Meow" };

    Parse.Push.send({
        data: payload,
        where: query
    }, { useMasterKey: true })

    .then(function() {
        res.success("Push Sent!");
    }, function(error) {
        res.error(error.message);
    });
})
