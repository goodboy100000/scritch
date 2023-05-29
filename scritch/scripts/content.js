goog.provide('Blockly.Blocks.scritch');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['open_popup_window'] = {
  /**
   * 
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPENPOPUPWINDOW,
      "args0": [
        {
          "type": "input_value",
          "name": "OPENPOPUPWINDOW"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};
