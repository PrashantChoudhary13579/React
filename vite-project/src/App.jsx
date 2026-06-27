import Avatar from "./component/Avatar";
import MyApp from "./component/Button";
import AboutPage from "./component/AboutPage";



const user = {
  name: 'Helen kaller',
  imageUrl : 'https://imgs.search.brave.com/1IbkCYT0RWrvUSXbZvR837pZkpbXLpSy5xwlMxl70T0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oZWxl/bmtlbGxlcmZvdW5k/YXRpb24ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzAz/L2hlbGVucGFnZS1s/ZWZ0LmpwZw',
  imageSize : 90,
};
export default function App() {
  return (
    <div>
      <div>
        <h1>  Counter that updates automatically</h1>
        <MyApp/>
        <br></br>
        <br></br>
        <MyApp/>
      </div>


      <div>
        <h1>My first component. Is it okk ? </h1>
        <Avatar />
      </div>
      <div>
        <h1>Want to watch movie ?</h1>
        <MyApp /> 
      </div>
      <div>
        <AboutPage/>
      </div>
      <div>
        <h1>{user.name}</h1>
        <img 
          className= "writer"
          src={user.imageUrl} 
          alt={'Photo of '+ user.name}
          style = {{
            width: user.imageUrl, 
            height: user.imageUrl,
          }} />
          
      </div>
    </div>
  );
}




// this is the core javascript

// the function name should always be started with capital letter bcz the html code has small letter..
