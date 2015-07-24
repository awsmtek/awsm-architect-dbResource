'use_strict'

module.exports= DeleteResourceCommandFactory



function DeleteResourceCommandFactory(config) {
    return deleteResourceCommandFactory

    function deleteResourceCommandFactory($db, Resource, config) {
        return deleteResource

        function * deleteResource(connection, resource) {
            console.assert(resource && resource.id)

            var query= Resource.sql
                .delete()
                .where(
                    Resource.sql.id.equals(resource.id)
                )
            ;
            var result= yield $db.query(connection, query)
        }
    }

}
