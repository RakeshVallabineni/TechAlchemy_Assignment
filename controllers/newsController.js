const fetch=require('node-fetch');

const API_URL=process.env.API_BASE_URL;
const API_KEY=process.env.API_KEY_VALUE;

exports.getNews=async (req,res,next)=>{
    try{
        const { Name }=req.query
        if(Name){
                const response=await fetch(`${API_URL}=${API_KEY}`);
                const data=await response.json();
                
                const releventNews=[];
                
                for( i of data.articles){
                    if(((i.title).toLowerCase()).includes(Name.toLowerCase())){
                        releventNews.push(i);
                    }
                }
                if(releventNews.length!=0){
                const desiredData=[];
                for(i of releventNews){
                    
                    desiredData.push({"headline":i.title,"link":i.url});
                }

                const headlines={};
                headlines["count"]=releventNews.length;
                headlines["data"]=desiredData;
                res.status(200).json({data:headlines});
            }
            else{
                res.status(401).json({message:"Please check the Spelling"});
            }
        }
        else{
            const response=await fetch(`${API_URL}=${API_KEY}`);
            const responseData=await response.json();
            let news={};
            let data=[];
            
            for( i of responseData.articles){
                data.push({"headlines":i.title,"link":i.url});
            }

            news["count"]=data.length;
            news["data"]=data;

            res.status(200).json({news:news});
        }

    }
    catch(err){
        if(err){
            res.status(500).json({message:"something went wrong"});
        }
    }
}

