  function scroll_effect() {
    var element = document.getElementsByClassName('scroll-up');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 400; // 要素を表示するタイミング
    for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {
        element[i].classList.add('is-show');
      }
    }
  }
  window.addEventListener('scroll', scroll_effect);
async function getNews() {
    const response = await fetch(
      "news.json" 
          );
    const news = await response.json();
    console.log(news);
    return news;
  }
  async function InputNews(){
    news = await getNews();
    newslen = Object.keys(news).length;
    let newsfeed = document.getElementById('newsfeed');
    for (let i = 0; i < newslen; i++){
      let child = document.createElement('li')
      child.prepend(news[i].date +"　" + news[i].todo)
      newsfeed.append(child);
    }
  }
InputNews()
