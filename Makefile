#
# Meta.
#

USERNAME=ndhoule
NAME=hashtagraps
VERSION=$(shell git describe --abbrev=0 --tags)

#
# Binaries.
#

MOCHA = ./node_modules/.bin/mocha

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

# Clean up.
clean:
	@rm -rf *.log

# Clean up files and vendor dependencies.
distclean: clean
	@rm -rf node_modules

#
# Tasks.
#

# Run tests.
test:
	@$(MOCHA) \
		--ui bdd \
		--reporter spec \
		$(TESTS)
.PHONY: test

# Run tests in Docker.
test-docker: VERSION = dev
test-docker: build
	@docker run --rm -t $(USERNAME)/$(NAME):$(VERSION) make test
.PHONY: test-docker

# Build Docker container.
build:
	@echo "Building docker container $(USERNAME)/$(NAME):$(VERSION)..."
	@docker build -t $(USERNAME)/$(NAME):$(VERSION) .
.PHONY: build
.DEFAULT_GOAL=build

# Run Docker container.
run: build
	@docker run --rm -t -p 8080:8080 $(USERNAME)/$(NAME):$(VERSION)
