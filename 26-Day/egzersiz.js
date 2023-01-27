const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

let countriesToUp = countries.map(country => country.toUpperCase())

let counterCountry = document.querySelector("header h4"),
    container = document.querySelector("main .container"),
    buttonStart = document.querySelector("#button-start"),
    buttonAnyWord = document.querySelector("#button-any-word"),
    buttonSort = document.querySelector("#button-sort"),
    inputValue = document.querySelector("input"),
    filter = document.querySelector("#filter")


counterCountry.innerHTML += ` <span> ${countries.length}</span>`

let sortCountries = countries.sort()

let list = function countryList(){
    
    
    for(let count of sortCountries){
        
        let country = document.createElement("div")
        country.innerHTML = count.toUpperCase()
        country.classList.add("show")
        container.append(country)
    }
    
}
buttonSort.addEventListener("click", () => {
    sortCountries = countries.reverse()
    container.innerHTML = ""
    list()
})

list()


let value = ""
let counter = 0
buttonStart.addEventListener("click", () => {
    
    inputValue.addEventListener("input", () => {
        value = inputValue.value.toUpperCase()
        container.innerHTML = ""
        
        if(value.length > 0){
            for(let count of countriesToUp){
                if(count.startsWith(value)){
                    
                    let country = document.createElement("div")
                    country.innerHTML = count.toUpperCase()
                    country.classList.add("show")
                    container.append(country) 
                    counter++
                }
            }
            filter.innerHTML = `Countries start with <span>${value}</span> are <span>${counter}</span>`
            
        }else{
            list()
            filter.innerHTML = ""
        }
        counter = 0
    })
})

buttonAnyWord.addEventListener("click", () => {
    
    inputValue.addEventListener("input", () => {
        value = inputValue.value.toUpperCase()
        container.innerHTML = ""
        
        if(value.length > 0){
            for(let count of countriesToUp){
                if(count.includes(value)){
                    
                    let country = document.createElement("div")
                    country.innerHTML = count.toUpperCase()
                    country.classList.add("show")
                    container.append(country) 
                    counter++
                }
            }
            filter.innerHTML = `Countries containing <span>${value}</span> are <span>${counter}</span>`
            
        }else{
            list()
            filter.innerHTML = ""
        }
        counter = 0
    })
})