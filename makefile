NODE_PATH:=.

.PHONY: prod stage dev test

all: prod

prod:
	NODE_PATH=${NODE_PATH} NODE_ENV=production gulp

stage:
	NODE_PATH=${NODE_PATH} NODE_ENV=stage gulp

dev:
	NODE_PATH=${NODE_PATH} NODE_ENV=development gulp

server:
	NODE_ENV=development node_modules/.bin/webpack-dev-server --config webpack/dist.config.js --content-base app

test:
	NODE_PATH=${NODE_PATH} NODE_ENV=test gulp

bash:
	bash
