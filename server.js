let { graphql, buildSchema } = require('graphql');

//Create Schema
let schema = buildSchema(`
	type Query { 
		hello: String
	}
`)

//Root = Resolver function at each endpoint
let root = {
	hello: () => {
		return 'Hello World!';
	},
};

//Run Query
graphql(schema, '{ hello }', root)
.then((response) => {
	console.log(response);
});