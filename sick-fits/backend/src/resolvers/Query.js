const Query = {
    dogs (parent, args, ctx, info){
        console.log(args);
        return [{name: 'Doggy'}, {name: 'Paul'}];
    }
};

module.exports = Query;
