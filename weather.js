const request=require("request")
const weather=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=69705b46bb9a73c51157142d02ae5cb6&query="+latitude+","+longitude+"&units=m"
    request({url:url,json:true},(error,{body})=>{
        if(error){
            return callback("Unable to connect please try again.",undefined)
        }
        else if(body.error){
                return callback("unable to find location",undefined)
        }
        else{
            const reference=body.current;
            const temperature=reference.temperature
            const feel=reference.feelslike
            const data={
                temperature,
                feel
            }
            return callback(undefined,data)
                console.log("It is "+reference.temperature+" outside.");
                console.log("It feelslike "+reference.feelslike+".");
        }
    })
}
module.exports=weather