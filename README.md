Express Routing Demo
--------------------

```
npm install
```

Documents
---------

- http://expressjs.com/en/guide/routing.html
- http://expressjs.com/en/4x/api.html

---------

1. Route paths
--------------

```
node route-paths.js
```

Good urls:

```
curl http://localhost:3000
curl http://localhost:3000/users/mike
curl http://localhost:3000/products/123
curl http://localhost:3000/google
curl http://localhost:3000/gooooooooooooooogle
```

Bad urls:

```
curl http://localhost:3000/products/not-numbers
curl http://localhost:3000/gogle
curl http://localhost:3000/googggggle
```

2. All kinds of http methods
----------------------------

```
node http-methods.js
```

```
curl http://localhost:3000/
curl -X PUT http://localhost:3000/
curl -X M-SEARCH http://localhost:3000/
```

3. `all` method
---------------

```
node route-all.js
```

```
curl http://localhost:3000/
curl -X PUT http://localhost:3000/
curl -X DELETE http://localhost:3000/
```

4. Global handlers
------------------

```
node global-handlers.js
```

```
curl http://localhost:3000/
```

5. Chain handlers
-----------------

```
node route-handlers.js
```

```
curl http://localhost:3000/multi-handlers
curl http://localhost:3000/handler-array
curl http://localhost:3000/handler-combine1
curl http://localhost:3000/handler-combine2
```

6. Same path with different route handlers
------------------------------------------

```
node same-route-paths.js
```

```
curl http://localhost:3000
curl -X PUT http://localhost:3000
```

7. All kinds of response methods
--------------------------------

```
node responses.js
```

```
curl -v http://localhost:3000/send1
curl -v http://localhost:3000/send2
curl -v http://localhost:3000/send3
curl -v http://localhost:3000/download1
curl -v http://localhost:3000/download2
curl -v http://localhost:3000/end
curl -v http://localhost:3000/json
curl http://localhost:3000/jsonp?callback=hello
curl -v http://localhost:3000/redirect
curl -v http://localhost:3000/render
curl -v http://localhost:3000/sendFile
curl -v http://localhost:3000/sendStatus
```
