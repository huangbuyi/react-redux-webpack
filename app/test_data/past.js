import projectImage from '../images/3000particles.jpg'
import mushroomImage from '../images/mushroom.jpg'
import soulwireImage from '../images/soulwire.jpg'
import earthImage from '../images/earth-village.jpg'


var websiteAll = {
	133 :{
		id:"133",
		title: "StackOverflow",
		target:"http://www.stackoverflow.com",
		text: "不知道 StackOverflow 的一定不是程序员，不会用 StackOverflow 的一定不是好程序员。StackOverflow ，解决程序世界的各种疑难杂症",
		relative:["132","131","130", "129"]
	},
	132 :{
		id:"132",
		title: "Quora",
		target:"https://www.quora.com",
		text: "知乎的老前辈，以其说 Quora 是国外的知乎，不如说知乎是国内的 Quora 。知乎对 Quora 的定义：社会化问答网站，结合了 Twitter 的 follow 关系、维基式协作编辑、 Digg 的用户投票等模式，是将现有 Web 2.0 产品的分散功能进行重新组合重装的创新模式",
		relative:["130", "129"]
	},
	131 :{
		id:"131",
		title: "知乎",
		target:"https://www.zhihu.com",
		text: "知乎无疑是国内最好的知识平台，在越来越多用户涌入的同时，仍然保持着较高的内容质量，知乎上的前端相关专题也有非常多高质量的回答。官定：知乎是中文互联网最大的知识社交平台，拥有认真、专业和友善的独特氛围，连接各行各业的精英。用户分享着彼此的专业知识、经验和见解，为中文互联网源源不断地提供高质量的信息。",
		relative:["130", "129"]
	},
	130 :{
		id:"130",
		title: "SegmentFault",
		target:"https://segmentfault.com",
		text: "页面干净清爽，资源丰富。除了问答，写专栏和记笔记都很方便。如果不方便使用 StackOverflow，SegmentFault 是不错的替代选择 。官定：SegmentFault ( www.sf.gg ) 是中国领先的开发者社区。我们希望为中文开发者提供一个纯粹、高质的技术交流平台，与开发者一起学习、交流与成长，创造属于开发者的时代！",
		relative:["133", "132"]
	},
	129 :{
		id:"129",
		title: "V2EX",
		target:"https://www.v2ex.com",
		text: "官定：V2EX is a community of start-ups, designers, developers and creative people. V2EX 是创意工作者们的社区。这里目前汇聚了超过 110,000 名主要来自互联网行业、游戏行业和媒体行业的创意工作者。V2EX 希望能够成为创意工作者们的生活和事业的一部分。 ",
		relative:["133", "132"]
	},	
	128 :{
		id:"128",
		title: "AskReddit",
		target:"https://www.reddit.com/r/AskReddit",
		text: "Reddit拥有数千个活跃社区，在其问答板块的前端相关专题下，也有很多优质的回答。度娘：用户（也叫redditors）能够浏览并且可以提交因特网上内容的链接或发布自己的原创或有关用户提交文本的帖子。其他的用户可对发布的链接进行高分或低分的投票，得分突出的链接会被放到首页。另外，用户可对发布的链接进行评论以及回复其他评论者，这样就形成了一个在线社区。",
		relative:["133", "132"]
	},	
	127 :{
		id:"127",
		title: "开源中国-技术问答",
		target:"https://www.oschina.net/question",
		text: "北京奥运会竟然已经8年了。官定：开源中国 成立于2008年8月，是目前国内最大的开源技术社区，拥有超过200万会员，形成了由开源软件库、代码分享、资讯、协作翻译、讨论区和博客等几大频道内容，为IT开发者提供了一个发现、使用、并交流开源技术的平台。2013年，开源中国建立大型综合性的云开发平台-中国源，为中国广大开发者提供团队协作、源码托管、代码质量分析、代码评审、测试、代码演示平台等功能。",
		relative:["133", "132"]
	},	
	126 :{
		id:"126",
		title: "博客园-博问",
		target:"https://q.cnblogs.com/",
		text: "官定：博客园创立于2004年1月，是一个面向开发者的知识分享社区。自创建以来，博客园一直致力并专注于为开发者打造一个纯净的技术交流社区，推动并帮助开发者通过互联网分享知识，从而让更多开发者从中受益。博客园的使命是帮助开发者用代码改变世界。",
		relative:["133", "132"]
	},	
	125 :{
		id:"125",
		title: "CSDN-问答频道",
		target:"http://ask.csdn.net/",
		text: "官定：CSDN（隶属北京创新乐知信息技术有限公司）创立于1999年，是中国最大的IT社区和服务平台，为中国的软件开发者和IT从业者提供知识传播、职业发展、软件开发等全生命周期服务，满足他们在职业发展中学习及共享知识和信息、建立职业发展社交圈、通过软件开发实现技术商业化等刚性需求。拥有超过3000万注册会员（其中活跃会员800万）、50万注册企业及合作伙伴。",
		relative:["133", "132"]
	},	
}

