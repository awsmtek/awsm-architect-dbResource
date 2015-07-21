'use_strict'

module.exports= DbResourceService



/**
 * DbResourceService
 *
 * @constructor
 * @return {DbResourceService}
 */
function DbResourceService(config) {

    this.config= config

}



DbResourceService.prototype.createGetResourceByKeyQuery= require('./queries/GetResourceByKey.js')()
DbResourceService.prototype.createGetResourcesQuery= require('./queries/GetResources.js')()
DbResourceService.prototype.createGetResourcesByKeyQuery= require('./queries/GetResourcesByKey.js')()

DbResourceService.prototype.createCreateResourceCommand= require('./commands/CreateResource.js')()
DbResourceService.prototype.createDeleteResourceCommand= require('./commands/DeleteResource.js')()
DbResourceService.prototype.createUpdateResourceCommand= require('./commands/UpdateResource.js')()
