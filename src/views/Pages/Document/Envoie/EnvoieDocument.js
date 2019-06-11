import * as React from 'react';
import { Button, Card, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import EnvoieForm from './EnvoieForm';




class EnvoieDocument extends React.Component {

  constructor(props) {
    super(props);
    this.categories = []

    this.state = {
        NbrCom: 0 , 
        employeeValue : '',
        employeesHtml : [] ,
        
    };

    this.add = this.add.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.submitAll = this.submitAll.bind(this)
    this.child = []
    this.mainChild = React.createRef() ; 
}


componentDidMount(){
  //fetch data from server
  let employes = [] ;
  employes.push(<option key={8}>employee Test</option>)
  employes.push(<option key={9}>employee Test1</option>)
        
  //fetch from server 
  
  this.categories.push(<option key={88}>Categorie</option>)
  this.categories.push(<option key={49}>Categorie1</option>)
        
        this.setState(( ) => {
        
          return {
          employeesHtml : employes , 
          categoriesHtml : this.categories
        }});
      
  
        
 
  
  


}



add = () => {
  this.child.push( React.createRef() ) ;
  this.setState(prevState => {
     return {NbrCom: prevState.NbrCom + 1}
  })

}

remove = () => {
  
  if(this.child.length > 0 ){
    this.child.pop()
    
  }

  
  if(this.state.NbrCom > 0 ){
    this.setState(prevState => {
         return {
         NbrCom: prevState.NbrCom - 1  , 
        }
    })

  }


  
}


handleChangeValue = (e) => {

const value = e.target.value

  this.setState(() => ({
    employeeValue: value
  }));

};

submitAll(){
  this.mainChild.current.onSubmit();
  if(this.child.length > 0){
    const counter = this.child.length  ;
    for(let i = 0 ; i < counter ; i++) {
      this.child[i].current.onSubmit();
    }

  }

}

render() {


  var envoieForm = ''  ; 
  let num = this.state.NbrCom ; 
  if(num > 0){
    for(let i =0 ; i<num ; i++){
      let htmlElement =  (<div key={"div"+i}>
        <EnvoieForm
         display="none"
         employeeValue={this.state.employeeValue} 
         employees={this.state.employeesHtml} 
         key={"envoie"+i} 
         id={i} 
         categories={this.categories}
         ref={this.child[i]}
         />
        <hr/>
        </div> ); 
      envoieForm = [...envoieForm , htmlElement]
    }
  }

  return (
      <div className="animated fadeIn">
           <Card>
            <CardHeader>
                    <i className="fa fa-folder-plus"></i><strong>Envoie Document</strong>  
                    <Button color="success" className="float-right" onClick={this.add}>Autre Document</Button>
                    <Button color="danger" className="float-right mr-2" onClick={this.remove}>Supprimer Document</Button>
                </CardHeader>
          </Card>
          <CardBody >
            {envoieForm}
            <EnvoieForm ref={this.mainChild} 
            categories={this.state.categoriesHtml} 
            onChangeValue={(e) => {this.handleChangeValue(e) }} employees={this.state.employeesHtml}
            parent={true}
            />           
          
          </CardBody>
          <FormGroup>
          <Button color="primary"  className="mr-1" onClick={this.submitAll} >Envoyer</Button>
          </FormGroup>
      </div>


  )
}


}


export default EnvoieDocument ; 