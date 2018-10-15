import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfiniteScroll from 'react-infinite-scroller';
import AlertDialog from './AlertDialog';
import { StickyContainer, Sticky } from 'react-sticky';


var pagesize=10;

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

class App extends React.Component {

	constructor(props) {
		
		super(props);
		
		this.state = {
			employees: [],
			hasMoreItems: true,
            nextHref: null,
			pagenumber: 1,
			pagesize: 10,
			dialogOpen: false,
			loading: true,
			
			firstname: '',
			lastname: '',
			ssn: '',
			city: '',
			zip: '',
			searchFormSubmitted: false
		};
	}

	componentDidMount() {
	  this.loadItems(1);
		
	}

	handleClickOpen = () => {
		this.setState({ dialogOpen: true });
	};
	
	onChange(e, field, value) {

		var fieldToSet	=String(field);
		var valueToSet=String(value);
		
		console.log('fieldToSet:'+fieldToSet);
		console.log('valueToSet:'+valueToSet);

		this.setState({ [fieldToSet] : valueToSet });
		this.setState({ employees: [] });
		
		if (fieldToSet=='searchFormSubmitted' && valueToSet) {
			this.setState({ dialogOpen: false });
			this.loadItems(1);
		}
		
    }
  
	loadItems(pagenumber) {

        var self = this;

        var url = 'http://localhost:4200/employees/search';
       
		if (this.state.searchFormSubmitted) {
			
			console.log('now loading data....');
			
			axios.post(url,  {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				ssn: this.state.ssn,
				city: this.state.city,
				zip: this.state.zip,
				pagenumber: this.state.pagenumber,
				pagesize: this.state.pagesize
			})
			.then(res => {
				console.log('response:'+res.data);
				if(res.data.length<1) {
					this.setState({ loading: false , hasMoreItems: false});
					console.log(this.state.employees);
				} else {
					var valueArray = this.state.employees;
					res.data.forEach(element => {
					valueArray.push(element);
					});
					this.setState({ employees: valueArray, loading: false , pagenumber: 1 });
					console.log(this.state.employees);
				}
			})
		   .catch(error => {
				console.log('error:'+error);
			});	 
			
		}

	
    }

	
    render() {
		
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
		
		{this.state.employees.length > 0 && 
        
		
		this.state.employees.map((employee, i) => {
            items.push(
					
				<div className="container">
                    <Card className="card">
						
						
						<CardContent>
						
						<Typography gutterBottom variant="h5" component="h2">
							{employee.firstname} {employee.lastname}
						</Typography>
						
						<Typography component="p">
							{employee.type} {employee.salary}
						</Typography>
						
						<Typography component="p">
							{employee.totalexperience} {employee.skills}
						</Typography>
						
						<Typography component="p">
							{employee.totalexperience} {employee.skills}
						</Typography>
						
						<Typography component="p">
							{employee.jobtitle} {employee.introduction}
						</Typography>
						
						
						</CardContent>						
						
						
						<CardActions>
							<Button size="small" color="primary">
								Immigration Details
							</Button>
							<Button size="small" color="primary">
								Send Message
							</Button>
						</CardActions>
						
					</Card>
                </div>
            );
        });
		
		}

        return (
		
		<div>
			
			<Button onClick={this.handleClickOpen}>Specify Search Criteria</Button>
			
			{this.state.searchFormSubmitted &&
			<div className='searchCriteria'>
				<div className='searchCriteriaDetail'>Firstname: {this.state.firstname} </div>
				<div className='searchCriteriaDetail'>Lastname: {this.state.lastname} </div>
				<div className='searchCriteriaDetail'>SSN: {this.state.ssn} </div>
				<div className='searchCriteriaDetail'>City: {this.state.city} </div>
				<div className='searchCriteriaDetail'>Zip: {this.state.zip}  </div>
			</div>
			}
			
		    <StickyContainer>
			{			
				<div className="title">
					Employees
				</div>
			}
			
			<Sticky>
				{({
					style,

					// the following are also available but unused in this example
					isSticky,
					wasSticky,
					distanceFromTop,
					distanceFromBottom,
					calculatedHeight
				}) => (
					<header style={style}>
					{
						<AlertDialog open={this.state.dialogOpen} onChange={this.onChange.bind(this)} />
					}
					</header>
				)}
			</Sticky>
		
			{

			<div className="employeeContainer">
				<div>

					{ this.state.employees.map(employee => (
				
						<div className="card">
				
				
							<Card>
	
							<div>
								
								<div className="heading">
									<span>{employee.firstname} {employee.lastname}</span>
								</div>
							</div>
								
								
								<div className="row">
									<div className="fieldTitle">SSN:</div><div className="fieldValue">{employee.ssn}</div>
								</div>
								<div className="row">
									<div className="fieldTitle">Birthdate:</div><div className="fieldValue">{employee.birthdate}</div>
								</div>
								
								<div className="row">
									<div className="fieldTitle">Job Title:</div><div className="fieldValue">{employee.jobtitle}</div>
								</div>
								<div className="row">
									<div className="fieldTitle">Introduction:</div><div className="fieldValue">{employee.introduction}</div>
								</div>
								
								<div className="row">
									<div className="fieldTitle">Joining Date:</div><div className="fieldValue">{employee.joiningdate}</div>
								</div>
								<div className="row">
									<div className="fieldTitle">Salary:</div><div className="fieldValue">{employee.salary}</div>
								</div>
								{employee.address!=null &&
								<div className="row">
									<div className="fieldTitle">Address:</div><div className="fieldValue">
									{employee.address.address1} {employee.address.address2}
									{employee.address.city} {employee.address.state}
									{employee.address.zip} {employee.address.country}
									</div>
								</div>
								}
							</Card>
						</div>
				
			 ))}
			</div>
			</div>

			}
		
		
		 </StickyContainer>
		 
		 </div>
		 
        );
    }
};

export default App;
