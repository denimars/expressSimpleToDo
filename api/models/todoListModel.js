'use strict'

let mongose = require('mongoose');
let Schema = mongose.Schema;

let TaskSchema = new Schema({
  name:{
    type:String,
    required:'testing 1,2,3'
  },
  Created_date:{
    type:Date,
    default:Date.now
  },
  status:{
    type:[{
      type:String,
      enum:['pending', 'ongoing', 'completed']
    }],
    default:['pending']
  }

});

module.exports = mongose.model('Tasks', TaskSchema);