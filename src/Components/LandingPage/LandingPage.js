import React from 'react';
import '../css/LandingPage.css';
import Categories from '../Categories/Categories';
import SubCategories from '../Subcategories/Subcategories';



export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories:[],
      SubCategories:[],
      showCategory:true,
      currentCategoryid : ""
      
    }

  }
  fetchdata = () =>{
    fetch('http://127.0.0.1:8000/api/folks/category/')
    .then(res => res.json())
    
    .then(json =>{
        this.setState({
            Categories: json
        })
        console.log("data from api",JSON.stringify(json))

    })
    .catch(err => console.error(this.props.url, err.toString()))
}



componentDidMount(){
   
  this.fetchdata()

}

openSubCatHandler=(categoryid)=>{
      this.setState({currentCategoryid:categoryid})
      // console.log("categoryid ki value is",JSON.stringify(categoryid))
     
      var API = 'http://127.0.0.1:8000/api/folks/category/'
      var API_id = API.concat(categoryid)
        // console.log("api",API_id)
        fetch(API_id)
        .then(res => res.json())
        
        .then(json =>{
            this.setState({
              SubCategories: json,
              showCategory : false
              
            })
            console.log("data from subcategory api",JSON.stringify(json))
            console.log("sub ki value: ",this.state.SubCategories)
            // debugger;
      
        })
        .catch(err => console.error(this.props.url, err.toString()))
      
      }




    render() {


      return (
        <div>
        <div className="toolbar">
           <div className="logo-title-wrapper">
              <img className ="logo" src={require('../../images/logo.svg') } alt="Nothing" />
              <p1 className="title">MyFolks</p1>
           </div>
           <div className="search-container">
              <input type="text" id="search-bar" placeholder="Search your folks here today..."/>
              <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="Nothing"/></a>
           </div>
      <div className="dropdown"> <span className="location">Location</span><select name="cars">
    <option value="volvo">Noida</option>
    <option value="saab">New Delhi</option>
    <option value="fiat">Bengluru</option>
    <option value="audi">Pune</option>
  </select></div>     
 


        </div>

       {/* this.state.categories=json data from api */}
        
       {this.state.showCategory === true ?
        <div className="cards">
        {this.state.Categories.map((node,i)=>
         <div key={i} className="grid">
           
          <Categories openSubCatHandler ={this.openSubCatHandler}
                      node =  {node}
                     
                      SubCategories = {this.state.SubCategories}/>
          </div>
          
          )}
        </div>: <SubCategories currentCategoryid = {this.state.currentCategoryid} SubCategories={this.state.SubCategories}/>}
         
         
         
        

        
         </div>
        
         
         
      )}}
        
          
         
          
         

  

 
