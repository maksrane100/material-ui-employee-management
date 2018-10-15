/*****************************************************************************************************************************/
/***********************  Employee Management Application Using React ********************************************************/
/*****************************************************************************************************************************/

/*** User can click on the button and dialog opens that displays employee search options. User can select one or    **********/
/*** multiple search criteria to search for employees from the dialog and click on the Search button.     ********************/
/*** When user clicks on the Search button, App.js searches for employees using the criteria user has    *********************/
/*** selected and displays employees that match the criteria.  ***************************************************************/

/*** This example also demonstrates how to use Parent and Child components in React. 
/*** App.js is the parent component and AlertDialog is the child component. We open AlertDialog child component from App *****/
/*** parent component, user selects search fields in AlertDialog and clicks on Search button and control comes back to    ****/
/*** App.js which is the parent component. Parent component searches for employees using the search criteria. ****************/
/*****************************************************************************************************************************/


Material UI is React components that implement Google's Material Design.
In this article, we are creating a sample web application where employer can search for it's employees. 
Though it's a simple application, it demonstrates lot of things of React such as


1) how to consume REST API in React
2) how to render JSON response in React
3) how to use Material UI components in React
4) how to use Sticky  in React

create user interface using ReactJS using which user can search for employees
in their company with different search criteria such as firstname, latname,
ssn, city, zip.

We will use react-sticky's Sticky component that will stick on the top of the screen.
When user click on "Show Search Options" button, popup form will open up where user
can select their search criteria and click on the Search button. After user clicks on the 
Search button, the popup form will close and we will fetch employee search results and 
update the React state to display those results. There will be NO page refresh as ReactJS updates
the DOM from it's virtual DOM.

We will use Card component for the search results display. So using Card, we will display employee information.
When user clicks on the "Immigration Details", dialog will open up with the employee's immigration details in it.


You can take a look at the components in src directory.

Assumptions:
1) Node JS is installed
2) React JS is installed

First create react app material-ui-employee-management using "create-react-app". "create-react-app" sets up development environment 
so that you can use the latest JavaScript features.



c:\articles>npm i axios @material-ui/core @material-ui/icons react-sticky --save

> jss@9.8.7 postinstall c:\articles\node_modules\jss
> node -e "console.log('\u001b[35m\u001b[1mLove JSS? You can now support us on open collective:\u001b[22m\u001b[39m\n > \u001b[34mhttps://opencollective.com/jss/donate\u001b[0m')"

Love JSS? You can now support us on open collective:
 > https://opencollective.com/jss/donate
npm WARN saveError ENOENT: no such file or directory, open 'c:\articles\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'c:\articles\package.json'
npm WARN @semantic-ui-react/event-stack@2.0.0 requires a peer of react@^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @semantic-ui-react/event-stack@2.0.0 requires a peer of react-dom@^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN semantic-ui-react@0.82.5 requires a peer of react@^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN semantic-ui-react@0.82.5 requires a peer of react-dom@^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-sticky@6.0.3 requires a peer of react@>=15 but none is installed. You must install peer dependencies yourself.
npm WARN react-sticky@6.0.3 requires a peer of react-dom@>=15 but none is installed. You must install peer dependencies yourself.
npm WARN @material-ui/icons@3.0.1 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN @material-ui/icons@3.0.1 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN recompose@0.29.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @material-ui/core@3.2.0 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN @material-ui/core@3.2.0 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-transition-group@2.5.0 requires a peer of react@>=15.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-transition-group@2.5.0 requires a peer of react-dom@>=15.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-event-listener@0.6.4 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN recompose@0.30.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN articles No description
npm WARN articles No repository field.
npm WARN articles No README data
npm WARN articles No license field.

+ react-sticky@6.0.3
+ @material-ui/icons@3.0.1
+ axios@0.18.0
+ @material-ui/core@3.2.0
added 57 packages from 147 contributors, updated 1 package and audited 177 packages in 30.722s
found 0 vulnerabilities



c:\articles\material-ui-employee-management>npm i react-infinite-scroller --save
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-infinite-scroller@1.2.2
added 1 package from 1 contributor, updated 3 packages and audited 32035 packages in 43.927s
found 0 vulnerabilities




I have attached the screenshots also. It shows how the application works.

