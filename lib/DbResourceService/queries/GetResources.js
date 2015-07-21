'use_strict'

module.exports= GetResourcesQueryFactory



function GetResourcesQueryFactory(config) {
    return getResourcesQueryFactory

    function getResourcesQueryFactory($db, Resource, config) {

        function * getResources(connection) {

            var query= Resource
                .select(
                    Resource.star()
                )
            ;
            var result= yield $db.query(connection, query)

            return result
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
