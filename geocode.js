const request=require("request")
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoidGFubWlzaGFoMDciLCJhIjoiY2tudm40YW4wMG9jdTJ1a3Q1YXVzdHF4ZyJ9.8ASxAow-9_HC8s4eEexg6Q&limit=1"
    request({url:url,json:true},(error,{body})=>{
            if(error){
            //        return console.log("Unable to connect to the service,try again.");
           return callback("Unable to connect to the service,try again.",undefined)
            }
            else if(body.features.length==0){
                    // return console.log("Not a valid location");
                   return  callback("Not a valid location",undefined)
            }
            // const data=response.body.features[0]
                    const latitude=body.features[0].center[1];
                    const longitude=body.features[0].center[0];
                    const returndata={
                        latitude,
                        longitude
                    }
                    return callback(undefined,returndata)
                    console.log("latitude is "+latitude);
                    console.log("longitude is "+longitude);
    
    })
}
module.exports=geocode
