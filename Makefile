ifeq ($(MAKECMDGOALS),docker-stop)
-include .env
endif

ifeq ($(MAKECMDGOALS),docker-build)
-include .env
endif

ifeq ($(MAKECMDGOALS),docker-run)
-include .env
endif

ifeq ($(MAKECMDGOALS),local)
-include .env
endif

.PHONY: install test build local docker-stop docker-build docker-run start dev

install:
	npm install

test: install
	npm run test

pipeline:
	npm run lint
	npm run test

build: test
	npm run build

docker-stop:
	docker container stop $(PROJECT) || echo "Container $(PROJECT) already stopped"
	docker container rm $(PROJECT) || echo "Container $(PROJECT) already removed"

docker-build: docker-stop
	docker build -t $(PROJECT) .

docker-run: docker-build
	docker run -d -p $(PORT):$(PORT) \
		-e ENVIROMENT=$(ENVIROMENT) \
		-e PORT=$(PORT) \
		--name $(PROJECT) $(PROJECT)

local: build docker-run

start: build
	npm run serve

dev: install
	npm run start
