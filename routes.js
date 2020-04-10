var express = require('express'),
    router = express.Router(),
    ConnectUserController = require('./controllers/connectUserController.js'),
    GetFindCommandsController = require('./controllers/getFindCommandsController.js'),
    GetFindControlsController = require('./controllers/getFindControlsController.js'),
    GetLinkedDropDownValueStateController = require('./controllers/getLinkedDropDownValueStateController.js'),
    GetFindProfilesController = require('./controllers/getFindProfilesController.js'),
    GetXMLStyleSheetController = require('./controllers/getXMLStyleSheetController.js'),
    cuc = new ConnectUserController(),
    gfc = new GetFindCommandsController(),
    gfcntrls = new GetFindControlsController(),
    gldc = new GetLinkedDropDownValueStateController(),
    gfp = new GetFindProfilesController(),
    xml = new GetXMLStyleSheetController();

router.post('/common/ConnectUser', cuc.userDetails.bind(cuc));
router.post('/common/GetFindCommands', gfc.getCommands.bind(gfc));
router.post('/common/GetFindControls', gfcntrls.getControls.bind(gfcntrls));
router.post('/common/GetFindControls', gldc.getLinkedDropDownValue.bind(gldc));
router.post('/common/GetFindProfiles', gfp.findProfiles.bind(gfp));
router.post('/common/GetXMLStyleSheet', xml.getXMLStyleSheet.bind(xml));

module.exports = router;