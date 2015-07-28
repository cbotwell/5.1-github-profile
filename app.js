var loadUser = function(username, onload) {
  var url = 'https://api.github.com/users/' + username;

  $.ajax({
    url: url,
    dataType: 'json',
    success: onload
  });
};

var loadRepos = function(username, onload) {
  var url = 'https://api.github.com/users/' + username + '/repos?sort=created';

  $.ajax({
    url: url,
    dataType: 'json',
    success: onload
  });
};

var sidebarEl = $('.sidebar');
var reposEl = $('.repos');
var sidebarTemplateString = $('#sidebar').html();
var repoTemplateString = $('#repo').html();

var sT = Handlebars.compile(sidebarTemplateString);
var rT = Handlebars.compile(repoTemplateString);

loadRepos('cbotwell', function(data) {
  var allRepos = rT(data);
  reposEl.html(allRepos);
});

loadUser('cbotwell', function(data) {
  var result = sT(data);
  sidebarEl.html(result);

});
