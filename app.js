const weather=require("./weather")
const geocode=require("./geocode")
var latitude;
var longitude;
const location=process.argv[2]
if(!location){
        return console.log("Plaese enter a location.");
}
console.log(location);
geocode(location,(e,{latitude,longitude})=>{
        if(e){
                console.log(e);
                // }
        }
        else{
                // console.log(r);
                // latitude=r.latitude
                // longitude=r.longitude
                weather(latitude,longitude,(e,{temperature,feel})=>{
                        if(e){
                                console.log(e);
                                }
                                else{
                                        // console.log(r);
                                        console.log("Temprature is: "+temperature);
                                        console.log(("Feels like: "+feel));
                                        }
                                })
        }
})

