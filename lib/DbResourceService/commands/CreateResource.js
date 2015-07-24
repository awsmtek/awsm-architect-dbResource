'use_strict'

module.exports= CreateResourceCommandFactory



function CreateResourceCommandFactory(config) {
    return createResourceCommandFactory

    function createResourceCommandFactory($db, Resource, config) {
        return createResource

        function * createResource(connection, resource) {
            console.assert(resource)

            var resourceData= Resource.filterCreate(resource)
            console.assert(resourceData.id === undefined || resourceData.id === null)

            var query= Resource
                .insert(
                    resourceData
                )
            ;
            var result= yield $db.query(connection, query)

            resource.id= result.insertId

            return resource
        }
    }

}
