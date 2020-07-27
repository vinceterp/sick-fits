const { GraphQLServer } = require ('graphql-yoga');
const { db } = require ('./db');
const { Query } = require ('./resolvers/Query');
const { Mutation } = require ('./resolvers/Mutation');

createServer = () =>{
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Query: {
                dogs (parent, args, ctx, info){
                    console.log(args);
                    return [{name: 'Doggy', breed: 'Shitzu'}, {name: 'Paul', breed: 'Doberman'}];
                }
            },
            Mutation:{}
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({...req, db})
    });
}

module.exports = createServer;