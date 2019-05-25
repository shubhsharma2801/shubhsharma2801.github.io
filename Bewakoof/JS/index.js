var app = angular.module('myApp', []);
//had to use template instead of templateUrl because templateUrl was give CORS issue in MacOS


app.controller('myCtrl', function($scope) {

//load json data
var json=  '   [  '  +
 '     {  '  +
 '       "bin": "P1-A0-1-013",  '  +
 '       "sku": "A11511921",  '  +
 '       "qty": 2,  '  +
 '       "picked" :0,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-A1-1-013",  '  +
 '       "sku": "B11511922",  '  +
 '       "picked" :0,  '  +
 '       "qty": 3,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-A2-1-013",  '  +
 '       "sku": "B11511923",  '  +
 '       "picked" :0,  '  +
 '       "qty": 8,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-B0-1-013",  '  +
 '       "sku": "B11511924",  '  +
 '       "picked" :0,  '  +
 '       "qty": 3,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-C0-1-013",  '  +
 '       "sku": "B11511925",  '  +
 '       "picked" :0,  '  +
 '       "qty": 7,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-D0-1-013",  '  +
 '       "sku": "B11511926",  '  +
 '       "picked" :0,  '  +
 '       "qty": 3,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-E0-1-013",  '  +
 '       "sku": "B11511927",  '  +
 '       "picked" :0,  '  +
 '       "qty": 10,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-F0-1-013",  '  +
 '       "sku": "B11511928",  '  +
 '       "picked" :0,  '  +
 '       "qty": 4,  '  +
 '       "notfound": 0  '  +
 '     },  '  +
 '     {  '  +
 '       "bin": "P1-G0-1-013",  '  +
 '       "sku": "B11511929",  '  +
 '       "picked" :0,  '  +
 '       "qty": 1,  '  +
 '       "notfound": 0  '  +
 '     }  '  +
 '   ]  '  +
 '    ' ;
$scope.cardJSONArray=JSON.parse(json);
console.log($scope.cardJSONArray);
 $scope.updateCard = function(i){
   $scope.temp=$scope.cardJSONArray[0];
   $scope.cardJSONArray.shift();
   $scope.cardJSONArray.push($scope.temp);
   var j=i+1;
   $scope.card=$scope.cardJSONArray[0];
   $scope.card1=$scope.cardJSONArray[1];
   console.log($scope.card1);
 }
$scope.i=0;
$scope.updateCard($scope.i);
$scope.lastScanned="";
$scope.binInput = "";
$scope.myFunct = function(keyEvent) {
  if (keyEvent.which === 13)
    if($scope.binInput == $scope.card.bin){
      $scope.binScanned=true;
      document.getElementById("sku").focus();
    }
}
$scope.showDetailClicked=false;
$scope.skuEntered = function(keyEvent) {
  if (keyEvent.which === 13)
    $scope.lastScanned = $scope.skuInput;
    if($scope.skuInput == $scope.card.sku){
      $scope.card.picked++;
      $scope.skuInput="";
      $scope.binInput="";
      $scope.binScanned=false;
      if($scope.card.picked == $scope.card.qty){
        $scope.card.status='done';
        //var pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');
        //$scope.cardJSONArray.splice(i,1);
        //$scope.cardJSONArray.push($scope.card);
        //$scope.i++;
        $scope.updateCard($scope.i);

      }
      document.getElementById("bin").focus();
    }
}
$scope.notfound = function(){
  $scope.card.notfound=$scope.card.qty - $scope.card.picked;
  $scope.card.status='notfound';
  $scope.i++;
  $scope.updateCard($scope.i);
  //$scope.cardJSONArray.splice(i,1);
  //$scope.cardJSONArray.push($scope.card);

}
$scope.showDetail = function(){
  $scope.showDetailClicked=true;
  $scope.showList=true;
}







});
