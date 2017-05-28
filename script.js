var success = function(response) {
  console.log(response);
}

$.ajax({
  url: "https://reqres.in/api/users",
  type: "POST",
  data: {
    name: "paul rudd",
    movies: ["I Love You Man", "Role Models"]
  },
  success: success
});

$.get('https://reqres.in/api/users/1', '', success);

$.post("https://reqres.in/api/users", {
  name: "paul rudd",
  movies: ["I Love You Man", "Role Models"]
}, success);