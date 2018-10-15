import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { Grid, Card, Icon, Image, Label, Item, Message, Segment, Loader, Dimmer, Progress, Button } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

var pagesize=10;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			employees: [],
			hasMoreItems: true,
            nextHref: null,
			pagenumber: 1,
			loading: true
		};
	}

	componentDidMount() {
	  
		
	}

	loadItems(pagenumber) {
		//alert('in loadItems');
        var self = this;

        var url = 'http://localhost:4200/employees/search';
       

		axios.post(url,  {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			ssn: this.state.ssn,
			city: this.state.city,
			zip: this.state.zip,

			pagenumber: this.state.pagenumber,
			pagesize: pagesize
		})
		.then(res => {
			console.log('response:'+res.data);
			if(res.data.length<1) {
				this.setState({ loading: false , hasMoreItems: true});
				console.log(this.state.employees);
			} else {
				var valueArray = this.state.employees;
				res.data.forEach(element => {
				valueArray.push(element);
				});
				this.setState({ employees: valueArray, loading: false , hasMoreItems: true, pagenumber: this.state.pagenumber+1 });
				console.log(this.state.employees);
			}
		})
	   .catch(error => {
			console.log('error:'+error);
		});	 
       
    }

	
    render() {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
		
		{this.state.employees.length > 0 && 
        
		
		this.state.employees.map((employee, i) => {
            items.push(
					
					<div className="container">
                    <Card className={classes.card}>
						<CardActionArea>
						<CardMedia
						className={classes.media}
						image="/static/images/cards/contemplative-reptile.jpg"
						title="Contemplative Reptile"
						/>
						<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
						{this.employee.firstname} {this.employee.lastname}
						</Typography>
						<Typography component="p">
						{this.employee.type} {this.employee.salary}
						</Typography>
						<Typography component="p">
						{this.employee.totalexperience} {this.employee.skills}
						</Typography>
						
						<Typography component="p">
						{this.employee.totalexperience} {this.employee.skills}
						</Typography>
						
						<Typography component="p">
						{this.employee.jobtitle} {this.employee.introduction}
						</Typography>
						
						<Typography component="p">
						{this.employee.contact!=null &&
						{this.employee.contact.phone} {this.employee.contact.email}
						}
						</Typography>
						
						<Typography component="p">
						{this.employee.address!=null && 
						
							{this.employee.address.address1} {this.employee.address.address2}
							{this.employee.address.city} {this.employee.address.state}
							{this.employee.address.zip} {this.employee.address.country}
						}
						</Typography>
						
						<Typography component="p">
						{this.employee.currentclient!=null && 
						
							{this.employee.currentclient.name} {this.employee.currentclient.domain}
							{this.employee.currentclient.department} 
							{this.employee.currentclient.statedate} {this.employee.currentclient.enddate}
							{this.employee.currentclient.hourlyrate} 
							
							{this.employee.currentclient.address!=null && 
						
							{this.employee.currentclient.address.address1} {this.employee.currentclient.address.address2}
							{this.employee.currentclient.address.city} {this.employee.currentclient.address.state}
							{this.employee.currentclient.address.zip} {this.employee.currentclient.address.country}
							}
						}
						</Typography>
						
						</CardContent>
						</CardActionArea>
						<CardActions>
						<Button size="small" color="primary">
						Share
						</Button>
						<Button size="small" color="primary">
						Learn More
						</Button>
						</CardActions>
						</Card>
                </div>
            );
        });
		
		}

        return (
		    
			<div>
			<div className="jumbotron">
			Restaurants
			</div>
			<div className="employeeContainer">
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                <div className="tracks">
                    {items}
                </div>
            </InfiniteScroll>
			</div>
			</div>
        );
    }
};

export default App;
