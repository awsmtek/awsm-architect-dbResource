'use_strict'

var DbResourceService= require('./lib/DbResourceService')



/**
 * awsm-architect-dbResource
 */
module.exports= function setup(options, imports, register) {

    console.assert(options.config, "Option 'config' is required")



    var $config= imports.$config

    var cfg= $config.create(options.config)



    var $dbResource= new DbResourceService(cfg)



    register(null, {
        $dbResource: $dbResource,
    })

}
