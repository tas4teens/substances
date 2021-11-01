var a = 0;
var criteria = ['The substance is often taken in larger amounts, or over a longer period than it was intended.', 'There is a persistent desire or unsuccessful efforts to cut down or control use of the substance.', 'A great deal of time is spent in activities necessary to obtain the substance, use the substance or recover from its effects.', 'Cravings for the substance', 'Recurrent use of the substance resulting in a failure to fulfill major role obligations at work, school, or home', 'Continued use of the substance despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of its use', 'Important social, occupational, or recreational activities are given up or reduced because of the substance.', 'Recurrent use of a substance in situations when it is physically hazardous', 'Continued alcohol use despite having physical or psychological problems that is likely to be caused by alcohol', 'Tolerance, where 1) consuming the same amount of alcohol leads to diminshed happiness, or 2) when more alcohol is needed to achieve the same level of euphoria'];

function createCriteria(){
    for(var i = 0; i < criteria.length; i++){
        var d = document.createElement('div');
        d.className = 'indivCriteriaHolder';
        document.getElementById('criteriaHolder').appendChild(d);

        var b = document.createElement('div');
        b.className = 'bullet';
        document.getElementsByClassName('indivCriteriaHolder')[i].appendChild(b);

        var t = document.createElement('p');
        t.innerHTML = criteria[i];
        t.className = 'bulletText';
        document.getElementsByClassName('indivCriteriaHolder')[i].appendChild(t);
    }
}



var statistics = ['There are roughly 139.7 million people in the US, aged 12 and above, who have used alcohol in the past month.', 'Out f those 139.7 million people, 65.8 million are binge drinkers (around 47.1%)', 'Close to one in ten adolescents have drank alcohol, meaning they were drinking underage.', 'Nearly 15 million people ages 12 and above struggle with AUD.', '95,000 people die from alcohol-related causes annually. This makes alcohol the third leading cause of preventable death in the US. ', 'Worldwide, more than 3 million people die from alcohol related causes.', 'Alcohol misuse cost the US $249 billion in 2010.', 'According to a 2017 report, more than 1 in 10 people under the age of 17 live with a parent with AUD.', 'People who drink underage are 5 times more likely to develop AUD in the future compared to those who wait until they\'re legal.']


/*function createStatistics(){
    for(var i = 0; i < statistics.length; i++){
        var d = document.createElement('div');
        d.className = 'indivStatisticsHolder';
        document.getElementById('statisticsHolder').appendChild(d);

        var b = document.createElement('div');
        b.className = 'bullet';
        document.getElementsByClassName('indivStatisticsHolder')[i].appendChild(b);

        var t = document.createElement('p');
        t.innerHTML = statistics[i];
        t.className = 'bulletText';
        document.getElementsByClassName('indivStatisticsHolder')[i].appendChild(t);
    }
}*/

/*var navigation = ['Introduction', 'What is alcohol use disorder (AUD)?', 'DSM-5 diagnosis', 'How alcohol works + its effects', 'Statistics', 'Treatment'];

function scroll(){
    console.log('test');
    document.getElementsByClassName('subtitle')[navigation.indexOf(this.innerHTML)].scrollTop = document.getElementsByClassName('subtitle')[navigation.indexOf(this.innerHTML)].offsetTop;
    document.getElementById('contentDiv').style.width = '75%';
    document.getElementById('navigationDiv').style.width = '25%';
    document.getElementById('content').style.justifyContent = 'center';
}

for (var i = 0; i < document.getElementsByClassName('navigationLink').length; i++){
    document.getElementsByClassName('navigationLink')[i].addEventListener('click', scroll);
}*/

function showExample(){
    a++;
    if(a%2 === 1){
        document.getElementsByClassName('example')[0].style.display = 'block';
        document.getElementById('brightLink').innerHTML = 'Hide example';
    }else{
        document.getElementsByClassName('example')[0].style.display = 'none';
        document.getElementById('brightLink').innerHTML = 'What does this mean?';
    }
}

document.getElementById('brightLink').addEventListener('click', showExample);

createCriteria();
/*createStatistics();*/