/* 
 var title =Area_check(obj['country'])+' '+' '+flags.get(obj['countryCode']);

 var subtitle ='π'+City_ValidCheck(obj['city'])+'-'+'('+ ISP_ValidCheck(obj['org'])+')'+'π';

 */

 if ($response.statusCode != 200) {
   $done(null);
 }

 const emojis= ['π','π²','β οΈ','π','π΅','π¦','π','π₯','πΊ','π§','π¬','π¦','π','β³οΈ','π΄','π€','π½','π€','π', 'πΊ', 'π', 'πΆ', 'πΌ','π', 'π₯']
 var city0 = " ";
 var isp0 = " ";
 function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }

 /*function City_ValidCheck(para) {
   if(para) {
   return para
   } 
   else
   {
   return city0
   }
 }
 */
 function ISP_ValidCheck(para) {  
   if  (/[^a-zA-Z.]+$/.test(para))
      {
       return para
      }
   else {
      const word = encodeURI(para)
      const enTocnUrl = {url: "http://translate.google.cn/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q="+word}
    $task.fetch(enTocnUrl).then(response => { 
      if(/[a-zA-Z0-9]+/g.test(response.body)) {
        const rest = response.body.match(/[\u4e00-\u9fa5]+/g)
        if (rest == null){
       // $notify(para)
        return para
       }
       else {
        para = rest
       // $notify(para)
        return para
        }
      }
    })
   }
 }

 function Area_check(para) {
   if(para=="δΈ­εζ°ε½"){
   return "ε°ζΉΎη"
   } 
   else if(para=="ε°ζΉΎ"){
   return "ε°ζΉΎη"
   } 
   else
   {
   return para
   }
 }
 function City_ValidCheck(regionName) {
   if(regionName=="Kowloon"){
   return "δΉιΎ"
   } 
   else if(regionName=="Central and Western District"){
   return "δΈ­θ₯Ώι¨"
   }
   else if(regionName=="θΊη£η or ε°η£η"){
   return city0
   } 
   else if(regionName=="Moscow"){
   return "θ«ζ―η§"
   } 
   else if(regionName=="ζ°ε ε‘"){
   return city0
   } 
   else if(regionName=="Tuen Mun"){
   return "ε±―ι¨"
   }
   else if(regionName=="Palo Alto"){
   return "εΈζ΄ιΏε°ζ"
   } 
   else if(regionName=="Central"){
   return "δΈ­εΏ"
   }
   else 
   {
   return regionName
   }
 }
 function Org_ValidCheck(para) { 
   if  (/[^a-zA-Z.]+$/.test(para))
      {
       return para
      }
   else {
      const word = encodeURI(para)
      const enTocnUrl = {url: "http://translate.google.cn/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q="+word}
    $task.fetch(enTocnUrl).then(response => { 
      if(/[a-zA-Z0-9]+/g.test(response.body)) {
        const rest = response.body.match(/[\u4e00-\u9fa5a-zA-Z]+/)
        if (rest == null){
       // $notify(para)
        return para
       }
       else {
        para = rest
       // $notify(para)
        return para
        }
      }
    })
   }
 }

 var flags = new Map([[ "AC" , "π¦π¨" ] , [ "AF" , "π¦π«" ] , [ "AI" , "π¦π?" ] , [ "AL" , "π¦π±" ] , [ "AM" , "π¦π²" ] , [ "AQ" , "π¦πΆ" ] , [ "AR" , "π¦π·" ] , [ "AS" , "π¦πΈ" ] , [ "AT" , "π¦πΉ" ] , [ "AU" , "π¦πΊ" ] , [ "AW" , "π¦πΌ" ] , [ "AX" , "π¦π½" ] , [ "AZ" , "π¦πΏ" ] , [ "BB" , "π§π§" ] , [ "BD" , "π§π©" ] , [ "BE" , "π§πͺ" ] , [ "BF" , "π§π«" ] , [ "BG" , "π§π¬" ] , [ "BH" , "π§π­" ] , [ "BI" , "π§π?" ] , [ "BJ" , "π§π―" ] , [ "BM" , "π§π²" ] , [ "BN" , "π§π³" ] , [ "BO" , "π§π΄" ] , [ "BR" , "π§π·" ] , [ "BS" , "π§πΈ" ] , [ "BT" , "π§πΉ" ] , [ "BV" , "π§π»" ] , [ "BW" , "π§πΌ" ] , [ "BY" , "π§πΎ" ] , [ "BZ" , "π§πΏ" ] , [ "CA" , "π¨π¦" ] , [ "CF" , "π¨π«" ] , [ "CH" , "π¨π­" ] , [ "CK" , "π¨π°" ] , [ "CL" , "π¨π±" ] , [ "CM" , "π¨π²" ] , [ "CN" , "π¨π³" ] , [ "CO" , "π¨π΄" ] , [ "CP" , "π¨π΅" ] , [ "CR" , "π¨π·" ] , [ "CU" , "π¨πΊ" ] , [ "CV" , "π¨π»" ] , [ "CW" , "π¨πΌ" ] , [ "CX" , "π¨π½" ] , [ "CY" , "π¨πΎ" ] , [ "CZ" , "π¨πΏ" ] , [ "DE" , "π©πͺ" ] , [ "DG" , "π©π¬" ] , [ "DJ" , "π©π―" ] , [ "DK" , "π©π°" ] , [ "DM" , "π©π²" ] , [ "DO" , "π©π΄" ] , [ "DZ" , "π©πΏ" ] , [ "EA" , "πͺπ¦" ] , [ "EC" , "πͺπ¨" ] , [ "EE" , "πͺπͺ" ] , [ "EG" , "πͺπ¬" ] , [ "EH" , "πͺπ­" ] , [ "ER" , "πͺπ·" ] , [ "ES" , "πͺπΈ" ] , [ "ET" , "πͺπΉ" ] , [ "EU" , "πͺπΊ" ] , [ "FI" , "π«π?" ] , [ "FJ" , "π«π―" ] , [ "FK" , "π«π°" ] , [ "FM" , "π«π²" ] , [ "FO" , "π«π΄" ] , [ "FR" , "π«π·" ] , [ "GA" , "π¬π¦" ] , [ "GB" , "π¬π§" ] , [ "HK" , "π­π°" ] , [ "ID" , "π?π©" ] , [ "IE" , "π?πͺ" ] , [ "IL" , "π?π±" ] , [ "IM" , "π?π²" ] , [ "IN" , "π?π³" ] , [ "IS" , "π?πΈ" ] , [ "IT" , "π?πΉ" ] , [ "JP" , "π―π΅" ] , [ "KR" , "π°π·" ] , [ "MO" , "π²π΄" ] , [ "MX" , "π²π½" ] , [ "MY" , "π²πΎ" ] , [ "NL" , "π³π±" ] , [ "PH" , "π΅π­" ] , [ "RO" , "π·π΄" ] , [ "RS" , "π·πΈ" ] , [ "RU" , "π·πΊ" ] , [ "RW" , "π·πΌ" ] , [ "SA" , "πΈπ¦" ] , [ "SB" , "πΈπ§" ] , [ "SC" , "πΈπ¨" ] , [ "SD" , "πΈπ©" ] , [ "SE" , "πΈπͺ" ] , [ "SG" , "πΈπ¬" ] , [ "TH" , "πΉπ­" ] , [ "TN" , "πΉπ³" ] , [ "TO" , "πΉπ΄" ] , [ "TR" , "πΉπ·" ] , [ "TV" , "πΉπ»" ] , [ "TW" , "π¨π³" ] , [ "UA" , "πΊπ¦" ] , [ "UK" , "π¬π§" ] , [ "UM" , "πΊπ²" ] , [ "US" , "πΊπΈ" ] , [ "UY" , "πΊπΎ" ] , [ "UZ" , "πΊπΏ" ] , [ "VA" , "π»π¦" ] , [ "VE" , "π»πͺ" ] , [ "VG" , "π»π¬" ] , [ "VI" , "π»π?" ] , [ "VN" , "π»π³" ]])
 var body = $response.body;
 var obj = JSON.parse(body);
 var title =Area_check(obj['country'])+' '+''+City_ValidCheck(obj['regionName']);
var subtitle =flags.get(obj['countryCode'])+City_ValidCheck(obj['city'])+'π'+Org_ValidCheck(obj['org'])+'π'+obj['continent'];
var ip = obj['query'];
var description = 'ζε‘ε:'+obj['isp']+'\n'+'DNS:'+ obj['reverse'] +'\n'+'ε°εΊ:' +City_ValidCheck(obj['regionName'])+obj['district']+'\n' +'ζ΄²ι:'+obj['continent'] +'\n'+'IP:'+obj['query'] +'\n' +'ζη?‘:'+ obj['hosting'];
$done({title, subtitle, ip, description});