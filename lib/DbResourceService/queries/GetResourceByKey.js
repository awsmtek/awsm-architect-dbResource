'use_strict'

module.exports= GetResourceByKeyQueryFactory



function GetResourceByKeyQueryFactory(config) {
    return getResourceByKeyQueryFactory

    function getResourceByKeyQueryFactory(k, $db, Resource, config) {
        console.assert(Resource[k])
        return getResourceByKey

        function * getResourceByKey(connection, key) {
            console.assert(key)

            var query= Resource
                .select(
                    Resource.star()
                )
                .where(
                    Resource[k].equals(key)
                )
            ;
            var result= yield $db.query(connection, query)

            return result[0]
        }
    }

}
