'use_strict'

module.exports= GetResourcesQueryFactory



function GetResourcesQueryFactory(config) {
    return getResourcesQueryFactory

    function getResourcesQueryFactory($db, Resource, config) {

        function * getResources(connection, options) {
            var options= options || {}

            var query= Resource.sql
                .select(
                    Resource.sql.star()
                )
            ;

            if (options.filterQuery && options.filterQuery instanceof Function) {
                query= options.filterQuery(query)
            }

            var result= yield $db.query(connection, query)

            var resources

            if (Resource.filterSelect && Resource.filterSelect instanceof Function) {
                resources= result.map(function (resource) {
                    return Resource.filterSelect(resource)
                })
            } else {
                resources= result
            }

            return resources
        }

        //getResources.stream= function (connection) {
        //    var query= Resource
        //        .select(
        //            Resource.star()
        //        )
        //    ;
        //    return connection.query(query.toQuery('mysql').text).stream() // @todo
        //}

        return getResources
    }

}
