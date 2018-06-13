# Designs x Traina 3.0
###### Redesign and migration of code from Flask to Django + React adhering to an OO, component-based architecture. 

More context to be added.

### Getting Started

#### Requirements

Create a python virtualenv, `source` it, then `pip install` the requirements.

You will need PostgreSQL installed to run this application as-is.

#### Database Migration

Run this script from the top level directory to prepare model for migration:

```
$ python portfolio/manage.py makemigrations portfolio
```

Next run this to actually migrate over the model:

```
$ python portfolio/manage.py migrate portfolio
```

#### Running the Application

The package.json includes a script for running the application. Use `npm start` to run.

### TODO

- Blog
- Update Resume