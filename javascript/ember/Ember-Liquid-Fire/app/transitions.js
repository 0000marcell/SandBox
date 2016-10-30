export default function(){
	this.transition(  
			 this.onInitialRender('index'),
			 this.use('crossFade', {duration: 1500})
			);
	this.transition(
			this.fromRoute('index'),
			this.toRoute('posts'),
			this.use('toLeft'),
			this.reverse('toRight')
	);
	this.transition(
		this.fromRoute('posts.index'),
		this.toRoute('posts.new'),
		this.use('crossFade'),
		this.reverse('crossFade')
	);
	this.transition(
			this.childOf('#liquid-bind-demo'),
			this.use('toUp')
			);
	this.transition(
		this.hasClass('vehicles'),
		this.toValue(true),
		this.use('crossFade', {duration: 200}),
		this.reverse('toLeft', {duration: 200})
	);
	this.transition(
		this.hasClass('content'),
		this.toValue(true),
		this.use('toLeft', {duration: 500}),
		this.reverse('toLeft', {duration: 500})
	);
}
