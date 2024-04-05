# baander

Media server project

## Development setup

To develop on this project you need:

- [docker](https://www.docker.com/)
- [ddev](https://ddev.readthedocs.io/en/stable/)
- [node.js](https://nodejs.org/en)
- [yarn 1.xx](https://yarnpkg.com/)

### Configuring ddev

Go into the .ddev folder and adjust the paths the docker-compose files so they suit your system.

### Starting the backend

`ddev restart`

## Directory structure

```
.ddev
  * docker development setup
app/ 
  - Packages
config/
  - Backend configuration
database/
  - factories/
     * Model fakers
  - migrations/
  - seeders/
graphql/
public/
resources/
  app/
    * Frontend source
  views/
    * Blade views
routes/
storage/
stubs/
  * Backend code generation templates
tests/
  * Backend tests
third_party/
  * Third party libraries (usually contains patches)
```
_Generated with https://tree.nathanfriend.io/_
