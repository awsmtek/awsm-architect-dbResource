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

            var resource

            if (Resource.filterSelect && Resource.filterSelect instanceof Function) {
                resource= Resource.filterSelect(result[0])
            } else {
                resource= result[0]
            }

            return resource
        }
    }

}
