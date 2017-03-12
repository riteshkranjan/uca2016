var app = angular.module("angApp", ["ui.router"]);


app.controller("mainController", function(){
  // this.tab = 1;
  this.selectTab = function(selectedTab){
    this.tab = selectedTab;
  };
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("showallproducts", {
    url: "/Product",
    templateUrl: "templates/ProductList.html"
  })
  .state("addnewproduct", {
    url: "/addproduct",
    templateUrl: "templates/addProduct.html"
  })
  .state("updateproduct", {
    url: "/updateproduct",
    templateUrl: "templates/updateProduct.html"
  })
  .state("deleteproduct", {
    url: "/deleteproduct",
    templateUrl: "templates/deleteProduct.html"
  })
});

app.controller("getsellersController", function($http){

  var flowers=this;
  $http.get('http://localhost:8080/student').then(function successCallback(response) {
        console.log("Inside success callback before assigning");
        flowers.students = response.data;
    }, function errorCallback(data) {
        console.log("Inside error callback");
    }
    );
});

app.controller("addProductController", function($http){
  this.student = {};
 // student.file =  = fs.readFileSync(student.file);
  this.submitUserDetails = function() {
    $http.post('http://localhost:8080/student', this.student).then(function successCallback(response) {
          console.log("Inside success callback for Add Product");
          console.log(response.data);
      }, function errorCallback(data) {
          console.log("Inside error callback for Add Product");
      }
      );
      this.student={};
  }
});

app.controller("updateProductController", function($http){
  this.student = {};
  this.submitUserDetails = function() {
    $http.put('http://localhost:8080/student/' + this.student.id, this.student).then(function successCallback(response) {
          console.log("Inside success callback for Update Product");
          console.log(response.data);
      }, function errorCallback(data) {
          console.log("Inside error callback for update Product");
      }
      );
      this.student={};
  }
});

app.controller("deleteProductController", function($http){
  this.studentid;
  this.submitUserDetails = function() {
    $http.delete('http://localhost:8080/student/' + this.studentid).then(function successCallback(response) {
          console.log("Inside success callback for Delete Product");
          console.log(response.data);
      }, function errorCallback(data) {
          console.log("Inside error callback for Delete Product");
      }
      );
      this.studentid = null;
  }
});
