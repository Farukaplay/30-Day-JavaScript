import countries_data from "./countries_data.js";

// let name = countries_data.map(country => {
    
//     let lang = country.languages.reduce((acc, currentValue) => {

//     })
    
//     return {
//         country: country.name,
//         counts: lang
//     }
// })

// console.log(name);

// let count = 0;
// let lang = countries_data.map(languages => {
//     let language = languages.languages
    
    
//     if(language.includes("English")){ //Dinamik Nasıl alabilirim
//         count++
//     }
    
//     return {
//         language: "English",
//         count: count
//     }
// })
// console.log(lang);

//internetten buludğum cevap
// let mostSpoken = Object.entries(countries_data.reduce((langs, obj) => { obj.languages.forEach(x => langs.push(x));
//    return langs;                                                                                                                                                                                                
// }, []).reduce((dict, lang) => {
//    dict[lang] = (dict[lang] || 0) +1;
//    return dict;
// }, {})).sort((a, b) => b[1]-a[1]);
// mostSpoken.forEach(x => console.log(x));
 
