import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiTick } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";

function App() {

 const data = [{
  "sub":"FREE",
  "price": "$0/month",
  "users" :"Single User",
  "gb":"50GB Storages",
  "public_projects":"Unlimited Public Projects",
  "access": "Community Access",
  "private_projects": "Unlimated Private Projects",
  "support": "Dedicated Phone Support",
  "domain": "Free Subdomain",
  "reports": "Monthly Status Reports",
 },
{
  "sub":"PLUS",
  "price": "$9/month",
  "users" :"5 User",
  "gb":"50GB Storages",
  "public_projects":"Unlimited Public Projects",
  "access": "Community Access",
  "private_projects": "Unlimated Private Projects",
  "support": "Dedicated Phone Support",
  "domain": "Free Subdomain",
  "reports": "Monthly Status Reports",
},
{
  "sub":"PRO",
  "price": "$49/month",
  "users" :"Unlimited User",
  "gb":"50GB Storages",
  "public_projects":"Unlimited Public Projects",
  "access": "Community Access",
  "private_projects": "Unlimated Private Projects",
  "support": "Dedicated Phone Support",
  "domain": "Free Subdomain",
  "reports": "Monthly Status Reports",
}
]
 
  return (
    <section className='container'>
     { data.map((item,index)=>(
      <section className='induvial-box' key={index}>
         <p style={{opacity:"0.5"}}><b>{item.sub}</b></p>
         <h3>{item.price}</h3>
         <hr/>

          <section className='ul'>
          <span> <TiTick/>{item.users}</span>
         <br/>

         <span> <TiTick/> {item.gb}</span>
         <br/>

         <span><TiTick/>{item.public_projects}</span>

         <br/>

         <span><TiTick/>{item.access}</span>
         <br/>
         <span style={{ opacity: index === 0 && 0.5 }} > {index === 0 ? <GrFormClose/> : <TiTick/> }{item.private_projects}</span>

       <br/>

       <span  style={{ opacity: index === 0 && 0.5 }} > {index === 0 ? <GrFormClose/> : <TiTick/> }{item.support}</span>

        <br/>

        <span  style={{ opacity: index === 0 && 0.5 }} > {index === 0 ? <GrFormClose/> : <TiTick/> } {item.domain}</span>

        <br/>

        <span  style={{ opacity: index === 0 || index === 1 ? 0.5 : 1 }} > {index === 0 || index === 1 ? <GrFormClose/> : <TiTick/> }  {item.reports}</span>
         </section>
         <Button variant="primary" ><b>Button</b></Button>
      </section>
          
      ))
     }
  </section>
  );
}

export default App;
