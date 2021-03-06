# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(name:		'Admin',
						email:	  'admin@admin.com',
						username: 'admin',
						password: '123456',
						admin: true,
						activated: true,
						activated_at: Time.zone.now)

10.times do |i|
	Task.create!(title: "Task #{i}", user_id: 1)	
end
