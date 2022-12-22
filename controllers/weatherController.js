const fetch=require('node-fetch');

const WEATHER_API_URL=process.env.WEATHER_API_BASE_URL;
const WEATHER_API_KEY=process.env.WEATHER_API_KEY_VALUE;

exports.getWeather=async (req,res,next)=>{
    try{
        const city_name=req.query.city_name;
        
        let getWeather=await fetch(`${WEATHER_API_URL}=${city_name}&appid=${WEATHER_API_KEY}`);
        getWeather=await getWeather.json();
    
        if(getWeather.cnt!=undefined){
        
            let data=[];
            for(i of getWeather.list){
                data.push({"date":i.dt_txt.split(" ")[0].split("-").reverse().join("-"),"main":i.weather[0].main,"temp":i.main.temp});
                    
            }
            data = data.filter((thing, index, self) =>
                    index === self.findIndex((t) => (
                    t.date === thing.date 
                    ))
                )
            let report={}
            report["count"]=data.length;
            report["unit"]="metric";
            report["location"]=city_name;
            report["data"]=data;
    
            res.status(200).json({report:report});
        }
        else{
            res.status(401).json({message:"Please check the name of the city "});
        }
        
    }
    catch(err){
        if(err){
            res.status(500).json({message:"Something went wrong"});
        }
    }
}

