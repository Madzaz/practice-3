$(document).ready(function () {
  // LIST USERS
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    success: function (response) {
      console.log(response);
    },
  });

  // SINGLE USER
  $.ajax({
    url: "https://reqres.in/api/users/2",
    success: function (response) {
      console.log(response);
    },
  });

  // SINGLE USER NOT FOUND
  $.ajax({
    url: "https://reqres.in/api/users/23",
    success: function (response) {
      console.log(response);
    },
  });

  // LIST <RESOURCE>
  $.ajax({
    url: "https://reqres.in/api/unknown",
    success: function (response) {
      console.log(response);
    },
  });

  // SINGLE <RESOURCE>
  $.ajax({
    url: "https://reqres.in/api/unknown/2",
    success: function (response) {
      console.log(response);
    },
  });

  // SINGLE <RESOURCE> NOT FOUND
  $.ajax({
    url: "https://reqres.in/api/unknown/23",
    success: function (response) {
      console.log(response);
    },
  });

  // CREATE
  $.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
      name: "morpheus",
      job: "leader",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // UPDATE - Put
  $.ajax({
    url: "https://reqres.in/api/users/2",
    type: "PUT",
    data: {
      name: "morpheus",
      job: "zion resident",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // UPDATE - Patch
  $.ajax({
    url: "https://reqres.in/api/users/2",
    type: "PATCH",
    data: {
      name: "morpheus",
      job: "zion resident",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // DELETE
  $.ajax({
    url: "https://reqres.in/api/users/2",
    type: "DELETE",
    success: function (response) {
      console.log(response);
    },
  });

  // REGISTER - SUCCESSFUL
  $.ajax({
    url: "https://reqres.in/api/register",
    type: "POST",
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // REGISTER - UNSUCCESSFUL
  $.ajax({
    url: "https://reqres.in/api/register",
    type: "POST",
    data: {
      email: "sydney@fife",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // LOGIN - SUCCESSFUL
  $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // LOGIN - UNSUCCESSFUL
  $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
      email: "peter@klaven",
    },
    success: function (response) {
      console.log(response);
    },
  });

  // DELAYER RESPONSE
  $.ajax({
    url: "https://reqres.in/api/users?delay=3",
    success: function (response) {
      console.log(response);
    },
  });
});
