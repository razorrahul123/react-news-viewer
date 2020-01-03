const initState = {
  posts: [
    {
      id: "1",
      title: "I have learned all my cricket from TV: Jasprit Bumrah ",
      moreLink:
        "https://www.hindustantimes.com/cricket/jasprit-bumrah-the-master-of-his-game/story-28muc33kwkAs9JU6KUzn8O.html",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578067174606_910.jpg",
      body:
        'Team India fast bowler Jasprit Bumrah has said that he has learned all his cricket from TV. "Even now, I look at videos and I listen to feedback, and then I like to prepare on my own, the way I want to. I try to do the analysis myself because on the cricket ground, I will be alone," he added.',
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "2",
      title:
        "Shami-Bumrah one of world's most exciting combinations: Gillespie",
      moreLink:
        "https://www.timesnownews.com/sports/cricket/article/jasprit-bumrah-mohammed-shami-combination-one-of-the-most-exciting-in-the-world-jason-gillespie/",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578059659474_537.jpg",
      body:
        'Comparing the pace attacks of India and Australia, Jason Gillespie said, "[What] I can say is that [Jasprit] Bumrah and [Mohammad] Shami is one of the most exciting bowling combinations in the world." "I particularly enjoy watching Australia and India\'s pace attacks. " Gillespie said.',
      like: 0,
      dislike: 0,
      isBookMark: true
    },
    {
      id: "3",
      title: "I'm meaner than before: Zlatan on return to AC Milan",
      moreLink: "",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578053779119_80.jpg",
      body:
        'Speaking about rejoining AC Milan after seven years for a six-month stint, Swede striker Zlatan Ibrahimovic said, "I\'m meaner than before." "The last time I left AC Milan, it was without my approval but the situation was what it was... [The] important thing is that I am here now," Zlatan said about his return.',
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "4",
      title:
        "Apple shares rise to new record, cross $300 for the first time ever",
      moreLink:
        "https://www.bloombergquint.com/markets/apple-tops-300-for-first-time-as-shares-extend-record-high",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578021519944_45.jpg",
      body:
        "Shares of technology giant Apple reached a new record high, rising 2.3% to close at a record $300.35 apiece. The Nasdaq-listed iPhone maker crossed the $300-mark for the first time on a split-adjusted basis, Bloomberg noted. during this same period last year for the first time in almost two decades.",
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "5",
      title:
        "Your art will endure: Musk on sci-fi visual artist Syd Mead's death",
      moreLink: "https://twitter.com/elonmusk/status/1211790863900258305",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2019/12_dec/31_tue/img_1577761205660_253.jpg",
      body:
        "Tesla and SpaceX founder and CEO Elon Musk took to Twitter to condole the death of sci-fi visual artist Sydney Jay Mead, or 'Syd Mead'. The industrial designer is best known for his concept art for sci-fi movies Blade Runner, Tron, Star Trek: The Motion Picture and Mission Impossible 3, among others. Mead died aged 86 after battling lymphoma.",
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "6",
      title: "Mozilla Firefox to let all users delete their collected data",
      moreLink:
        "https://thenextweb.com/privacy/2020/01/03/firefox-will-now-let-you-delete-your-collected-data/",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578045754622_16.jpg",
      body:
        "Mozilla has announced it will let all Firefox users delete their data collected by the company in the browser's next version, releasing on January 7. Mozilla expanded the change worldwide after complying with the new US California Consumer Privacy Act which lets residents know what personal data tech companies collect, request its deletion and stop them from selling the data.",
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "7",
      title: "Apple signs new deal with its former graphics chip designer ",
      moreLink:
        "https://www.livemint.com/companies/news/apple-strikes-new-deal-with-uk-chipmaker-it-sidelined-in-2017-11577935407183.html",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/2_thu/img_1577960541285_362.jpg",
      body:
        "UK-based chipmaker Imagination Technologies Group, which designed graphics chips for Apple until 2017, has struck a multi-year deal with the tech firm. Imagination used to make Graphics Processing Units (GPU) for iPhones and iPads until Apple decided to make its own GPUs starting with iPhone X.",
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "8",
      title: "Xiaomi to invest $7 billion towards 5G, AI over next 5 years",
      moreLink:
        "https://www.reuters.com/article/us-china-xiaomi-investment/xiaomi-to-invest-7-billion-in-5g-ai-and-iot-over-next-five-years-idUSKBN1Z10DY",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/2_thu/img_1577973968461_648.jpg",
      body:
        "Xiaomi's CEO Lei Jun has announced that the smartphone maker will invest more than $7 billion over the next five years towards enhancing its 5G, AI and IoT capabilities. Xiaomi plans to roll out more than 10 5G phone models in 2020, the company had said in 2019. The planned investment builds on Xiaomi's $1.4 billion \"All in AIoT\" strategy.",
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "9",
      title:
        "Google chased bigger profits, ignored human rights issues: Former exec",
      moreLink:
        "https://techcrunch.com/2020/01/02/ex-google-policy-chief-dumps-on-the-tech-giant-for-dodging-human-rights/",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578026386869_734.jpg",
      body:
        "Ross LaJeunesse, Google's former International Relations Head, has alleged that while the company leadership made plans for a censored Chinese search engine, they ignored his call for a company-wide Human Rights program. He said the company soon replaced him with another colleague to oversee policy issues for 'Project Dragonfly'.",
      like: 0,
      dislike: 0,
      isBookMark: false
    },
    {
      id: "10",
      title:
        "Govt approved 2,636 new charging stations in 62 cities: Javadekar",
      moreLink:
        "https://yourstory.com/2020/01/govt-approves-charging-stations-electric-vehicles-prakash-javadekar?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      imgSrc:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/01_jan/3_fri/img_1578063812800_180.jpg",
      body:
        "Union Minister Prakash Javadekar said the government has given its nod for setting up of 2,636 electric vehicle charging stations in 62 cities across 24 states and union territories under the FAME India scheme. Out of 2,636 charging stations, 1,633 will be fast charging stations.",
      like: 0,
      dislike: 0,
      isBookMark: false
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    // console.log(action);
    case "DELETE_POST": {
      let newPosts = state.posts.filter(post => {
        return post.id !== action.id;
      });
      return {
        ...state,
        posts: newPosts
      };
    }
    case "LIKE_POST": {
      console.log(action);
      let likesCount = state.posts.map(post => {
        if (action.id === post.id) {
          post.like = post.like + 1;
        }
        return post;
      });
      return {
        ...state,
        posts: likesCount
      };
    }
    case "DISLIKE_POST": {
      let dislikesCount = state.posts.map(post => {
        if (action.id === post.id) {
          post.dislike = post.dislike + 1;
        }
        return post;
      });
      return {
        ...state,
        posts: dislikesCount
      };
    }
    case "BOOKMARK_TOGGLE": {
      console.log("book", action);
      let bookMarks = state.posts.map(post =>
        post.id === action.id ? { ...post, isBookMark: !post.isBookMark } : post
      );
      return {
        ...state,
        posts: bookMarks
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
