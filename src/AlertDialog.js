/*****************************************************************************************************************************/
/***************************************  AlertDialog Child Component ********************************************************/
/*****************************************************************************************************************************/


import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import cities from './city.json';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  error: {
   color: '#FF0000'
  }
});



/*****************************************************************************************************************************/
/***************************************  AlertDialog Child Component ********************************************************/
/*****************************************************************************************************************************/


class AlertDialog extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			openDialog: this.props.open,
			errors: [],
			firstname: '',
			lastname: '',
			ssn: '',
			city: '',
			zip: ''
		};
	}

	componentDidMount() {
		
	}
	
	componentWillReceiveProps(nextProps) {
		//alert(nextProps);
		if (nextProps.open !== this.props.openDialog) {
			this.setState({ openDialog: nextProps.open });
		}
	}

	
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
		this.props.onChange(event, [name], event.target.value);
	};


	handleClose = (e) => {
		//alert('here');
		//this.update(e);
		this.setState({ openDialog: false });
	};
	
	handleReset = (e) => {
		this.setState({ 
			firstname: '',
			lastname: '',
			ssn: '',
			city: '',
			zip: ''
		});
		this.props.onChange(e, 'firstname', '');
		this.props.onChange(e, 'lastname', '');
		this.props.onChange(e, 'ssn', '');
		this.props.onChange(e, 'city', '');
		this.props.onChange(e, 'zip', '');
	};
	
	
	handleSearch = (event) => {
		
		this.setState({ errors: [] });
		
		if(this.state.firstname=='' && this.state.lastname=='' && this.state.ssn=='' && this.state.city=='' && this.state.zip=='') {
			var tempErrors=[];
			tempErrors.push('At least one search criteria is required. Please select and try again.');
			this.setState({ errors: tempErrors });
		} else {
			this.props.onChange(event, 'searchFormSubmitted', true);
		}
	};
	
	 
	
  render() {
    
	const { classes } = this.props;
	
	return (
	
      <div>
        
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
		
		<DialogTitle id="alert-dialog-title">{"Specify Search Criteria"}</DialogTitle>
		
		<DialogContent>
            
			{this.state.errors != null &&
			 <ul className={classes.error}>
                {this.state.errors.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
            </ul>
			}
			
			<form className={classes.container} noValidate autoComplete="off">
        
				<TextField
					id="outlined-name"
					label="Firstname"
					name="firstname"
					className={classes.textField}
					value={this.state.firstname}
					 onChange={this.handleChange('firstname')}
					//onChange={this.onFieldChange.bind(this)}
					margin="normal"
					variant="outlined"
					fullWidth
				/>

				<TextField
					id="outlined-name"
					label="Lastname"
					name="lastname"
					className={classes.textField}
					value={this.state.lastname}
					onChange={this.handleChange('lastname')}
					//onChange={this.onFieldChange.bind(this)}
					margin="normal"
					variant="outlined"
					fullWidth
				/>

				<TextField
					id="outlined-name"
					label="SSN"
					name="ssn"
					className={classes.textField}
					value={this.state.ssn}
					onChange={this.handleChange('ssn')}
					//onChange={this.onFieldChange.bind(this)}
					margin="normal"
					variant="outlined"
					fullWidth
				/>

				<TextField
				  id="standard-select-city"
				  select
				  label="Select City"
				  className={classes.textField}
				  value={this.state.city}
				  onChange={this.handleChange('city')}
				  SelectProps={{
					MenuProps: {
					  className: classes.menu,
					},
				  }}
				  helperText="Please select city"
				  margin="normal"
				  fullWidth
				>
				  {cities.map(option => (
					<MenuItem key={option.name} value={option.name}>
					  {option.name} ({option.state})
					</MenuItem>
				  ))}
				</TextField>
				
		
				<TextField
					id="outlined-name"
					label="Zip"
					name="zip"
					className={classes.textField}
					value={this.state.zip}
					onChange={this.handleChange('zip')}
					//onChange={this.onFieldChange.bind(this)}
					margin="normal"
					variant="outlined"
					fullWidth
				/>
			
			</form>
				
          </DialogContent>
          
		  <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
			<Button onClick={this.handleReset} color="primary">
              Reset
            </Button>
            <Button onClick={this.handleSearch} color="primary" autoFocus>
              Search
            </Button>
          </DialogActions>
        
		</Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AlertDialog);