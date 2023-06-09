"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = {
  limit: 3
}

const PetSchema = new Schema({
    name            : { type: String, required: true }
  , species         : { type: String, required: true}
  , birthday        : { type: Date, required: true }
  , picUrl          : { type: String , required: true }
  , picUrlSq        : { type: String , required: true }
  , avatarUrl: {type: String, required: true}
  , favoriteFood    : { type: String, required: true}
  , description     : { type: String, minlength: 40, required: true }
  , price: {type: Number, required: true }
},
{
  timestamps: true
});

PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' });

// with weights
PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' }, {name: 'My text index', weights: {name: 10, species: 4, favoriteFood: 2, description: 1}});


PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
