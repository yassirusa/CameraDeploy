(function () {
    var app = angular.module('app', ['ionic', 'ngCordova']).run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });
    app.controller('pictureCtrl', function ($ionicPlatform, $scope, $cordovaCamera) {
        $ionicPlatform.ready(function () {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $scope.takePicture = function () {
                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgSrc = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    console.log(err);
                });
            }

        });
    });

})();