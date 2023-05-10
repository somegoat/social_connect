//import { Client, GatewayIntentBits, Guild } from "discord.js";
import {TOKEN, GUILD_ID} from "./config";
import axios from "axios";

async function switch_social() {

  var wall_type = document.getElementById("soc_name").value;
  if (wall_type == "w_dis"){
    window.location.href="https://discord.com/oauth2/authorize?response_type=token&client_id=1105058307657441351&state=15773059ghq9183habn&scope=identify";
    
  }
  else if (wall_type == "w_twi"){
    localStorage.setItem("test", "sumimasen");
    console.log("Twitter waiting");
  }
  else if (wall_type == "w_se"){
    var c = localStorage.getItem("test");
    console.log(c);
  }
  else {
    
    console.log("Social Unidentified");
  }
}
window.switch_social = switch_social;


async function load_home() {
  var url = window.location.toString();
  var queryString = "";
  var access_token = "";
  if (url.length > 25){
    queryString = url.substring(url.indexOf('#') + 1);
    access_token = queryString.substring(31,61);
  }
  
  if (access_token.length > 2){
    const url2 = 'https://discord.com/api/v10/oauth2/@me';
    const response = await fetch(url2, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.user.id);
      var  isMember = false;
      try {
        //to add data in the server
        
        const response = await axios.get("https://discord.com/developers/docs/resources/guilds/".concat().concat("/members/").concat(), {
          data: null,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
      console.log(isMember);
    } else {
      throw new Error(`Error fetching user data: [${response.status}] ${response.statusText}`);
    }
  }
}
window.load_home = load_home;