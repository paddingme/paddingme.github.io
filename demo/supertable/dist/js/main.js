$(document).ready(function() 
{
    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'popup';     
    
    //make username editable
    $('#item1').editable();
    $('#item2').editable();
    $('#item3').editable();
    $('#item4').editable();
    $('#item5').editable();


     $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })



      $('#item11').editable({
        url: '',
        title: '',
        value: {
            label_name: "label1", 
           
            propertity: "1"
        }
    });
    
    //make status editable
    $('#status').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]

       //update backbone model
        /*
        //uncomment these lines to send data on server
        ,pk: 1
        ,url: '/post'
        */
        });
    });

//刷新哦 
function setReload(){
    window.location.reload();
}
// 刷新哦 思密达


















/**
Address editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class address
@extends abstractinput
@final
@example
<a href="#" id="address" data-type="address" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "15"
        }
    });
});
</script>
**/
(function ($) {

    var TwoLayer = function (options,id) {
        this.init(id, options, TwoLayer.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(TwoLayer, $.fn.editabletypes.abstractinput);

    $.extend(TwoLayer.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
           this.$input = this.$tpl.find('input');
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
             //alert(value.propertity);
             
            var html = $('<div>').text(value.label_name).html() ;//+ ', ' + $('<div>').text($("#ss").val()).html();
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g. 
            editable({
                value: {
                    city: "Moscow", 
                    street: "Lenina", 
                    building: "15"
                }
            });
          */ 
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  

               }
           }

           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
              
           this.$input.filter('[name="label_name"]').val(value.label_name);
          // this.$input.filter('[name="propertity"]').val("Ketchup");
          
           
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
          
           return {
              label_name: this.$input.filter('[name="label_name"]').val(),

              propertity: $("#ss").val()
              
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
             this.$input.filter('[name="label_name"]').focus();
           
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });

           this.$input.off("keydown.editable").on("change.editable",function()
              {a(this).closest("form").submit()})

       }       
    });

    TwoLayer.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class=""><label><span>更改标题: </span><input type="text" name="label_name" class="input-small"></label></div>'+
             '<div><span>选择属性: </span> <select class="form-control"  id="ss" data-size="false" name="propertity">  <option>单行文本框</option>  <option>数字文本框</option> <option>日期时间</option></select></div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.TwoLayer = TwoLayer;

}(window.jQuery));