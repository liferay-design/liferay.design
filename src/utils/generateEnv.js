const fs = require('fs')

const file = `${process.cwd()}/.env.development`

const message = `This is your very own .env.development file!\n\nThis is where you store all of your deepest, darkest secrets, tokens, and API keys.\n\n***** Never ever, ever, commit these things in a repo, or make them otherwise publicly available. *****\n\nPlease reach out to Paul Hanaoka if you need API keys.\n\nThis message will self destruct in 3...2...1...\n\n\n\n...just kidding, you need to replace these lines when you get some API keys.`

try {
	fs.open(file, 'r', function(err) {
		if (err) {
			fs.writeFile(file, message, function(err) {
				if (err) {
					console.log(err)
				}
				console.log('your .env.development file is ready to be populated w/the keys!')
			})
		} else {
			console.log('your .env.development file is there!')
		}
	})
} catch (err) {
	console.log('There is an issue with your .env.development file, this is not critical, but the site will not build correctly:', err)
}
