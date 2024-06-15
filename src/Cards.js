

export default function Cards(props){
    console.log(props)
     return(
        <div className="card--container">
            <img className = "card--details--image"src= {`./images/${props.img}`}/>
            <div className=""card--details>
                <div className="card--details--location">
                    <img  src="./images/LocationLogo.png"/>
                    <p>{props.country.toUpperCase()}</p>
                    <a href={props.Google_link}>View on Google Maps</a>
                </div>
                <div className="card--details--name">
                    <h1>{props.LocationName}</h1>
                </div>
                <div className="card--details--dates">
                    <p>{props.StartDate} - {props.EndDate}</p>
                </div>
                <div className="card--details--information">
                    <p>{props.Information}</p>
                </div>
            </div>
        </div>
     )
}