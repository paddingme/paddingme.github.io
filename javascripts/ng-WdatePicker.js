/**
 * The angular WdatePicker module
 * @author: PaddingMe
 * @version: 0.0.1, 2016-03-16
 */
(function(angular,WdatePicker) {

    angular.module('ng-WdatePicker', [])
        .directive('wdatePicker', wdatePicker);

    function wdatePicker() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        }


        function link(scope, element, attr, ngModel) {


            element.val(ngModel.$viewValue);


            function onpicking(dp) {
                // var date = dp.cal.getNewDateStr();
                // scope.$apply(function() {
                //     ngModel.$setViewValue(date);
                // });
                //
            }

            function onpicked(dp) {
                var date = dp.cal.getNewDateStr();
                scope.$apply(function() {
                    ngModel.$setViewValue(date);
                });
            }

            function oncleared() {
                scope.$apply(function() {
                    ngModel.$setViewValue("");
                });
            }


            element.bind('click focus', function() {

                var config = {
                    onpicking: onpicking,
                    oncleared: oncleared,
                    onpicked: onpicked,
                    dateFmt: attr.datefmt || 'yyyy-MM-dd HH:mm:ss',
                };



                if (attr.mindate) {
                    config.minDate = attr.mindate;
                } else {
                    config.minDate = '%y-%M-%d %H:%m:%s';
                }

                if (attr.maxdate) {
                    config.maxDate = attr.maxdate;
                } else {
                    config.maxDate = '2099-12-30 00:00:00';
                }


                WdatePicker(config)
            });
        }
    }



})(angular,window.WdatePicker);
