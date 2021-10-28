var criteria = ['Alcohol is taken in larger amounts, or over a longer period.', 'There have been unsuccessful efforts or a desire to cut down or control alcohol use.', 'A great deal of time is spent in activities relating to alcohol (such as obtaining alcohol, drinking, or coping with side effects)', 'Cravings for alcohol', 'Alcohol use affects performance at work, school, or home life.', 'Continued alcohol use despite having constant social or personal problems that are likely to be caused by alcohol', 'Important social, occupational, or recreational activities are given up or reduced because of alcohol use.', 'Alcohol use in situations when it is physically hazardous', 'Continued alcohol use despite having physical or psychological problems that is likely to be caused by alcohol', 'Tolerance, where 1) consuming the same amount of alcohol leads to diminshed happiness, or 2) when more alcohol is needed to achieve the same level of euphoria'];

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

createCriteria();