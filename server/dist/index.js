"use strict";
var Glue = require('glue');
var Manifest = require('./manifest');
var composeOptions = {relativeTo: __dirname};
module.exports = Glue.compose.bind(Glue, Manifest.get('/'), composeOptions);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2x1ZSA9IHJlcXVpcmUoJ2dsdWUnKTtcbnZhciBNYW5pZmVzdCA9IHJlcXVpcmUoJy4vbWFuaWZlc3QnKTtcblxuXG52YXIgY29tcG9zZU9wdGlvbnMgPSB7XG4gICAgcmVsYXRpdmVUbzogX19kaXJuYW1lXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gR2x1ZS5jb21wb3NlLmJpbmQoR2x1ZSwgTWFuaWZlc3QuZ2V0KCcvJyksIGNvbXBvc2VPcHRpb25zKTtcbiJdLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==