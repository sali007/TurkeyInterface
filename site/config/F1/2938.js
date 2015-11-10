UIProvider  ={"curId":"498","curNom":"MDL",
      "grpId" : "100003",
      "id" : "2938",
      "logo" : "2938.gif",
      "receiptName" : "",
      "sName" : "Oplata.md",
      "__objects" : [
                                        {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "4487"
                        }
                  ]
            },

            {
                  "__type" : "pages",
                  "__objects" : [
                        {
                             "pageId" : "6865",
                             "useOnline" : "true",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "header" : "Enter telephone number",
                                                     "mask" : "0<!^[76]+${1}><!^\\d+${7}>",
                                                     "name" : "account",
                                                     "regexp" : "^\\d{9}$",
                                                     "type" : "text_input"
                                               },
                                               {
                                                     "layout" : "DG",
                                                     "type" : "keyboard"
                                               }
                                         ]
                                   }
                             ]
                        }, 
                        {
                             "pageId" : "6582",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp1",
                                                     "disp_type" : "",
                                                     "header" : "Ваш Email:",
                                                     "mask" : "<!^.+${1,40}>",
                                                     "name" : "data",
                                                     "nobr" : "false",
                                                     "regexp" : "^.+$",
                                                     "strip" : "false",
                                                     "type" : "disp_input",
                                                     "visible" : "true"
                                               }
                                         ]
                                   }
                             ]
                        }     
                  ]
            }    
      ]
};

//UIProvider  ={"curId":"498","curNom":"MDL",
//  "grpId": "100003",
//  "id": "2938",
//  "logo": "2938.gif",
//  "receiptName": "",
//  "sName": "Oplata.md",
//  "small_logo": "",
//  "tag": "visible",
//  "__objects": [
//    {
//      "__type": "constParams"
//    },
//    {
//      "__type": "pages",
//      "__objects": [
//        {
//          "pageId": "30605",
//          "title": "",
//          "useOnline": "",
//          "__objects": [
//            {
//              "__type": "controls",
//              "__objects": [
//                {
//                  "header": "Enter telephone number",
//                  "footer": "",
//                  "mask": "0<!^[76]+${1}><!^\\d+${7}>",
//                  "name": "account",
//                  "nobr": "false",
//                  "regexp": "^\\d{9}$",
//                  "strip": "false",
//                  "type": "text_input"
//                },
//                {
//                  "layout": "DG",
//                  "type": "keyboard"
//                }
//              ]
//            }
//          ]
//        }
//      ]
//    }
//  ]
//}