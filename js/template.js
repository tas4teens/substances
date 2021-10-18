var a = 0;

function hide(){
    document.getElementById('emergencyHeader').style.display = 'none';
}

function hideMobile(){
    document.getElementById('emergencyMobileHeader').style.display = 'none';
}

function showMoreStats(){
    document.getElementById('entireStatHolder2').style.display = 'block';
    document.getElementById('entireStatHolder2').style.display = 'flex';
    document.getElementById('entireStatHolder2').scrollIntoView();
    document.getElementById('seeMoreStats').innerHTML = ""
    this.removeEventListener('click', showMoreStats);

    var link = document.createElement('a');
    link.id = 'addedLink';
    var insideLink = document.createTextNode('Want to see even more stats? Check out the Statistics page.');
    link.setAttribute('href', '/stats');
    link.setAttribute('target', '_blank');
    link.appendChild(insideLink);
    document.getElementById('seeMoreStats').appendChild(link);
}

function showMenu(){
    a++;
    if(a%2 === 1){
        document.getElementById('mobileNavigation').style.display = 'block';
        document.getElementById('header').style.borderBottom = '2px solid white';
    }else{
        document.getElementById('mobileNavigation').style.display = 'none';
    }
}

function scrollBackToTop(){
    document.getElementById('header').scrollIntoView();
    document.getElementById('mobileHeader').scrollIntoView();
}

document.getElementById('close').addEventListener('click', hide);
document.getElementById('closeMobile').addEventListener('click', hideMobile);
document.getElementById('seeMoreStats').addEventListener('click', showMoreStats);
document.getElementById('menu').addEventListener('click', showMenu);
document.getElementById('backToTop').addEventListener('click', scrollBackToTop);