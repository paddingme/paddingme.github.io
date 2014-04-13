<html>
  <head>
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
     <title>Create Employee</title>
     <link rel="stylesheet" href="${createLinkTo(dir:'css',file:'main.css')}"></link>
  </head>
  <body>
    <div class="logo"><img src="${createLinkTo(dir:'images',file:'grails_logo.jpg')}" alt="Grails" /></div>
    <div class="nav">
      <span class="menuButton"><a href="${createLinkTo(dir:'')}">Home</a></span>
      <span class="menuButton"><g:link action="list">Employee List</g:link></span>
    </div>
    <div class="body">
       <h1>Create Employee</h1>
       <g:if test="${flash['message']}">
         <div class="message">${flash['message']}</div>
       </g:if>
       <g:hasErrors bean="${employee}">
        <div class="errors">
          <g:renderErrors bean="${employee}" as="list" />
        </div>
       </g:hasErrors>
       <g:form action="save" method="post">
         <div class="dialog">
        <table>
           <tr class='prop'>
	     <td valign='top' style='text-align:left;' width='20%'>
	       <label for='id'>ID:</label>
	     </td>
	     <td valign='top' style='text-align:left;' width='80%' 
	       class='${hasErrors(bean:employee,field:'id','errors')}'>
	       <input type='text' name='id' value='${employee?.id}' />
	     </td>
	   </tr>

           <tr class='prop'>
	     <td valign='top' style='text-align:left;' width='20%'>
	       <label for='firstName'>First Name:</label>
	     </td>
	     <td valign='top' style='text-align:left;' width='80%' 
	     	class='${hasErrors(bean:employee,field:'firstName','errors')}'>
		<input type='text' name='firstName' value='${employee?.firstName}' />
	     </td>
	   </tr>

           <tr class='prop'>
	     <td valign='top' style='text-align:left;' width='20%'>
	       <label for='lastName'>Last Name:</label>
	     </td>
	     <td valign='top' style='text-align:left;' width='80%' 
	       class='${hasErrors(bean:employee,field:'lastName','errors')}'>
	       <input type='text' name='lastName' value='${employee?.lastName}' />
	     </td>
	   </tr>

           <tr class='prop'>
	     <td valign='top' style='text-align:left;' width='20%'>
	       <label for='startDate'>Start Date:</label>
	     </td>
	     <td valign='top' style='text-align:left;' width='80%' 
	       class='${hasErrors(bean:employee,field:'startDate','errors')}'>
	       <g:datePicker name='startDate' value='${employee?.startDate}'></g:datePicker>
	     </td>
	   </tr>
         </table>
         </div>
         <div class="buttons">
           <span class="formButton">
            <input type="submit" value="Create"></input>
           </span>
         </div>
      </g:form>
    </div>
  </body>
</html>
