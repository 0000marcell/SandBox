# we can totally ignore active record and include validation directly in our class the same way that active record does
# ActiveModel::Validation has only the logic to validate the object and has nothing to do with saving or managing a database
class User
	include ActiveModel::Validations
	attr_accessor :password

	validate do
		errors.add(:base, "Don't let dad choose the password") if password == '12345'
	end
end
