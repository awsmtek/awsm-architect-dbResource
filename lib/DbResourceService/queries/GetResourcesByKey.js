'use_strict'

module.exports= GetResourcesByKeyQueryFactory



function GetResourcesByKeyQueryFactory(config) {
    return getResourcesByKeyQueryFactory

    function getResourcesByKeyQueryFactory(k, $db, Resource, config) {
        console.assert(Resource[k])
        return getResourcesByKey

        function * getResourcesByKey(connection, key) {
            console.assert(key)

            var query= Resource
                .select(
                    Resource.star()
                )
            ;
            if (key instanceof Array) {
                query= query
                    .where(
                        Resource[k].in(key)
                    )
                ;
            } else {
                query= query
                    .where(
                        Resource[k].equals(key)
                    )
                ;
            }
            var result= yield $db.query(connection, query)

            return result
        }
    }

}
