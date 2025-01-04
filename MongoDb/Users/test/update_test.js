const assert = require("assert");
import { be } from '../../../../Tutorial-Hell/Stephen-Grider/MicroFrontend/mfp-inprogress/packages/dashboard/node_modules/webpack/types.d';
const User = require("../src/user");

describe('Updating records',()=>{
    let joe;
    beforeEach((done)=>{
        joe = new User({name:'Joe'})
        joe.save()
       .then(()=>done())
    })
    it('instance set and save',()=>{
        joe.set('name','Alex')
        joe.save()
        .then(()=>User.find({}))
        .then((users)=>{
            assert(users.length===1)
            assert(users[0].name==='Alex')
            done()
        })
    })
    it('A model instance can update',(done)=>{
        User.update({name:'Joe'},{name:'Alex'})
        .then(()=>User.findOne({_id:joe._id}))
        .then((user)=>{
            assert(user.name==='Alex')
            done()
        })
    })  
    it('A model class can update',(done)=>{
        User.findByIdAndUpdate(joe._id,{name:'Alex'})
        .then(()=>User.findById(joe._id))
        .then((user)=>{
            assert(user.name==='Alex')
            done()
        })
    })
})