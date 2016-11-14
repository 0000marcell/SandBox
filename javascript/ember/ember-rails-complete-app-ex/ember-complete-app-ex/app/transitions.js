export default function(){
	this.transition(
		this.fromRoute('users.user.todos'),
		this.toRoute('users.user.charts'),
		this.use('toUp'),
		this.reverse('toDown')
	);
	this.transition(
		this.fromRoute('users.user.charts'),
		this.toRoute('users.user.chat'),
		this.use('toUp'),
		this.reverse('toDown')
	);
}
