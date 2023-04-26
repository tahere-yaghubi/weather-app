import { weatherData } from "../../adapters/weatherData.types";


export type weatherState ={
weatherData : weatherData;
isError:boolean
} 





const initialState:weatherState ={
weatherData:{
weather :{},
main:{},
wind:{},
sys:{},
name: ""
},
isError:false
}





const weatherSlice = {
name : "",
initialState,
reducer :{},
extraReducer : (builder)=>{
builder,

}
}