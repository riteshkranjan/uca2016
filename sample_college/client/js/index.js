var app = angular.module("angApp", ["ui.router"]);

app.controller("mainController", function(){
  // this.tab = 1;
  this.selectTab = function(selectedTab){
    this.tab = selectedTab;
  };
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("showallstudents", {
    url: "/Students",
    templateUrl: "templates/studentsList.html"
  })
  .state("addnewstudent", {
    url: "/addstudent",
    templateUrl: "templates/addStudent.html"
  })
  .state("updatestudent", {
    url: "/updatestudent",
    templateUrl: "templates/updateStudent.html"
  })
  .state("deletestudent", {
    url: "/deletestudent",
    templateUrl: "templates/deleteStudent.html"
  })
});

app.controller("getstudentsController", function($http){

  var college=this;
  $http.get('http://localhost:8080/student').then(function successCallback(response) {
        console.log("Inside success callback before assigning");
        college.students = response.data;
    }, function errorCallback(data) {
        console.log("Inside error callback");
    }
    );
});

app.controller("addstudentController", function($http){
  this.student = {};
  this.submitUserDetails = function() {
    $http.post('http://localhost:8080/student', this.student).then(function successCallback(response) {
          console.log("Inside success callback for Add student");
          console.log(response.data);
      }, function errorCallback(data) {
          console.log("Inside error callback for add student");
      }
      );
      this.student={};
  }
});

app.controller("updatestudentController", function($http){
  this.student = {};
  this.submitUserDetails = function() {
    $http.put('http://localhost:8080/student/' + this.student.id, this.student).then(function successCallback(response) {
          console.log("Inside success callback for Update student");
          console.log(response.data);
      }, function errorCallback(data) {
          console.log("Inside error callback for update student");
      }
      );
      this.student={};
  }
});

app.controller("deletestudentController", function($http){
  this.studentid;
  this.submitUserDetails = function() {
    $http.delete('http://localhost:8080/student/' + this.studentid).then(function successCallback(response) {
          console.log("Inside success callback for Update student");
          console.log(response.data);
      }, function errorCallback(data) {
          console.log("Inside error callback for update student");
      }
      );
      this.studentid = null;
  }
});