var sourceAll = {
	985: {
		id: 985,
		title: "阮一峰-React技术栈系列教程",
		target: "http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html",
		text: "系列教程涵盖了React开发中的各项技术，教程简单易懂，容易上手，非常适合React新手学习入门。",
		relative: [984,983,982,981]
	},
	984: {
		id: 984,
		title: "极客网-React系列课程",
		target: "http://my.jikexueyuan.com/0NjVVgVjP/record/",
		text: "极客网梁杰老师的React系列课程，从React简介到项目实践，设计到了React开发的各个方面，适合喜欢看视频课程的新手入门。",
		relative: [984,983,982,981]
	},
	983: {
		id: 983,
		title: "React官方文档",
		target: "http://reactjs.cn/react/docs/getting-started.html",
		text: "官方文档讲解的最为深刻和细致，英语能力可以的话，至少应该看一遍。",
		relative: [984,983,982,981]
	},
	982: {
		id: 982,
		title: "Reactiflux Discord聊天室",
		target: "https://discordapp.com/channels/102860784329052160",
		text: "聊天室为React不同相关技术栈开设了不同房间，开发者可以在这里自由交流。",
		relative: [984,983,982,981]
	},
	981: {
		id: 981,
		title: "React中文社区",
		target: "http://react-china.org/",
		text: "中国的React开发者们在这里交流学习",
		relative: [984,983,982,981]
	},
	980: {
		id: 980,
		title: "深入理解React、Redux",
		target: "http://www.jianshu.com/p/0e42799be566",
		text: "详细阐述了React、Redux的独特性和两者结合的FP编程方式的优缺点。",
		relative: [984,983,982,981]
	},
	979: {
		id: 979,
		title: "React-router中文文档",
		target: "http://react-guide.github.io/react-router-cn/",
		text: "学技术，看文档最靠谱，有能力的有时间的可以看原文。",
		relative: [984,983,982,981]
	},
	978: {
		id: 978,
		title: "Redux 官方文档",
		target: "http://redux.js.org/",
		text: "官方文档阐述了 Redux 与 Flux 的区别和它所要解决的问题，不仅如此，还通过丰富的案例来讲解 Redux 的各种应用场景。",
		relative: [984,983,982,981]
	},
	977: {
		id: 977,
		title: "Flux",
		target: "https://github.com/facebook/flux",
		text: "React 本身只是 UI 层框架，如果搭建大型应用，还需要其它框架配合。Flux并不是一个完整框架，更像一个模式，来管理应用中的数据流动。",
		relative: [984,983,982,981]
	},
	976: {
		id: 976,
		title: "React中文文档",
		target: "http://www.css88.com/react/index.html",
		text: "中文文档，阅读效率高，上手快。",
		relative: [984,983,982,981]
	},
	975: {
		id: 975,
		title: "Jest，Facebook 官配 React 测试工具",
		target: "http://facebook.github.io/jest/",
		text: "官方标语：Painless JavaScript Testing。",
		relative: [984,983,982,981]
	},
	974: {
		id: 974,
		title: "Redux 121min官配课程",
		target: "https://egghead.io/courses/getting-started-with-redux",
		text: "还配有课程笔记以及进阶课程。",
		relative: [984,983,982,981]
	}
}

