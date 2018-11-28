import React from 'react'
import '../css/MyFolks.css';
import ProfileDetail from '../ProfileDetail/ProfileDetail';
class ProfileList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          showProfileDetail:false
        }
    }

    openProfileDetailhandler =()=>{
      this.setState({showProfileDetail:true})
    }





render(){

return(
  <div>
   {this.state.showProfileDetail === false ?
   <div className="profilelistwrapper">
      {this.props.ProfileListdata.map((profilelist,i)=>
      <div className="cardprofile" key ={i}>
         <div className="thumbnailpic"><img className="left" src={profilelist.profilepic}/></div>
         <div className="right">
            <h1>{profilelist.designation}</h1>
            <div className="author">
               <h2>{profilelist.name}</h2>
            </div>
            <div className="separator"></div>
            <p>{profilelist.address}</p>
           
         </div>
         <ul>
            <li><i className="fa fa-eye fa-2x"></i></li>
            <li><i className="fa fa-heart-o fa-2x"></i></li>
            <li><i className="fa fa-envelope-o fa-2x"></i></li>
            <li><i className="fa fa-share-alt fa-2x"></i></li>
         </ul>
      </div>
      )
      } 
   </div>
   :
   <ProfileDetail />
   }
</div>
)

}


}
export default ProfileList