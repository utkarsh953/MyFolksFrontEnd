import React from 'react';
import SubCategories from '../Subcategories/Subcategories';


class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            showSubCategory:false,
            
        }
        
    }
    openSubCatHandlerCaller = () =>{
        var id = this.props.node.id
        console.log("yha value id ki h : ",id)
        this.props.openSubCatHandler(id)
        
    }



render(){

return(
   <div>
       
  
<div className="card card__one" onClick={this.openSubCatHandlerCaller}>
<figure className="card__img">
   <img src={this.props.node.catImg} width="340" height="280" />
</figure>
<div className="card__desc" > 
 {this.props.node.name}
</div>
</div>


   </div>


)}}
export default Categories;


