#
# Binaries.
#

_MOCHA = ./node_modules/.bin/_mocha

#
# Files.
#

TESTS = $(shell find test -name *.test.js)

#
# Tasks.
#

# Install node modules.
node_modules: package.json $(wildcard node_modules/**/package.json)
	@npm install

# Run tests.
test: node_modules
	@node --harmony_scoping --harmony_generators $(_MOCHA) \
		--ui bdd \
		--reporter spec \
		$(TESTS)
.PHONY: test
.DEFAULT_GOAL = test