var circleAll = {
	985: {
		id: 72,
		title: "阮一峰-React技术栈系列教程",
		target: "http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html",
		text: "系列教程涵盖了React开发中的各项技术，教程简单易懂，容易上手，非常适合React新手学习入门。",
		relative: [984,983,982,981]
	},

}

var special = {
	id: 12,
	title: "React技术栈",
	type: "网站",
	text: "专题囊括了 React 搭建大型网页应用的相关技术，但不含 React native 的相关内容。",
	image: "",
	alt: "",
	links: []
}

var pastProjectList = {
	title: "项目",
	cate: "project",
	specials: [
		{id:"62",title:"30000 Particles", date:"2016-12-17"},
		{id:"61",title:"4000 Particles from CodePen", date:"2016-12-12"},
		{id:"60",title:"5000 Particles from CodePen", date:"2016-12-08"},
		{id:"59",title:"6000 Particles from CodePen", date:"2016-12-03"},
		{id:"58",title:"7000 Particles from CodePen", date:"2016-12-01"}
	]
}

var projects = {
	62: {
		id: 62,
		title: "30000 Particles",
		target: "http://www.baidu.com",
		image: projectImage,
		text: "heihei this is text this is text this is text this is text this is text ",
		alt: "30000 Particles from CodePen",
		date: "2016-12-17",
		period: 12
	},
	61: {
		id: 61,
		title: "自动生成的图形蘑菇",
		target: "http://www.zhihu.com",
		image: mushroomImage,
		text: "heihei this is mushroom this is text this is text this is text this is text  this is mushroom  this is mushroom",
		alt: "30000 Particles from CodePen",
		date: "2016-12-12",
		period: 11
	},
	60: {
		id: 60,
		title: "艺术与前端",
		target: "http://www.jd.com",
		image: soulwireImage,
		text: "来自于英国的，blablabla heihei this is text this is text this is text this is text this is text ",
		alt: "30000 Particles from CodePen",
		date: "2016-12-07",
		period: 10
	}
}


var websites = {
	80: {
		id: 80,
		cateName: "网站",
		cate: "website",
		title: "技术问答社区",
		image: earthImage,
		items: [ websiteAll["133"],websiteAll["132"],websiteAll["131"],websiteAll["130"],websiteAll["129"],websiteAll["128"],websiteAll["127"],websiteAll["126"],websiteAll["125"] ],
		date: "2016-12-17",
		period: 12
	},
	79: {
		id: 79,
		cateName: "网站",
		cate: "website",
		title: "代码托管平台",
		image: earthImage,
		items: [ websiteAll["133"],websiteAll["132"],websiteAll["131"],websiteAll["130"],websiteAll["129"],websiteAll["128"] ],
		date: "2016-12-12",
		period: 11
	},
	78: {
		id: 78,
		cateName: "网站",
		cate: "website",
		title: "机构综合平台",
		image: earthImage,
		items: [ websiteAll["133"],websiteAll["132"],websiteAll["131"],websiteAll["130"],websiteAll["129"],websiteAll["128"] ],
		date: "2016-12-07",
		period: 10
	},
}

var periodList = {
	period: 12,
	date: "2016-12-16",
	list: [
		{special:"项目专题", title:"30000 particles from CodePen"},
		{special:"网站专题", title:"技术问答社区"},
		{special:"资源专题", title:"jQuery系列中级教程"},
		{special:"圈内专题", title:"高产博主"},
		{special:"图书专题", title:"JavaScript设计模式"},
		{special:"健康专题", title:"关注颈椎健康"},
	]
}
var periods = {
	id: 20,
	period: 12,
	date: "2016-12-16",
	topics: [10],
	specials: [1,2,3,4,5,6,7,8,9]

}
var periods = {
	12: {
		periodList: periodList,
		pastProjectList: pastProjectList,
		project: projects[62],
		website: websites[80]
	},
	11: {
		periodList: periodList,
		pastProjectList: pastProjectList,
		project: projects[61],
		website: websites[79]
	}
}


export { periods, pastProjectList, projects, websites, websiteAll }