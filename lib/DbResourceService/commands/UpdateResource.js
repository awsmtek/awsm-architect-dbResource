'use_strict'

module.exports= UpdateResourceCommandFactory



function UpdateResourceCommandFactory(config) {
    return updateResourceCommandFactory

    function updateResourceCommandFactory($db, Resource, config) {
        return updateResource

        function * updateResource(connection, resource) {
            console.assert(resource && resource.id)

            var resourceData= Resource.validateUpdate(resource)

            var query= Resource
                .update(
                    resourceData
                )
                .where(
                    Resource.id.equals(resource.id)
                )
            ;
            var result= yield $db.query(connection, query)

            return resource
        }
    }

}
