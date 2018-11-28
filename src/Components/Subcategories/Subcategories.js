import React from 'react';
import ProfileList from '../ProfileList/ProfileList';






class Subcategorylist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    ProfileListhandlercaller =()=>{
        this.props.ProfileListhandler(this.props.node.id)
        // console.log("subcatId",this.props.node.id)
    }

render(){
return(
    <div className="grid" onClick = {this.ProfileListhandlercaller}>
    <div className="card card__one" >
       <figure className="card__img">
          <img src={this.props.node.subCatImg} width="340" height="280" />
       </figure>
       <div className="card__desc">
         {this.props.node.name}
       </div>
    </div>
 </div>
)}
}
class SubCategories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showProfileList:false,
            ProfileListdata:[]
        }
    }

    ProfileListhandler = (subcategoryid) =>{
        var id = this.props.currentCategoryid
       
        console.log("subcategoryid",  subcategoryid.id  )
        var API = 'http://127.0.0.1:8000/api/folks/category/'
        var API_id = API.concat(id) + '/'
        var API_id_subcate_id = API_id.concat(subcategoryid)
        // console.log("subcategoryid",  API_id_subcate_id  )
          
          fetch(API_id_subcate_id)
          .then(res => res.json())
          
          .then(json =>{
              this.setState({
                ProfileListdata: json,
                showProfileList : true
              })
              console.log("data from subcategory api",JSON.stringify(json))
        
          })
          .catch(err => console.error(this.props.url, err.toString()))
        this.setState({showProfileList:true})
      }

  
render(){
return(
   
<div>
{this.state.showProfileList ===false ? 
    <div className="cards">
    {this.props.SubCategories.map((node,i)=>
     <div key={i}>
     <Subcategorylist node = {node}
                      ProfileListhandler = {this.ProfileListhandler} />
     </div>
        )}
        </div>
        :
        <div>
          
            <ProfileList ProfileListdata = {this.state.ProfileListdata}/>
            
            
           
        </div>
        }

 
   
</div>
   
   
)}}
export default SubCategories;